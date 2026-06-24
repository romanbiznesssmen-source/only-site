import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createMonoInvoice } from '@/lib/mono'
import { buildPaymentDestination, encodePaymentMeta } from '@/lib/paymentMeta'
import { splitContact } from '@/lib/parseContact'
import { ACCESS_PRICE, SITE_NAME, SITE_URL } from '@/app/site'

export async function POST(req: NextRequest) {
  try {
    const monoToken = process.env.MONO_TOKEN
    if (!monoToken) {
      return NextResponse.json(
        { error: 'Payments are temporarily unavailable. Please try again later.' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const contact = typeof body.contact === 'string' ? body.contact.trim() : ''
    const { phone, telegram } = splitContact(contact)

    if (!name) {
      return NextResponse.json({ error: 'Please enter your name' }, { status: 400 })
    }

    if (!contact) {
      return NextResponse.json({ error: 'Please enter your phone or Telegram' }, { status: 400 })
    }

    const reference = crypto.randomUUID()
    const amountMinor = ACCESS_PRICE * 100
    const siteUrl = SITE_URL
    const customer = { name, phone, telegram }
    const meta = encodePaymentMeta(customer)
    const destination = buildPaymentDestination(`Members access | ${SITE_NAME}`, customer)

    const invoice = await createMonoInvoice(monoToken, {
      amount: amountMinor,
      ccy: 980,
      merchantPaymInfo: {
        reference,
        destination,
        comment: meta,
        basketOrder: [
          {
            name: `Exclusive members access — ${SITE_NAME}`,
            qty: 1,
            sum: amountMinor,
            total: amountMinor,
            unit: 'access',
            code: meta,
          },
        ],
      },
      redirectUrl: `${siteUrl}/success?ref=${reference}`,
      webHookUrl: `${siteUrl}/api/mono-webhook`,
      validity: 3600,
      paymentType: 'debit',
    })

    return NextResponse.json({
      success: true,
      reference,
      invoiceUrl: invoice.pageUrl,
    })
  } catch (error) {
    console.error('[payment/create]', error)
    const message = error instanceof Error ? error.message : 'Could not create payment'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

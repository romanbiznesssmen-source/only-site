import { NextRequest, NextResponse } from 'next/server'
import {
  fetchMonoInvoiceStatus,
  fetchMonoPublicKey,
  verifyMonoWebhookSignature,
  type MonoWebhookPayload,
} from '@/lib/mono'
import { extractCustomerFromMonoPayload } from '@/lib/extractCustomerFromMonoPayload'
import { sendPaymentNotification } from '@/lib/telegram'
import { ACCESS_PRICE } from '@/app/site'

function resolveCustomer(
  payload: MonoWebhookPayload,
  invoice?: MonoWebhookPayload | null,
) {
  return extractCustomerFromMonoPayload(payload) ?? (invoice ? extractCustomerFromMonoPayload(invoice) : null)
}

export async function POST(req: NextRequest) {
  try {
    const monoToken = process.env.MONO_TOKEN
    if (!monoToken) {
      return NextResponse.json({ error: 'Not configured' }, { status: 500 })
    }

    const rawBody = await req.text()
    const signature = req.headers.get('x-sign') ?? ''

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    const publicKey = await fetchMonoPublicKey(monoToken)
    const isValid = verifyMonoWebhookSignature(publicKey, Buffer.from(rawBody), signature)

    if (!isValid) {
      console.error('[mono-webhook] Invalid signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const payload = JSON.parse(rawBody) as MonoWebhookPayload
    const { invoiceId, status } = payload

    if (!invoiceId) {
      return NextResponse.json({ ok: true })
    }

    if (status === 'success') {
      let invoice: MonoWebhookPayload | null = null

      try {
        invoice = await fetchMonoInvoiceStatus(monoToken, invoiceId)
      } catch (error) {
        console.error('[mono-webhook] Failed to fetch invoice status:', error)
      }

      const customer = resolveCustomer(payload, invoice)
      const reference =
        payload.reference ??
        payload.merchantPaymInfo?.reference ??
        invoice?.reference ??
        invoice?.merchantPaymInfo?.reference ??
        invoiceId

      const amountSource = invoice?.amount ?? payload.amount

      try {
        await sendPaymentNotification({
          name: customer?.name ?? 'Не вказано',
          phone: customer?.phone || '—',
          telegram: customer?.telegram || '',
          amount: amountSource ? amountSource / 100 : ACCESS_PRICE,
          invoiceId,
          reference,
        })
      } catch (error) {
        console.error('[mono-webhook] Telegram notification failed:', error)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[mono-webhook]', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { sendContactNotification } from '@/lib/telegram'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const comment = typeof body.comment === 'string' ? body.comment.trim() : ''

    if (!name || !phone) {
      return NextResponse.json({ error: 'Вкажіть ім\'я та номер телефону' }, { status: 400 })
    }

    await sendContactNotification({ name, phone, comment })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact]', error)
    const message = error instanceof Error ? error.message : 'Не вдалося надіслати заявку'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

function getTelegramConfig() {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw new Error('Telegram is not configured')
  }

  return { token, chatId }
}

async function sendTelegramMessage(text: string): Promise<void> {
  const { token, chatId } = getTelegramConfig()

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(`Telegram API error: ${JSON.stringify(data)}`)
  }
}

export type PaymentNotificationData = {
  name: string
  phone: string
  telegram: string
  amount: number
  invoiceId: string
  reference: string
}

export async function sendPaymentNotification(payment: PaymentNotificationData): Promise<void> {
  const lines = [
    '💳 <b>New members access payment</b>',
    '',
    `👤 <b>Ім'я:</b> ${escapeHtml(payment.name)}`,
  ]

  if (payment.phone && payment.phone !== '—') {
    lines.push(`📞 <b>Телефон:</b> ${escapeHtml(payment.phone)}`)
  }

  if (payment.telegram) {
    lines.push(`✈️ <b>Telegram:</b> ${escapeHtml(payment.telegram)}`)
  }

  lines.push(
    `💰 <b>Сума:</b> ${payment.amount} грн`,
    `🧾 <b>Рахунок:</b> ${escapeHtml(payment.invoiceId)}`,
    `🔖 <b>Reference:</b> ${escapeHtml(payment.reference)}`,
  )

  await sendTelegramMessage(lines.join('\n'))
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

import type { MonoWebhookPayload } from '@/lib/mono'
import { decodePaymentMeta } from '@/lib/paymentMeta'

export function extractCustomerFromMonoPayload(
  payload: MonoWebhookPayload,
): ReturnType<typeof decodePaymentMeta> {
  const candidates: Array<string | undefined | null> = [
    payload.destination,
    payload.merchantPaymInfo?.destination,
    payload.merchantPaymInfo?.comment,
  ]

  for (const item of payload.merchantPaymInfo?.basketOrder ?? []) {
    candidates.push(item.code, item.footer, item.header)
  }

  for (const candidate of candidates) {
    const decoded = decodePaymentMeta(candidate)
    if (decoded) return decoded
  }

  return null
}

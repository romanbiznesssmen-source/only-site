import crypto from 'crypto'

const MONO_API = 'https://api.monobank.ua/api/merchant'

export type MonoInvoicePayload = {
  amount: number
  ccy?: number
  merchantPaymInfo: {
    reference: string
    destination: string
    comment?: string
    basketOrder?: Array<{
      name: string
      qty: number
      sum: number
      total: number
      unit: string
      code: string
    }>
  }
  redirectUrl: string
  webHookUrl: string
  validity?: number
  paymentType?: 'debit'
}

export type MonoInvoiceResponse = {
  invoiceId: string
  pageUrl: string
}

export type MonoWebhookPayload = {
  invoiceId: string
  status: string
  amount: number
  ccy: number
  reference?: string
  destination?: string
  modifiedDate?: string
  failureReason?: string
  merchantPaymInfo?: {
    reference?: string
    destination?: string
    comment?: string
    basketOrder?: Array<{
      code?: string
      footer?: string
      header?: string
      name?: string
    }>
  }
}

export type MonoInvoiceStatus = MonoWebhookPayload

let cachedPublicKey: string | null = null

export async function fetchMonoPublicKey(token: string): Promise<string> {
  if (cachedPublicKey) return cachedPublicKey

  const res = await fetch(`${MONO_API}/pubkey`, {
    headers: { 'X-Token': token },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch Monobank public key: ${res.status}`)
  }

  const data = (await res.json()) as { key: string }
  cachedPublicKey = Buffer.from(data.key, 'base64').toString('utf-8')
  return cachedPublicKey
}

export function verifyMonoWebhookSignature(
  publicKeyPem: string,
  body: Buffer,
  signatureBase64: string
): boolean {
  try {
    const verify = crypto.createVerify('SHA256')
    verify.update(body)
    verify.end()
    return verify.verify(publicKeyPem, Buffer.from(signatureBase64, 'base64'))
  } catch {
    return false
  }
}

export async function createMonoInvoice(
  token: string,
  payload: MonoInvoicePayload
): Promise<MonoInvoiceResponse> {
  const res = await fetch(`${MONO_API}/invoice/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(
      typeof data === 'object' && data && 'errText' in data
        ? String((data as { errText: string }).errText)
        : 'Не вдалося створити рахунок Monobank'
    )
  }

  const { invoiceId, pageUrl } = data as MonoInvoiceResponse
  if (!invoiceId || !pageUrl) {
    throw new Error('Некоректна відповідь Monobank')
  }

  return { invoiceId, pageUrl }
}

export async function fetchMonoInvoiceStatus(
  token: string,
  invoiceId: string
): Promise<MonoInvoiceStatus> {
  const res = await fetch(`${MONO_API}/invoice/status?invoiceId=${encodeURIComponent(invoiceId)}`, {
    headers: { 'X-Token': token },
    cache: 'no-store',
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(
      typeof data === 'object' && data && 'errText' in data
        ? String((data as { errText: string }).errText)
        : `Не вдалося отримати статус рахунку: ${res.status}`
    )
  }

  return data as MonoInvoiceStatus
}

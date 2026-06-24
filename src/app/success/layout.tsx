import type { Metadata } from 'next'
import { SITE_NAME } from '../site'

export const metadata: Metadata = {
  title: `Оплата успішна | ${SITE_NAME}`,
  robots: { index: false, follow: false },
}

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return children
}

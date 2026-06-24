import type { Metadata, Viewport } from 'next'
import { montserrat } from './fonts'
import { rootMetadata } from './seo'
import './globals.css'
import './site.css'

export const metadata: Metadata = rootMetadata

export const viewport: Viewport = {
  themeColor: '#00AFF0',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

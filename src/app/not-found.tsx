import type { Metadata } from 'next'
import Link from 'next/link'
import BrandLogo from './components/BrandLogo'
import { SITE_NAME, SITE_NAV } from './site'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className={`marathon-page ${styles.page}`}>
      <div className={styles.glow} aria-hidden="true" />

      <main className={styles.inner}>
        <BrandLogo className={styles.logo} variant="dark" />

        <p className={styles.code} aria-hidden="true">404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.lead}>
          This page doesn&apos;t exist or may have been moved. Head back home and claim your free
          access to {SITE_NAME}&apos;s exclusive content.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            Back home
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </Link>
          <Link href="/#steps" className={styles.secondaryBtn}>
            Get access
          </Link>
        </div>

        <nav className={styles.links} aria-label="Quick links">
          {SITE_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </main>
    </div>
  )
}

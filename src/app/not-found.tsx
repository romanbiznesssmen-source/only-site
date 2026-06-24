import type { Metadata } from 'next'
import Link from 'next/link'
import BrandLogo from './components/BrandLogo'
import { SITE_NAME } from './site'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Сторінку не знайдено',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className={`marathon-page ${styles.page}`}>
      <div className={styles.glow} aria-hidden="true" />

      <main className={styles.inner}>
        <BrandLogo className={styles.logo} variant="dark" />

        <p className={styles.code} aria-hidden="true">404</p>
        <h1 className={styles.title}>Сторінку не знайдено</h1>
        <p className={styles.lead}>
          Схоже, ця адреса не існує або була переміщена. Поверніться на головну
          та приєднайтесь до марафону англійської в {SITE_NAME}.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryBtn}>
            На головну
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </Link>
          <Link href="/#pro-marafon" className={styles.secondaryBtn}>
            Дізнатись про марафон
          </Link>
        </div>

        <nav className={styles.links} aria-label="Корисні посилання">
          <Link href="/#programa">Програма</Link>
          <Link href="/#faq">Питання</Link>
          <Link href="/#kontakt">Залишити заявку</Link>
        </nav>
      </main>
    </div>
  )
}

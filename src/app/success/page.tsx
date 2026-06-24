import Link from 'next/link'
import { ACCESS_INCLUDES, SITE_NAME, TELEGRAM_BOT_URL } from '../site'
import styles from './success.module.css'

type Props = {
  searchParams: { ref?: string }
}

export default function SuccessPage({ searchParams }: Props) {
  const reference = searchParams.ref

  return (
    <div className={`marathon-page ${styles.page}`}>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden="true">✓</div>
          <h1 className={styles.title}>You&apos;re in!</h1>
          <p className={styles.lead}>
            Payment confirmed. Your members-only access to {SITE_NAME} is ready.
          </p>

          {reference && (
            <p className={styles.ref}>Order reference: <span>{reference}</span></p>
          )}

          <div className={styles.includes}>
            <p className={styles.includesTitle}>What&apos;s next:</p>
            <ul>
              {ACCESS_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.telegramBtn}
          >
            Open Telegram
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 14 L14 2 M6 2 H14 V10" />
            </svg>
          </a>

          <p className={styles.note}>
            Tap the button above to finish setup and unlock your content.
          </p>

          <Link href="/" className={styles.homeLink}>
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}

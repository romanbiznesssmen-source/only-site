import type { Metadata } from 'next'
import Link from 'next/link'
import { PRIVACY_POLICY_PATH, SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_URL } from '../site'
import styles from './privacy.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${SITE_NAME}: how we collect, use, and protect your personal data.`,
  alternates: { canonical: `${SITE_URL}${PRIVACY_POLICY_PATH}` },
  robots: { index: true, follow: true },
}

const UPDATED = 'June 15, 2026'

export default function PrivacyPage() {
  return (
    <div className="marathon-page">
      <main className={styles.page}>
        <div className={styles.inner}>
          <Link href="/" className={styles.backLink}>
            ← Back to home
          </Link>

          <article>
            <header className={styles.header}>
              <h1 className={styles.title}>Privacy Policy</h1>
              <p className={styles.updated}>Last updated: {UPDATED}</p>
            </header>

            <div className={styles.content}>
              <section className={styles.section}>
                <p>
                  This Privacy Policy describes how {SITE_NAME} (&quot;we&quot;) collects,
                  uses, and protects personal data of users of {SITE_URL} when you sign up
                  for access, complete a payment, or submit a request.
                </p>
              </section>

              <section className={styles.section}>
                <h2>1. Data we collect</h2>
                <p>We may receive the following personal data:</p>
                <ul>
                  <li>name;</li>
                  <li>phone number or Telegram contact;</li>
                  <li>payment data: invoice number, amount, transaction status (we do not store card details on our site).</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>2. Why we use your data</h2>
                <p>Personal data is used to:</p>
                <ul>
                  <li>provide access to exclusive content and process payments;</li>
                  <li>contact you about your membership;</li>
                  <li>deliver content and Telegram bot access;</li>
                  <li>respond to your requests;</li>
                  <li>comply with applicable law.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Legal basis</h2>
                <p>
                  We process your data based on your consent when you submit a form or
                  complete a payment, and to fulfill our agreement to provide access to
                  exclusive content.
                </p>
              </section>

              <section className={styles.section}>
                <h2>4. Third-party services</h2>
                <p>Data may be shared with:</p>
                <ul>
                  <li><strong>Monobank</strong> — online payment processing;</li>
                  <li><strong>Telegram</strong> — notifications and bot access;</li>
                  <li><strong>Vercel</strong> — website hosting.</li>
                </ul>
                <p>
                  We do not sell or share your personal data with third parties for marketing.
                </p>
              </section>

              <section className={styles.section}>
                <h2>5. Data retention</h2>
                <p>
                  Form and payment data is kept only as long as needed to provide access,
                  support your membership, and resolve issues. Payment information is
                  processed by Monobank under its security policy.
                </p>
              </section>

              <section className={styles.section}>
                <h2>6. Your rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>know what data we process about you;</li>
                  <li>request correction or deletion of your data;</li>
                  <li>withdraw consent for data processing;</li>
                  <li>file a complaint with your local data protection authority.</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>7. Security</h2>
                <p>
                  We use organizational and technical measures to protect personal data from
                  unauthorized access, loss, or disclosure.
                </p>
              </section>

              <section className={styles.section}>
                <h2>8. Contact</h2>
                <p>For privacy questions, contact us:</p>
                <ul>
                  <li>Email: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
                  <li>Phone: {SITE_PHONE_DISPLAY}</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>9. Policy updates</h2>
                <p>
                  We may update this Privacy Policy. The current version is always available
                  on this page with the date of the last update.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

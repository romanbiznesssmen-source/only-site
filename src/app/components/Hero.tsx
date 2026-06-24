'use client'
import Image from 'next/image'
import { SITE_HERO_IMAGE } from '../site'
import PaymentButton from './PaymentButton'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} data-hero aria-label="Landing">
      <div className={styles.bg}>
        <div className={styles.bgFrame}>
          <Image
            src={SITE_HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bgImage}
          />
        </div>
      </div>
      <div className={styles.overlay} />

      <div className={styles.body}>
        <div className={styles.contentZone}>
          <div className={styles.textBlock}>
            <span className={styles.onlineBadge}>
              <span className={styles.onlineDot} aria-hidden="true" />
              Online now
            </span>

            <h1 className={styles.headline}>
              <span className={styles.headlineLine}>You weren&apos;t supposed</span>
              <span className={`${styles.headlineLine} ${styles.accent}`}>to find this.</span>
            </h1>

            <p className={styles.subhead}>
              But since you&apos;re here&hellip;
              <br />
              I&apos;ll let you in.{' '}
              <span className={styles.accent}>For free.</span>
            </p>
          </div>

          <div className={styles.ctaBlock}>
            <PaymentButton className={`${styles.ctaButton} gradientCta`} aria-label="Claim free access">
              <span className={styles.ctaArrow} aria-hidden="true">→</span>
              Claim Free Access
            </PaymentButton>
            <p className={styles.disclaimer}>
              Free trial &middot; No card required &middot; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

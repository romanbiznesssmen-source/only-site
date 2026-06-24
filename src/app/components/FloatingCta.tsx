'use client'

import { useEffect, useState } from 'react'
import PaymentButton from './PaymentButton'
import styles from './FloatingCta.module.css'

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('[data-hero]')
    const finalCta = document.querySelector('[data-final-cta]')

    let heroInView = Boolean(hero)
    let finalCtaInView = false

    const updateVisibility = () => {
      setVisible(!heroInView && !finalCtaInView)
    }

    const observers: IntersectionObserver[] = []

    if (hero) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          heroInView = entry.isIntersecting
          updateVisibility()
        },
        { threshold: 0.08 },
      )
      heroObserver.observe(hero)
      observers.push(heroObserver)
    }

    if (finalCta) {
      const finalCtaObserver = new IntersectionObserver(
        ([entry]) => {
          finalCtaInView = entry.isIntersecting
          updateVisibility()
        },
        { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
      )
      finalCtaObserver.observe(finalCta)
      observers.push(finalCtaObserver)
    }

    if (!hero) {
      updateVisibility()
    }

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <div className={`${styles.bar} ${visible ? styles.visible : ''}`}>
      <PaymentButton className={`${styles.button} gradientCta`} aria-label="Get access" disabled={!visible}>
        <span className={styles.arrow} aria-hidden="true">→</span>
        Get Access
      </PaymentButton>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { CREATOR_NAME, MOMENT_VIDEOS } from '../content/videos'
import PaymentButton from './PaymentButton'
import styles from './RecentMoments.module.css'

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg className={styles.verifiedIcon} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#00AFF0" />
      <path
        d="M7.5 12.2l2.8 2.8 6.2-6.4"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type MomentCardProps = {
  src: string
  caption: string
  locked: boolean
}

function LockedVideoPreview({ src }: { src: string }) {
  const [posterUrl, setPosterUrl] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const video = document.createElement('video')
    video.muted = true
    video.playsInline = true
    video.preload = 'auto'
    video.src = src

    const captureFrame = () => {
      if (!video.videoWidth || !video.videoHeight) return

      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const context = canvas.getContext('2d')
      if (!context) return

      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      if (!cancelled) {
        setPosterUrl(canvas.toDataURL('image/jpeg', 0.84))
      }
    }

    const onLoadedData = () => {
      video.currentTime = 0.1
    }

    const onSeeked = () => {
      captureFrame()
    }

    video.addEventListener('loadeddata', onLoadedData)
    video.addEventListener('seeked', onSeeked)
    video.load()

    return () => {
      cancelled = true
      video.removeEventListener('loadeddata', onLoadedData)
      video.removeEventListener('seeked', onSeeked)
      video.src = ''
    }
  }, [src])

  return (
    <>
      {posterUrl ? (
        <img src={posterUrl} alt="" className={styles.previewImage} />
      ) : (
        <div className={styles.previewPlaceholder} aria-hidden="true" />
      )}
    </>
  )
}

function MomentCard({ src, caption, locked }: MomentCardProps) {
  const media = (
    <div className={styles.media}>
      {locked ? (
        <LockedVideoPreview src={src} />
      ) : (
        <video
          className={styles.video}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
      )}
      {locked && (
        <div className={styles.lockOverlay}>
          <div className={styles.lockBadge}>
            <LockIcon />
          </div>
          <span className={styles.lockLabel}>Members only</span>
        </div>
      )}
    </div>
  )

  return (
    <article className={`${styles.card} ${locked ? styles.cardLocked : ''}`}>
      {locked ? (
        <PaymentButton className={styles.cardButton} aria-label="Unlock members-only video">
          {media}
        </PaymentButton>
      ) : (
        media
      )}

      <footer className={styles.cardFooter}>
        <div className={styles.creatorRow}>
          <VerifiedIcon />
          <span className={styles.creatorName}>{CREATOR_NAME}</span>
        </div>
        <p className={styles.caption}>{caption}</p>
      </footer>
    </article>
  )
}

export default function RecentMoments() {
  return (
    <section className={styles.section} id="moments" aria-labelledby="moments-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="moments-title" className={styles.title}>
            <span className="gradientTitle">A</span>{' '}
            <em className={styles.titleEm}>glimpse</em>{' '}
            <span className="gradientTitle">inside</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {MOMENT_VIDEOS.map((video) => (
            <MomentCard
              key={video.id}
              src={video.src}
              caption={video.caption}
              locked={video.locked}
            />
          ))}
        </div>

        <PaymentButton className={`${styles.cta} gradientCta`} aria-label="Get free access">
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
          Get Free Access
        </PaymentButton>
      </div>
    </section>
  )
}

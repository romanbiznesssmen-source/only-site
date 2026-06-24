'use client'

import { useState } from 'react'
import styles from './ScenarioFlipCard.module.css'

export type ScenarioItem = {
  icon: string
  title: string
  translation: string
}

type Props = {
  scenario: ScenarioItem
  wide?: boolean
}

export default function ScenarioFlipCard({ scenario, wide = false }: Props) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className={`${styles.wrap} ${wide ? styles.wide : ''}`}>
      <button
        type="button"
        className={`${styles.flip} ${flipped ? styles.flipped : ''}`}
        onClick={() => setFlipped((value) => !value)}
        aria-pressed={flipped}
        aria-label={`${scenario.title}. ${flipped ? 'Сховати переклад' : 'Показати переклад англійською'}`}
      >
        <div className={styles.inner}>
          <div className={`${styles.face} ${styles.front}`}>
            <span className={styles.icon} aria-hidden="true">{scenario.icon}</span>
            <div className={styles.content}>
              <p className={styles.title}>{scenario.title}</p>
              <span className={styles.hint}>Натисніть для перекладу</span>
            </div>
          </div>

          <div className={`${styles.face} ${styles.back}`}>
            <span className={styles.icon} aria-hidden="true">{scenario.icon}</span>
            <div className={styles.content}>
              <p className={styles.translation}>{scenario.translation}</p>
              <span className={styles.hint}>Натисніть, щоб повернутись</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

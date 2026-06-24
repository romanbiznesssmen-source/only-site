'use client'

import { useState } from 'react'
import ScenarioFlipCard, { type ScenarioItem } from './ScenarioFlipCard'
import styles from './MarathonSections.module.css'

const MOBILE_INITIAL_COUNT = 5

type Props = {
  scenarios: ScenarioItem[]
}

export default function ScenarioGrid({ scenarios }: Props) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = scenarios.length > MOBILE_INITIAL_COUNT

  return (
    <>
      <div className={styles.scenarioGrid}>
        {scenarios.map((scenario, index) => (
          <div
            key={scenario.title}
            className={
              !expanded && index >= MOBILE_INITIAL_COUNT
                ? styles.scenarioHiddenMobile
                : undefined
            }
          >
            <ScenarioFlipCard
              scenario={scenario}
              wide={index === scenarios.length - 1}
            />
          </div>
        ))}
      </div>

      {hasMore && !expanded && (
        <button
          type="button"
          className={styles.scenarioMoreBtn}
          onClick={() => setExpanded(true)}
        >
          Показати ще
        </button>
      )}
    </>
  )
}

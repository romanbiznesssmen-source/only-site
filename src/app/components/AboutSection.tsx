import {
  ABOUT_COPY,
  ABOUT_EMPHASIS,
  CREATOR_NAME,
  INSIDE_FEATURES,
} from '../content/creator'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <>
      <section className={styles.section} id="about" aria-labelledby="about-title">
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 id="about-title" className={`${styles.title} gradientTitle`}>
              About me
            </h2>
          </header>
          <div className={styles.aboutCopy}>
            {ABOUT_COPY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className={styles.aboutEmphasis}>{ABOUT_EMPHASIS}</p>
            <p className={styles.signature}>&mdash; {CREATOR_NAME}</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="inside" aria-labelledby="inside-title">
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 id="inside-title" className={`${styles.title} gradientTitle`}>
              What&apos;s waiting for you
            </h2>
          </header>

          <ul className={styles.featureList}>
            {INSIDE_FEATURES.map((feature) => (
              <li key={feature.title} className={styles.featureItem}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

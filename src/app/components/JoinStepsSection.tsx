import { JOIN_STEPS } from '../content/creator'
import PaymentButton from './PaymentButton'
import styles from './JoinStepsSection.module.css'

export default function JoinStepsSection() {
  return (
    <section className={styles.section} id="steps" data-final-cta aria-labelledby="steps-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="steps-title" className={`${styles.title} gradientTitle`}>
            Here&apos;s how it works
          </h2>
        </header>

        <ol className={styles.stepsList}>
          {JOIN_STEPS.map((step) => (
            <li key={step.number} className={styles.stepItem}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.closing}>
          <p className={styles.closingLead}>I don&apos;t want everyone in here.</p>
          <p className={`${styles.closingSub} gradientTitle`}>
            Just the ones who
            <br />
            actually want to be.
          </p>
          <p className={styles.closingQuestion}>Are you one of them?</p>
        </div>

        <PaymentButton className={`${styles.cta} gradientCta`} aria-label="Yes, let me in">
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
          Yes. Let Me In.
        </PaymentButton>
        <p className={styles.disclaimer}>Free access. Limited spots.</p>
      </div>
    </section>
  )
}

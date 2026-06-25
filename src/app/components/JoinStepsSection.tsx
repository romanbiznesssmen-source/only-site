import { JOIN_CLOSING, JOIN_STEPS } from '../content/creator'
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
          <p className={styles.closingLead}>{JOIN_CLOSING.lead}</p>
          <p className={`${styles.closingSub} gradientTitle`}>
            {JOIN_CLOSING.highlight[0]}
            <br />
            {JOIN_CLOSING.highlight[1]}
          </p>
          <p className={styles.closingQuestion}>{JOIN_CLOSING.question}</p>
        </div>

        <PaymentButton className={`${styles.cta} gradientCta`} aria-label="Yes, let me in">
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
          {JOIN_CLOSING.cta}
        </PaymentButton>
        <p className={styles.disclaimer}>{JOIN_CLOSING.disclaimer}</p>
      </div>
    </section>
  )
}

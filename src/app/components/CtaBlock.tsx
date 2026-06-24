import TimerCard from './TimerCard'
import styles from './CtaBlock.module.css'

export default function CtaBlock() {
  return (
    <section className={`${styles.section} marathon-glow`}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.price}>
            Приєднуйся за <span className={styles.newPrice}>490 грн</span>{' '}
            <span className={styles.oldPrice}>замість 2 450 грн</span>
          </p>
          <p className={styles.note}>Місця обмежені. Акція діє до кінця дня</p>
        </div>
        <TimerCard />
      </div>
    </section>
  )
}

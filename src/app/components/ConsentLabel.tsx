import Link from 'next/link'
import { PRIVACY_POLICY_PATH } from '../site'
import styles from './ConsentLabel.module.css'

export default function ConsentLabel() {
  return (
    <>
      Погоджуюсь з{' '}
      <Link href={PRIVACY_POLICY_PATH} className={styles.link}>
        Політикою конфіденційності
      </Link>
    </>
  )
}

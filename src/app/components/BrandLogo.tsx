import { SITE_NAME } from '../site'
import styles from './BrandLogo.module.css'

type Props = {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
  className?: string
}

export default function BrandLogo({
  href = '/',
  size = 'md',
  variant = 'light',
  className = '',
}: Props) {
  const content = (
    <span className={`${styles.text} ${variant === 'dark' ? styles.darkText : ''}`}>
      <span className={styles.line1}>{SITE_NAME}</span>
    </span>
  )

  const classNames = [styles.logo, size === 'lg' ? styles.lg : '', size === 'sm' ? styles.sm : '', className]
    .filter(Boolean)
    .join(' ')

  if (!href) {
    return <div className={classNames}>{content}</div>
  }

  return (
    <a href={href} className={classNames} aria-label={SITE_NAME}>
      {content}
    </a>
  )
}

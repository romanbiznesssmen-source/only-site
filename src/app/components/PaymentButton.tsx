'use client'

import { type ReactNode } from 'react'
import { ACCESS_LINK } from '../site'

type PaymentButtonProps = {
  className?: string
  children: ReactNode
  'aria-label'?: string
  disabled?: boolean
  onBeforeOpen?: () => void
}

export default function PaymentButton({
  className,
  children,
  'aria-label': ariaLabel,
  disabled,
  onBeforeOpen,
}: PaymentButtonProps) {
  if (disabled) {
    return (
      <button type="button" className={className} disabled aria-label={ariaLabel}>
        {children}
      </button>
    )
  }

  return (
    <a
      href={ACCESS_LINK}
      className={className}
      aria-label={ariaLabel}
      onClick={() => onBeforeOpen?.()}
    >
      {children}
    </a>
  )
}

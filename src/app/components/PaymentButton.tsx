'use client'

import { type MouseEvent, type ReactNode } from 'react'
import { usePaymentModal } from './PaymentProvider'

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
  const { openPaymentModal } = usePaymentModal()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (disabled) return

    onBeforeOpen?.()
    openPaymentModal()
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { MARATHON_PRICE } from '../site'
import ConsentLabel from './ConsentLabel'
import { startPayment } from '@/lib/startPayment'
import styles from './PaymentModal.module.css'

type PaymentFormState = {
  name: string
  contact: string
  consent: boolean
}

type PaymentContextValue = {
  openPaymentModal: () => void
}

const PaymentContext = createContext<PaymentContextValue | null>(null)

const emptyForm = (): PaymentFormState => ({
  name: '',
  contact: '',
  consent: false,
})

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<PaymentFormState>(emptyForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const close = useCallback(() => {
    if (loading) return
    setOpen(false)
    setError('')
    setForm(emptyForm())
  }, [loading])

  const openPaymentModal = useCallback(() => {
    setError('')
    setForm(emptyForm())
    setOpen(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  const setField = (key: keyof PaymentFormState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = form.name.trim()
    const contact = form.contact.trim()

    if (!name) {
      setError('Вкажіть ім\'я')
      return
    }

    if (!contact) {
      setError('Вкажіть телефон або Telegram')
      return
    }

    if (!form.consent) return

    setLoading(true)
    setError('')

    try {
      await startPayment({ name, contact })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Сталася помилка. Спробуйте ще раз.')
      setLoading(false)
    }
  }

  return (
    <PaymentContext.Provider value={{ openPaymentModal }}>
      {children}

      {open && (
        <div
          className={styles.overlay}
          role="presentation"
          onClick={close}
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <div>
                <h2 id="payment-modal-title" className={styles.title}>
                  Оформлення доступу
                </h2>
                <p className={styles.subtitle}>
                  Заповніть дані — після цього відкриється оплата {MARATHON_PRICE} грн
                </p>
              </div>
              <button type="button" className={styles.close} onClick={close} aria-label="Закрити">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 4 L14 14 M14 4 L4 14" />
                </svg>
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="payment-name">Ім&apos;я</label>
                <input
                  id="payment-name"
                  type="text"
                  placeholder="Введіть ім'я"
                  value={form.name}
                  onChange={setField('name')}
                  required
                  autoFocus
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="payment-contact">Телефон або Telegram</label>
                <input
                  id="payment-contact"
                  type="text"
                  placeholder="+380... або @username"
                  value={form.contact}
                  onChange={setField('contact')}
                  required
                  autoComplete="tel username"
                />
              </div>

              <label className={styles.consent}>
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={setField('consent')}
                  required
                />
                <span><ConsentLabel /></span>
              </label>

              {error && <p className={styles.error}>{error}</p>}

              <button type="submit" className={styles.submit} disabled={!form.consent || loading}>
                {loading ? (
                  'Перенаправлення на оплату…'
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <path d="M2 10h20" />
                      <path d="M6 15h4" />
                    </svg>
                    Перейти до оплати {MARATHON_PRICE} грн
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </PaymentContext.Provider>
  )
}

export function usePaymentModal(): PaymentContextValue {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePaymentModal must be used within PaymentProvider')
  }
  return context
}

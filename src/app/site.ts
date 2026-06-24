export const SITE_NAME = 'Royal Academy School'
export const SITE_SHORT_NAME = 'Royal Academy'
export const SITE_LOGO = '/images/PNG-зображення 1.png'
export const SITE_HERO_IMAGE = '/content/hero/portrait.jpg'
export const SITE_CONTACT_IMAGE = '/images/3D4A6903.JPG'
export const SITE_MARATHON_STEPS_IMAGE = '/images/024.JPG'

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, '')
  if (!trimmed) return 'https://royalacademy.school'
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://royalacademy.school',
)

export const SITE_TITLE = `${SITE_NAME} | Марафон англійської за 10 занять`
export const SITE_DESCRIPTION =
  '10-тижневий онлайн-марафон англійської для рівня A1: 10 занять, 70 днів підтримки, speaking-практика, перевірка домашніх завдань і розіграш 10 000 грн. Доступ за 490 грн замість 2 450 грн.'

export const SITE_KEYWORDS = [
  'Royal Academy School',
  'марафон англійської',
  'вивчення англійської онлайн',
  'англійська для початківців',
  'курс англійської A1',
  'англійська за 10 занять',
  'онлайн курс англійської',
  'speaking англійська',
]

export const SITE_EMAIL = 'hello@royalacademy.school'
export const SITE_PHONE = '+380971234567'
export const SITE_PHONE_DISPLAY = '+380 97 123 45 67'

export const SITE_THEME_COLOR = '#00AFF0'

export const MARATHON_PRICE = 490
export const MARATHON_PRICE_OLD = 2450

export const TELEGRAM_BOT_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? 'https://t.me/TeleBotsNowayrmBot'

export const SITE_NAV = [
  { href: '/#pro-marafon', label: 'Про марафон' },
  { href: '/#programa', label: 'Програма' },
  { href: '/#faq', label: 'Питання' },
] as const

export const PRIVACY_POLICY_PATH = '/privacy'

export const TELEBOTS_URL = 'https://telebots.site/uk'

export const MARATHON_INCLUDES = [
  '10 занять з відео, практикою та speaking',
  '70 днів підтримки від куратора',
  'Перевірка домашніх завдань',
  'Доступ до Telegram-бота з уроками',
  'Участь у розіграші 10 000 грн',
] as const

export const SITE_FAQ = [
  { q: 'Скільки часу потрібно?', a: 'Близько 1 години на день.' },
  { q: 'Чи підійде для початківців?', a: 'Так. Марафон створений для рівня A1.' },
  { q: 'Чи перевіряються домашні завдання?', a: 'Так. Кожну роботу перевіряє куратор.' },
  { q: 'Чи потрібно вже говорити англійською?', a: 'Ні. Ми починаємо з найпростішої бази.' },
  { q: 'Якщо я пропущу заняття?', a: 'Уроки залишаються у вас, тому можна наздогнати програму.' },
] as const

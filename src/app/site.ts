import { CREATOR_NAME } from './content/creator'

export const SITE_NAME = CREATOR_NAME
export const SITE_SHORT_NAME = CREATOR_NAME
export const SITE_HERO_IMAGE = '/content/hero/portrait.jpg'

function normalizeSiteUrl(url: string): string {
  const trimmed = url.trim().replace(/\/$/, '')
  if (!trimmed) return 'https://only-site.vercel.app'
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://only-site.vercel.app',
)

export const SITE_TITLE = `${SITE_NAME} | Free Exclusive Access`
export const SITE_DESCRIPTION =
  'Get free access to Nancy Ace\'s members-only content — personal photos, unfiltered moments, and direct messages. Free trial. No card required.'

export const SITE_KEYWORDS = [
  'Nancy Ace',
  'exclusive content',
  'members only',
  'free access',
  'personal photos',
  'creator',
  'private content',
  'free trial',
]

export const SITE_EMAIL = process.env.SITE_CONTACT_EMAIL ?? 'hello@example.com'
export const SITE_PHONE = '+380971234567'
export const SITE_PHONE_DISPLAY = '+380 97 123 45 67'

export const SITE_THEME_COLOR = '#00AFF0'

export const MARATHON_PRICE = 490
export const MARATHON_PRICE_OLD = 2450

export const TELEGRAM_BOT_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? 'https://t.me/TeleBotsNowayrmBot'

export const SITE_NAV = [
  { href: '/#moments', label: 'Preview' },
  { href: '/#about', label: 'About' },
  { href: '/#inside', label: 'Inside' },
  { href: '/#steps', label: 'Join' },
] as const

export const PRIVACY_POLICY_PATH = '/privacy'

export const TELEBOTS_URL = 'https://telebots.site/uk'

export const ACCESS_INCLUDES = [
  'Create your account in under a minute',
  'Unlock members-only photos and videos',
  'Message me directly — I read everything',
  'New content added regularly',
] as const

/** @deprecated Use ACCESS_INCLUDES */
export const MARATHON_INCLUDES = ACCESS_INCLUDES

export const SITE_FAQ = [
  { q: 'Is it really free?', a: 'Yes. You can start with free access — no card required to get in.' },
  { q: 'What kind of content is inside?', a: 'Personal photos, unfiltered moments, and members-only updates you won\'t find anywhere else.' },
  { q: 'Do you actually reply to messages?', a: 'Yes. I read everything and reply to members personally.' },
  { q: 'Can I cancel anytime?', a: 'Yes. You\'re free to leave whenever you want.' },
  { q: 'How do I get access?', a: 'Tap Get Access, create an account, and you\'re in.' },
] as const

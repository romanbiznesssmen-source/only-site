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

export const SITE_TITLE = `${SITE_NAME} | Cosplay & Exclusive Access`
export const SITE_DESCRIPTION =
  'Octokuro — sexy cosplay creator from the geek world. Exclusive characters, roleplay, behind-the-scenes builds, and members-only content. Free trial. No card required.'

export const SITE_KEYWORDS = [
  'Octokuro',
  'cosplay creator',
  'geek girl',
  'cosplay queen',
  'hot nerd',
  'Warhammer 40k',
  'Dungeons and Dragons',
  'exclusive cosplay',
  'roleplay content',
  'members only',
  'free access',
  'convention crush',
]

export const SITE_EMAIL = process.env.SITE_CONTACT_EMAIL ?? 'hello@example.com'
export const SITE_PHONE = '+380971234567'
export const SITE_PHONE_DISPLAY = '+380 97 123 45 67'

export const SITE_THEME_COLOR = '#00AFF0'

export const ACCESS_PRICE = 490

export const TELEGRAM_BOT_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? 'https://t.me/TeleBotsNowayrmBot'

export const SITE_NAV = [
  { href: '/#moments', label: 'Preview' },
  { href: '/#about', label: 'About' },
  { href: '/#inside', label: 'Inside' },
  { href: '/#steps', label: 'Join' },
] as const

export const PRIVACY_POLICY_PATH = '/privacy'

export const ACCESS_INCLUDES = [
  'Create your account in under a minute',
  'Unlock exclusive cosplay, roleplay, and behind-the-scenes content',
  'Talk fandoms with me — I read and reply to everything',
  'New characters and builds added regularly',
] as const

export const SITE_FAQ = [
  { q: 'Is it really free?', a: 'Yes. You can start with free access — no card required to get in.' },
  {
    q: 'What kind of content is inside?',
    a: 'Full cosplay characters, roleplay scenes, behind-the-scenes builds, 3D-print props, and members-only exclusives you won\'t find on social media.',
  },
  {
    q: 'Do you actually reply to messages?',
    a: 'Yes. I love geek talk as much as flirting — I read everything and reply personally.',
  },
  { q: 'Can I cancel anytime?', a: 'Yes. You\'re free to leave whenever you want.' },
  { q: 'How do I get access?', a: 'Tap Get Access, create an account, and step inside.' },
] as const

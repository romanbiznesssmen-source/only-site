# Nancy Ace — Landing Page

Next.js 14 landing page with hero, video previews, payment flow, and members-only CTAs.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure

```
src/app/
├── page.tsx              # Home: Hero → Recent Moments → About → Steps
├── site.ts               # Brand, SEO, pricing constants
├── content/
│   ├── creator.ts        # Creator copy and features
│   └── videos.ts         # Video grid config
├── components/
│   ├── Hero.tsx
│   ├── RecentMoments.tsx
│   ├── AboutSection.tsx
│   ├── JoinStepsSection.tsx
│   ├── FloatingCta.tsx
│   └── PaymentProvider.tsx
└── api/
    ├── payment/create/   # Monobank invoice
    └── mono-webhook/     # Payment webhook → Telegram
```

## Environment

Copy `.env.example` to `.env`:

- `NEXT_PUBLIC_SITE_URL` — public site URL (canonical, OG, webhooks)
- `MONO_TOKEN` — Monobank acquiring token
- `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` — payment notifications
- `NEXT_PUBLIC_TELEGRAM_BOT_URL` — link on `/success`

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploying to Vercel.

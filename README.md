# Octokuro — Landing Page

Next.js 14 landing page for **Octokuro** — sexy cosplay creator from the geek world.

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
├── site.ts               # Brand, SEO, access link
├── content/
│   ├── creator.ts        # Creator copy and features
│   └── videos.ts         # Video grid config
└── components/
    ├── Hero.tsx
    ├── RecentMoments.tsx
    ├── AboutSection.tsx
    ├── JoinStepsSection.tsx
    ├── FloatingCta.tsx
    └── PaymentButton.tsx # CTA → smart link
```

## Environment

Copy `.env.example` to `.env`:

- `NEXT_PUBLIC_SITE_URL` — public site URL (canonical, OG, sitemap)
- `NEXT_PUBLIC_ACCESS_LINK` — smart link opened by all CTA buttons

## Deploy

Set both env vars on Vercel before deploying.

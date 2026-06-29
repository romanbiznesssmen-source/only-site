import type { Metadata } from 'next'
import Hero from './components/Hero'
import RecentMoments from './components/RecentMoments'
import AboutSection from './components/AboutSection'
import JoinStepsSection from './components/JoinStepsSection'
import FloatingCta from './components/FloatingCta'
import StructuredData from './components/StructuredData'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from './site'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
}

export default function Home() {
  return (
    <div className="marathon-page">
      <StructuredData />
      <main>
        <Hero />
        <RecentMoments />
        <AboutSection />
        <JoinStepsSection />
      </main>
      <FloatingCta />
    </div>
  )
}

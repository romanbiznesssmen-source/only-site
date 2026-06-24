import { CREATOR_NAME } from '../content/creator'
import {
  SITE_DESCRIPTION,
  SITE_FAQ,
  SITE_HERO_IMAGE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from '../site'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: CREATOR_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${SITE_HERO_IMAGE}`,
    description: SITE_DESCRIPTION,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en',
    description: SITE_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}#person` },
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    inLanguage: 'en',
    isPartOf: { '@id': `${SITE_URL}#website` },
    about: { '@id': `${SITE_URL}#person` },
    primaryImageOfPage: `${SITE_URL}${SITE_HERO_IMAGE}`,
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE_FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <JsonLd data={person} />
      <JsonLd data={website} />
      <JsonLd data={webPage} />
      <JsonLd data={faqPage} />
    </>
  )
}

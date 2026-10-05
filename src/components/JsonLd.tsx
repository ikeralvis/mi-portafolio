import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

export default async function JsonLd({ locale }: Readonly<{ locale: Locale }>) {
  const t = await getTranslations({ locale, namespace: 'personal' });

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: portfolioData.personal.name,
    jobTitle: t('role'),
    url: SITE_URL,
    image: `${SITE_URL}${portfolioData.personal.photo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bilbao",
      addressRegion: "País Vasco",
      addressCountry: "ES"
    },
    sameAs: [
      portfolioData.social.github,
      portfolioData.social.linkedin,
    ],
    affiliation: {
      "@type": "EducationalOrganization",
      name: "Universidad de Deusto",
      url: "https://www.deusto.es",
      sameAs: "https://es.linkedin.com/school/deusto/"
    },
    worksFor: {
      "@type": "Organization",
      name: "Ayesa Digital",
      url: "https://www.ayesa.com",
      sameAs: "https://es.linkedin.com/company/ayesa/"
    },
    knowsLanguage: ["es", "en", "eu"],
    alumniOf: { "@type": "EducationalOrganization", name: "Universidad de Deusto", url: "https://www.deusto.es" },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Liferay",
      "Supabase",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development"
    ],
    description: t('bio')
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ["Iker Alvis", "Iker Alvis Portfolio"],
    inLanguage: locale,
    description: t('bio'),
    author: { "@id": `${SITE_URL}/#person` }
  };

  const jsonLd = { "@context": "https://schema.org", "@graph": [person, website] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

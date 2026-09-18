import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { portfolioData } from '@/data/portfolio';

export default async function JsonLd({ locale }: Readonly<{ locale: Locale }>) {
  const t = await getTranslations({ locale, namespace: 'personal' });

  const person = {
    "@type": "Person",
    "@id": "https://ikeralvis-dev.vercel.app/#person",
    name: portfolioData.personal.name,
    jobTitle: t('role'),
    url: "https://ikeralvis-dev.vercel.app",
    image: `https://ikeralvis-dev.vercel.app${portfolioData.personal.photo}`,
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
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Liferay",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development"
    ],
    description: t('bio')
  };

  const website = {
    "@type": "WebSite",
    "@id": "https://ikeralvis-dev.vercel.app/#website",
    url: "https://ikeralvis-dev.vercel.app",
    name: "Iker Alvis",
    alternateName: ["Iker Alvis Veloso", "Iker Alvis Portfolio"],
    inLanguage: locale,
    author: { "@id": "https://ikeralvis-dev.vercel.app/#person" }
  };

  const jsonLd = { "@context": "https://schema.org", "@graph": [person, website] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

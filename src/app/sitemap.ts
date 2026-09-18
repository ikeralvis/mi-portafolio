import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const SITE_URL = 'https://ikeralvis-dev.vercel.app';

// Actualiza esta fecha cuando cambie el contenido real de la página.
const LAST_UPDATED = new Date('2026-09-18');

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {
    es: SITE_URL,
    en: `${SITE_URL}/en`,
  };

  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}

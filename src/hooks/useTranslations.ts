'use client';

import { useLocale } from '@/contexts/LocaleContext';
import es from '@/i18n/locales/es.json';
import en from '@/i18n/locales/en.json';

const translations = { es, en };

export function useTranslations(namespace: string) {
  const { locale } = useLocale();
  
  return (key: string) => {
    const messages = translations[locale];
    // @ts-expect-error - Dynamic namespace access
    return messages[namespace]?.[key] || key;
  };
}

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // Por defecto español
  const locale = 'es';

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default
  };
});

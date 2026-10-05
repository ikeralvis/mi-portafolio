'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from '@/i18n/navigation';
import { springHover, springTap } from '@/lib/motion';

export default function LanguageSwitch() {
  const locale = useLocale();
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === 'es' ? 'en' : 'es';

  return (
    <motion.button
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="glass flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors hover:glass-strong"
      whileHover={{ scale: 1.05, transition: springHover }}
      whileTap={{ scale: 0.95, transition: springTap }}
      aria-label={`${locale.toUpperCase()} - ${t('changeLanguage')}`}
      lang={locale}
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase">{locale}</span>
    </motion.button>
  );
}

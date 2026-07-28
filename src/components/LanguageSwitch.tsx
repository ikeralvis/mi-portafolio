'use client';

import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === 'es' ? 'en' : 'es';

  return (
    <motion.button
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="glass flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-all hover:glass-strong"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Change language"
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase">{locale}</span>
    </motion.button>
  );
}

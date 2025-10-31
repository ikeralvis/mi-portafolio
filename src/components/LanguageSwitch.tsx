'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <motion.button
      onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
      className="glass fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:glass-strong"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Change language"
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase">{locale}</span>
    </motion.button>
  );
}

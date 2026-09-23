'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { easeVercel, springHover, springTap } from '@/lib/motion';
import { useMounted } from '@/lib/useMounted';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full" aria-hidden />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="glass relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full transition-colors hover:glass-strong"
      whileHover={{ scale: 1.05, transition: springHover }}
      whileTap={{ scale: 0.95, transition: springTap }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
          transition={{ duration: 0.35, ease: easeVercel }}
          className="flex items-center justify-center"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

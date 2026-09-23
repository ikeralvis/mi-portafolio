'use client';

import { useEffect, useState } from 'react';
import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';

export default function NavControls() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full p-1 transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/5 dark:shadow-black/40'
          : 'border border-transparent bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-vercel)' }}
    >
      <LanguageSwitch />
      <ThemeToggle />
    </div>
  );
}

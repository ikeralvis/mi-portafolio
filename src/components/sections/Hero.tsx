'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { easeVercel, springHover, springTap } from '@/lib/motion';

export default function Hero() {
  const t = useTranslations('hero');
  const tPersonal = useTranslations('personal');
  const shouldReduceMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: easeVercel },
  });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeVercel }}
            className="space-y-6"
          >
            <motion.p {...rise(0.1)} className="text-lg text-zinc-500 dark:text-gray-400">
              {t('greeting')}
            </motion.p>

            <motion.h1 {...rise(0.2)} className="space-y-3">
              <span className="block text-5xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-7xl">
                {portfolioData.personal.name}
              </span>
              <span className="gradient-text block text-3xl font-semibold md:text-4xl">
                {tPersonal('role')}
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.4)}
              className="max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-gray-300"
            >
              {tPersonal('bio')}
            </motion.p>

            {/* Social links */}
            <motion.div {...rise(0.5)} className="flex gap-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-3 text-zinc-700 transition-colors hover:glass-strong hover:text-zinc-900 dark:text-gray-200 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-3 text-zinc-700 transition-colors hover:glass-strong hover:text-zinc-900 dark:text-gray-200 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin aria-hidden="true" className="h-5 w-5" />
              </a>
              <a
                href={portfolioData.social.email}
                className="glass rounded-full p-3 text-zinc-700 transition-colors hover:glass-strong hover:text-zinc-900 dark:text-gray-200 dark:hover:text-white"
                aria-label="Email"
              >
                <Mail aria-hidden="true" className="h-5 w-5" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...rise(0.6)} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: springHover }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97, transition: springTap }}
                className="shine-cta glass-strong inline-block rounded-full px-8 py-3 font-medium text-zinc-900 dark:text-white"
              >
                {t('cta')}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02, transition: springHover }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97, transition: springTap }}
                className="inline-block rounded-full border border-black/15 px-8 py-3 font-medium text-zinc-900 transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
              >
                {t('contact')}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easeVercel }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass-strong relative aspect-square w-full overflow-hidden rounded-3xl">
              {portfolioData.personal.photo ? (
                <Image
                  src={portfolioData.personal.photo}
                  alt={`${portfolioData.personal.name} - ${tPersonal('role')}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500/20 to-purple-500/20">
                  <div className="text-center">
                    <div className="mb-2 text-6xl">👨‍💻</div>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative elements */}
            <div aria-hidden="true" className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
            <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown aria-hidden="true" className="h-6 w-6 text-zinc-400 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

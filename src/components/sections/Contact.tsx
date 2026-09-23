'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Check, Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import {
  easeVercel,
  fadeInUp,
  fadeInItem,
  staggerContainer,
  springHover,
  springTap,
  viewportOnce,
} from '@/lib/motion';

export default function Contact() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const locale = useLocale();
  const [emailCopied, setEmailCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopyEmail = () => {
    const address = portfolioData.social.email.replace('mailto:', '');
    navigator.clipboard?.writeText(address).catch(() => {});
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1800);
  };

  const handleDownloadCv = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1200);
  };

  type SocialLink = {
    name: string;
    icon: typeof Mail;
    href: string;
    color: string;
    onClick?: () => void;
    copied?: boolean;
  };

  const socialLinks: SocialLink[] = [
    {
      name: t('email'),
      icon: Mail,
      href: portfolioData.social.email,
      color: 'hover:text-blue-500 dark:hover:text-blue-400',
      onClick: handleCopyEmail,
      copied: emailCopied,
    },
    {
      name: t('github'),
      icon: Github,
      href: portfolioData.social.github,
      color: 'hover:text-purple-500 dark:hover:text-purple-400',
    },
    {
      name: t('linkedin'),
      icon: Linkedin,
      href: portfolioData.social.linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-500',
    },
  ];

  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="glass-strong rounded-3xl p-8 text-center md:p-12"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mb-12 text-lg text-zinc-600 dark:text-gray-300">{t('description')}</p>

          {/* CV Download Button */}
          <motion.a
            href={locale === 'en' ? '/CV_Iker_En.pdf' : portfolioData.personal.cv}
            download
            onClick={handleDownloadCv}
            whileHover={{ scale: 1.02, transition: springHover }}
            whileTap={{ scale: 0.97, transition: springTap }}
            className={`glass-strong mb-12 inline-flex items-center gap-3 rounded-full px-8 py-4 font-medium text-zinc-900 transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/10 ${
              downloading ? 'animate-pulse' : ''
            }`}
          >
            <motion.span
              animate={downloading ? { rotate: 360 } : { rotate: 0 }}
              transition={downloading ? { repeat: Infinity, duration: 0.8, ease: 'linear' } : { duration: 0.2 }}
              className="flex"
            >
              <Download className="h-5 w-5" />
            </motion.span>
            {t('downloadCV')}
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
            className="grid gap-4 md:grid-cols-3"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                onClick={link.onClick}
                variants={fadeInItem}
                whileHover={{ scale: 1.03, transition: springHover }}
                whileTap={{ scale: 0.97, transition: springTap }}
                className={`glass flex items-center gap-3 rounded-xl p-4 text-zinc-700 transition-colors hover:glass-strong dark:text-gray-300 ${link.color}`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={link.copied ? 'check' : 'icon'}
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    transition={{ duration: 0.25, ease: easeVercel }}
                    className="flex"
                  >
                    {link.copied ? (
                      <Check className="h-6 w-6 text-green-500 dark:text-green-400" />
                    ) : (
                      <link.icon className="h-6 w-6" />
                    )}
                  </motion.span>
                </AnimatePresence>
                <span className="font-medium">{link.copied ? t('copied') : link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.6, ease: easeVercel }}
            className="mt-12 border-t border-black/10 pt-8 text-sm text-zinc-500 dark:border-white/10 dark:text-gray-500"
          >
            <p>
              © 2026 {portfolioData.personal.name}. {tFooter('rights')}.
            </p>
            <p className="mt-2">
              {tFooter('madeWith')} ❤️ {tFooter('by')}{' '}
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-medium text-zinc-600 dark:text-gray-400"
              >
                Iker Alvis
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

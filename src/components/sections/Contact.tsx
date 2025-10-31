'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');

  const socialLinks = [
    {
      name: t('email'),
      icon: Mail,
      href: portfolioData.social.email,
      color: 'hover:text-blue-400'
    },
    {
      name: t('github'),
      icon: Github,
      href: portfolioData.social.github,
      color: 'hover:text-purple-400'
    },
    {
      name: t('linkedin'),
      icon: Linkedin,
      href: portfolioData.social.linkedin,
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 text-center md:p-12"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="mb-12 text-lg text-gray-300">
            {t('description')}
          </p>

          {/* CV Download Button */}
          <motion.a
            href={portfolioData.personal.cv}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-strong mb-12 inline-flex items-center gap-3 rounded-full px-8 py-4 font-medium transition-all hover:bg-white/10"
          >
            <Download className="h-5 w-5" />
            {t('downloadCV')}
          </motion.a>

          {/* Social Links */}
          <div className="grid gap-4 md:grid-cols-3">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`glass flex items-center gap-3 rounded-xl p-4 transition-all hover:glass-strong ${link.color}`}
              >
                <link.icon className="h-6 w-6" />
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 border-t border-white/10 pt-8 text-sm text-gray-500"
          >
            <p>© 2025 {portfolioData.personal.name}. {tFooter('rights')}.</p>
            <p className="mt-2">
              {tFooter('madeWith')} ❤️ {tFooter('by')} Iker Alvis
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

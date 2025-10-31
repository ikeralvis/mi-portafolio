'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const t = useTranslations('hero');

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400"
            >
              {t('greeting')}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl font-bold tracking-tight text-white md:text-7xl"
            >
              {portfolioData.personal.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="gradient-text text-3xl font-semibold md:text-4xl"
            >
              {portfolioData.personal.role}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-lg text-lg leading-relaxed text-gray-300"
            >
              {portfolioData.personal.bio}
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-3 transition-all hover:glass-strong"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-3 transition-all hover:glass-strong"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={portfolioData.social.email}
                className="glass rounded-full p-3 transition-all hover:glass-strong"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="glass-strong rounded-full px-8 py-3 font-medium transition-all hover:scale-105"
              >
                {t('cta')}
              </button>
              <button
                onClick={scrollToContact}
                className="rounded-full border border-white/20 px-8 py-3 font-medium transition-all hover:bg-white/5"
              >
                {t('contact')}
              </button>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="glass-strong relative aspect-square w-full overflow-hidden rounded-3xl">
              {portfolioData.personal.photo ? (
                <Image
                  src={portfolioData.personal.photo}
                  alt={portfolioData.personal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <div className="text-center">
                    <div className="mb-2 text-6xl">👨‍💻</div>
                    <p className="text-sm text-gray-400">Foto de perfil</p>
                  </div>
                </div>
              )}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl" />
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

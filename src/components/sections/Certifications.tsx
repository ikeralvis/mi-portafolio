'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import { easeVercel, fadeInUp, fadeInItem, staggerContainer, viewportOnce } from '@/lib/motion';
import { handleSpotlightMove } from '@/lib/spotlight';

export default function Certifications() {
  const t = useTranslations('certifications');

  return (
    <section id="certifications" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-500 dark:text-gray-400">{t('description')}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioData.certifications.map((cert) => {
            const description = t.has(`items.${cert.id}.description`)
              ? t(`items.${cert.id}.description`)
              : null;

            return (
              <motion.article
                key={cert.id}
                variants={fadeInItem}
                onMouseMove={handleSpotlightMove}
                whileHover={{ y: -2, scale: 1.015, transition: { duration: 0.45, ease: easeVercel } }}
                className="spotlight-card glass relative flex flex-col rounded-2xl p-6 hover:glass-strong"
              >
                <div className="mb-4 flex items-start gap-3">
                  {cert.logo ? (
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white p-2">
                      <Image
                        src={cert.logo}
                        alt={`${cert.issuer} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="glass-strong shrink-0 rounded-full p-2">
                      <Award className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {t(`items.${cert.id}.title`)}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-gray-400">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ''}
                    </p>
                  </div>
                </div>

                {description && (
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-gray-300">
                    {description}
                  </p>
                )}

                {cert.credentialId && (
                  <p className="mt-auto break-all text-xs text-zinc-500 dark:text-gray-500">
                    {t('credentialId')}: {cert.credentialId}
                  </p>
                )}

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-500/25 dark:bg-blue-500/20 dark:text-blue-300 dark:hover:bg-blue-500/30 dark:hover:text-blue-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('viewCredential')}
                  </a>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { portfolioData } from '@/data/portfolio';
import { getIconForTech } from '@/lib/techIcons';
import { fadeInUp, fadeInItem, staggerContainer } from '@/lib/motion';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-500 dark:text-gray-400">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {portfolioData.stack.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeInUp}
              className="glass rounded-2xl p-6 transition-all hover:glass-strong"
            >
              <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
                {t(`stackLabels.${category.id}`)}
              </h3>
              <motion.ul
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2"
              >
                {category.technologies.map((tech) => {
                  const iconData = getIconForTech(tech);
                  const Icon = iconData?.icon;

                  return (
                    <motion.li
                      key={tech}
                      variants={fadeInItem}
                      className="flex items-center gap-3 text-zinc-700 dark:text-gray-300"
                    >
                      {Icon ? (
                        <Icon
                          className="h-5 w-5 shrink-0"
                          style={{ color: iconData.color }}
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      )}
                      <span>{tech}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

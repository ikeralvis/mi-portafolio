'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import { portfolioData } from '@/data/portfolio';
import { getIconForTech } from '@/lib/techIcons';

export default function About() {
  const t = useTranslations('about');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.stack.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 transition-all hover:glass-strong"
            >
              <h3 className="mb-4 text-xl font-semibold text-white">
                {category.category}
              </h3>
              <motion.ul
                variants={containerVariants}
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
                      variants={itemVariants}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      {Icon ? (
                        <Icon 
                          className="h-5 w-5" 
                          style={{ color: iconData.color }}
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      )}
                      <span>{tech}</span>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

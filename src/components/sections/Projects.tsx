'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ExternalLink, Code2, Star, Trophy } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';
import { getIconForTech } from '@/lib/techIcons';
import Image from 'next/image';
import { easeVercel, fadeInUp, fadeInItem, staggerContainer, viewportOnce } from '@/lib/motion';
import { handleSpotlightMove } from '@/lib/spotlight';

export default function Projects() {
  const t = useTranslations('projects');
  const [filter, setFilter] = useState<string>('all');

  const highlightProject = portfolioData.projects.find((p) => p.highlight);
  const restProjects = portfolioData.projects.filter((p) => !p.highlight);

  const filteredProjects =
    filter === 'all' ? restProjects : restProjects.filter((p) => p.technologies.includes(filter));

  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-500 dark:text-gray-400">{t('description')}</p>
        </motion.div>

        {/* Proyecto destacado (PFG) */}
        {highlightProject && (
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            onMouseMove={handleSpotlightMove}
            className="spotlight-card glass-strong relative mb-12 grid overflow-hidden rounded-3xl border border-blue-500/20 md:grid-cols-2"
          >
            <div className="absolute left-6 top-6 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-blue-200 backdrop-blur-md">
              <Star className="h-3 w-3 fill-blue-200" />
              {t('thesisProject')}
            </div>

            <div className="relative h-64 w-full overflow-hidden bg-linear-to-br from-blue-500/10 to-purple-500/10 md:h-full">
              {highlightProject.image ? (
                <Image
                  src={highlightProject.image}
                  alt={highlightProject.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-20">⛽</div>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-8">
              <h3 className="mb-3 text-3xl font-bold text-zinc-900 dark:text-white">
                {highlightProject.name}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-zinc-600 dark:text-gray-300">
                {t(`items.${highlightProject.id}.description`)}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {highlightProject.technologies.map((tech) => {
                  const iconData = getIconForTech(tech);
                  const Icon = iconData?.icon;

                  return (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-700 dark:bg-white/5 dark:text-gray-300"
                      title={tech}
                    >
                      {Icon && <Icon className="h-3 w-3" style={{ color: iconData.color }} />}
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-3">
                {highlightProject.repoUrl && (
                  <a
                    href={highlightProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-black/5 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-all hover:bg-black/10 hover:text-zinc-900 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    <Code2 className="h-4 w-4" />
                    {t('viewCode')}
                  </a>
                )}
                {highlightProject.demoUrl && (
                  <a
                    href={highlightProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-blue-500/15 px-5 py-2.5 text-sm font-medium text-blue-700 transition-all hover:bg-blue-500/25 dark:bg-blue-500/20 dark:text-blue-300 dark:hover:bg-blue-500/30 dark:hover:text-blue-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('viewDemoShort')}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        )}

        {/* Filtros de tecnología */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.05)}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          <motion.button
            variants={fadeInItem}
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === 'all'
                ? 'glass-strong text-zinc-900 dark:text-white'
                : 'glass text-zinc-500 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            {t('all')} ({restProjects.length})
          </motion.button>
          {['React', 'Next.js', 'Vite', 'Firebase', 'Django'].map((tech) => {
            const count = restProjects.filter((p) => p.technologies.includes(tech)).length;

            if (count === 0) return null;

            const iconData = getIconForTech(tech);
            const Icon = iconData?.icon;

            return (
              <motion.button
                key={tech}
                variants={fadeInItem}
                onClick={() => setFilter(tech)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === tech
                    ? 'glass-strong text-zinc-900 dark:text-white'
                    : 'glass text-zinc-500 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" style={{ color: iconData.color }} />}
                {tech} ({count})
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeInItem}
              layout
              onMouseMove={handleSpotlightMove}
              whileHover={{ y: -3, scale: 1.015, transition: { duration: 0.45, ease: easeVercel } }}
              className="spotlight-card glass group relative flex flex-col overflow-hidden rounded-2xl hover:glass-strong"
            >
              {/* Badge de destacado */}
              {project.featured && (
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-yellow-200 backdrop-blur-md">
                  <Star className="h-3 w-3 fill-yellow-200" />
                  {t('featured')}
                </div>
              )}

              {project.inDevelopment && (
                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur-md">
                  {t('inDevelopment')}
                </div>
              )}

              {/* Imagen del proyecto */}
              <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-blue-500/10 to-purple-500/10">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {project.name}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-gray-300">
                  {t(`items.${project.id}.description`)}
                </p>

                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => {
                    const iconData = getIconForTech(tech);
                    const Icon = iconData?.icon;

                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-600 dark:bg-white/5 dark:text-gray-400"
                        title={tech}
                      >
                        {Icon && <Icon className="h-3 w-3" style={{ color: iconData.color }} />}
                        {tech}
                      </span>
                    );
                  })}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-zinc-600 dark:bg-white/5 dark:text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-black/5 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:bg-black/10 hover:text-zinc-900 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      <Code2 className="h-4 w-4" />
                      {t('viewCode')}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500/15 px-4 py-2 text-sm font-medium text-blue-700 transition-all hover:bg-blue-500/25 dark:bg-blue-500/20 dark:text-blue-300 dark:hover:bg-blue-500/30 dark:hover:text-blue-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t('viewDemoShort')}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Concursos y reconocimientos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-2xl font-semibold text-zinc-900 dark:text-white">
            {t('competition.heading')}
          </h3>
          <article
            onMouseMove={handleSpotlightMove}
            className="spotlight-card glass-strong relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-yellow-500/20"
          >
            <div className="grid grid-cols-3 gap-1">
              {portfolioData.competitionPhotos.map((src) => (
                <div key={src} className="relative aspect-[4/3] bg-linear-to-br from-yellow-500/10 to-blue-500/10">
                  <Image
                    src={src}
                    alt={t('competition.photoAlt')}
                    fill
                    sizes="(max-width: 768px) 33vw, 256px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-start gap-4 p-6">
            <div className="glass-strong shrink-0 rounded-full p-2">
              <Trophy className="h-5 w-5 text-yellow-500 dark:text-yellow-300" />
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white">
                {t('competition.title')}
              </h4>
              <p className="mb-3 text-sm text-zinc-500 dark:text-gray-400">
                {t('competition.organizer')}
              </p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-gray-300">
                {t('competition.description')}
              </p>
            </div>
            </div>
          </article>
        </motion.div>

        {/* Mensaje si no hay proyectos con ese filtro */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-12 text-center"
          >
            <p className="text-zinc-500 dark:text-gray-400">{t('noResults')}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import { ExternalLink, Code2, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';
import { getIconForTech } from '@/lib/techIcons';
import Image from 'next/image';

export default function Projects() {
  const t = useTranslations('projects');
  const [filter, setFilter] = useState<string>('all');

  // Filtrar proyectos
  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400">
            {t('description')}
          </p>
        </motion.div>

        {/* Filtros de tecnología */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === 'all'
                ? 'glass-strong text-white'
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            Todos ({portfolioData.projects.length})
          </button>
          {['React', 'Next.js', 'Vite', 'Firebase', 'Django'].map((tech) => {
            const count = portfolioData.projects.filter(p => 
              p.technologies.includes(tech)
            ).length;
            
            if (count === 0) return null;
            
            const iconData = getIconForTech(tech);
            const Icon = iconData?.icon;
            
            return (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === tech
                    ? 'glass-strong text-white'
                    : 'glass text-gray-400 hover:text-white'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" style={{ color: iconData.color }} />}
                {tech} ({count})
              </button>
            );
          })}
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              layout
              className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-all hover:glass-strong"
            >
              {/* Badge de destacado */}
              {project.featured && (
                <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-300 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-yellow-300" />
                  Destacado
                </div>
              )}

              {/* Imagen del proyecto */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
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
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-300">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => {
                    const iconData = getIconForTech(tech);
                    const Icon = iconData?.icon;
                    
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                        title={tech}
                      >
                        {Icon && (
                          <Icon className="h-3 w-3" style={{ color: iconData.color }} />
                        )}
                        {tech}
                      </span>
                    );
                  })}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400">
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
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white"
                    >
                      <Code2 className="h-4 w-4" />
                      Código
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 transition-all hover:bg-blue-500/30 hover:text-blue-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mensaje si no hay proyectos con ese filtro */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-2xl p-12 text-center"
          >
            <p className="text-gray-400">
              No hay proyectos con esta tecnología
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

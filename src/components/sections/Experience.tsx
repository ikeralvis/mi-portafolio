'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';

export default function Experience() {
  const t = useTranslations('experience');

  const workExperience = portfolioData.experience.filter(exp => exp.type === 'work');
  const education = portfolioData.experience.filter(exp => exp.type === 'education');

  const ExperienceCard = ({ experience, index }: { experience: typeof portfolioData.experience[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass relative rounded-2xl p-6 transition-all hover:glass-strong"
    >
      <div className="mb-4 flex items-start gap-4">
        {/* Logo de la empresa/universidad */}
        {experience.companyLogo ? (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-white p-2">
            <Image
              src={experience.companyLogo}
              alt={`${experience.company} logo`}
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
        ) : (
          <div className="glass-strong rounded-full p-2">
            {experience.type === 'work' ? (
              <Briefcase className="h-5 w-5 text-blue-400" />
            ) : (
              <GraduationCap className="h-5 w-5 text-purple-400" />
            )}
          </div>
        )}

        {/* Información */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">
            {experience.position}
          </h3>
          <p className="text-gray-400">{experience.company}</p>
          <p className="mt-1 text-sm text-gray-500">{experience.period}</p>
        </div>
      </div>
      {Array.isArray(experience.description) ? (
        <ul className="list-disc space-y-2 pl-5 text-gray-300">
          {experience.description.map((point, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-300">{experience.description}</p>
      )}
    </motion.div>
  );

  return (
    <section id="experience" className="relative px-4 py-32">
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
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              {t('work')}
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <ExperienceCard key={idx} experience={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-white">
              {t('education')}
            </h3>
            <div className="space-y-6">
              {education.map((exp, idx) => (
                <ExperienceCard key={idx} experience={exp} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

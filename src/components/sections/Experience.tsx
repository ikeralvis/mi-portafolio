'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { fadeInUp } from '@/lib/motion';

const richStrong = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };

export default function Experience() {
  const t = useTranslations('experience');

  const workExperience = portfolioData.experience.filter((exp) => exp.type === 'work');
  const education = portfolioData.experience.filter((exp) => exp.type === 'education');

  const ExperienceCard = ({
    experience,
    index,
  }: {
    experience: (typeof portfolioData.experience)[0];
    index: number;
  }) => {
    const position = t(`${experience.id}.position`);
    const company = t(`${experience.id}.company`);

    return (
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="glass relative rounded-2xl p-6 transition-all hover:glass-strong"
      >
        <div className="mb-4 flex items-start gap-4">
          {/* Logo de la empresa/universidad */}
          {experience.companyLogo ? (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white p-2">
              <Image
                src={experience.companyLogo}
                alt={`${company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <div className="glass-strong rounded-full p-2">
              {experience.type === 'work' ? (
                <Briefcase className="h-5 w-5 text-blue-500 dark:text-blue-400" />
              ) : (
                <GraduationCap className="h-5 w-5 text-purple-500 dark:text-purple-400" />
              )}
            </div>
          )}

          {/* Información */}
          <div className="flex-1">
            {!experience.roleIds && (
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{position}</h3>
            )}
            <p
              className={
                experience.roleIds
                  ? 'text-xl font-semibold text-zinc-900 dark:text-white'
                  : 'text-zinc-500 dark:text-gray-400'
              }
            >
              {company}
            </p>
            {!experience.roleIds && (
              <p className="mt-1 text-sm text-zinc-500 dark:text-gray-500">
                {t(`${experience.id}.period`)}
              </p>
            )}
          </div>
        </div>

        {experience.roleIds ? (
          <div className="relative ml-1 space-y-6 border-l-2 border-black/10 pl-6 dark:border-white/10">
            {experience.roleIds.map((roleId, i) => (
              <div key={roleId} className="relative">
                <span
                  className={`absolute -left-[29px] top-1 h-3 w-3 rounded-full ring-4 ring-white dark:ring-black ${
                    i === 0 ? 'bg-blue-500 dark:bg-blue-400' : 'bg-black/20 dark:bg-white/30'
                  }`}
                />
                <h4 className="font-semibold text-zinc-900 dark:text-white">
                  {t(`${experience.id}.roles.${roleId}.position`)}
                </h4>
                <p className="mb-2 text-sm text-zinc-500 dark:text-gray-500">
                  {t(`${experience.id}.roles.${roleId}.period`)}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-gray-300">
                  {t.raw(`${experience.id}.roles.${roleId}.bullets`).map((_: string, j: number) => (
                    <li key={j}>
                      {t.rich(`${experience.id}.roles.${roleId}.bullets.${j}`, richStrong)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-gray-300">
            {t.raw(`${experience.id}.bullets`).map((_: string, i: number) => (
              <li key={i}>{t.rich(`${experience.id}.bullets.${i}`, richStrong)}</li>
            ))}
          </ul>
        )}
      </motion.div>
    );
  };

  return (
    <section id="experience" className="relative px-4 py-32">
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
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">{t('work')}</h3>
            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <ExperienceCard key={exp.id} experience={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-white">
              {t('education')}
            </h3>
            <div className="space-y-6">
              {education.map((exp, idx) => (
                <ExperienceCard key={exp.id} experience={exp} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

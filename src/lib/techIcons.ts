import { IconType } from 'react-icons';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFigma,
  SiJira,
  SiOpenai
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export interface TechIconMap {
  [key: string]: {
    icon: IconType;
    color: string;
  };
}

export const techIcons: TechIconMap = {
  // Frontend
  'React': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Next': { icon: SiNextdotjs, color: '#000000' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  
  // Backend
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Java': { icon: FaJava, color: '#007396' },
  
  // Database
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'Postgres': { icon: SiPostgresql, color: '#4169E1' },
  
  // Tools
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Git': { icon: SiGit, color: '#F05032' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'Scrum': { icon: SiJira, color: '#0052CC' },
  'IA Generativa': { icon: SiOpenai, color: '#10A37F' },
  'IA generativa': { icon: SiOpenai, color: '#10A37F' },
};

export const getIconForTech = (techName: string) => {
  return techIcons[techName] || null;
};

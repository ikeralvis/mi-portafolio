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
  SiOpenai, 
  SiVite,
  SiDjango,
  SiFirebase,
  SiMysql 
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt , FaJsSquare  } from 'react-icons/fa';

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
  'HTML': { icon: FaHtml5, color: '#E34F26' },
  'CSS': { icon: FaCss3Alt, color: '#1572B6' },
  'JavaScript': { icon: FaJsSquare, color: '#F7DF1E' },
  
  // Backend
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'Java': { icon: FaJava, color: '#007396' },
  'Django': { icon: SiDjango, color: '#092E20' },
  
  // Database
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'Postgres': { icon: SiPostgresql, color: '#4169E1' },
  'Firebase': { icon: SiFirebase, color: '#ff3e28ff' },
  'MySQL': { icon: SiMysql , color: '#4479A1' },
  
  // Tools
  'Docker': { icon: SiDocker, color: '#2496ED' },
  'Git': { icon: SiGit, color: '#F05032' },
  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'Scrum': { icon: SiJira, color: '#0052CC' },
  'IA Generativa': { icon: SiOpenai, color: '#10A37F' },
  'IA generativa': { icon: SiOpenai, color: '#10A37F' },
  'Vite': { icon: SiVite, color: '#646CFF' },
};

export const getIconForTech = (techName: string) => {
  return techIcons[techName] || null;
};

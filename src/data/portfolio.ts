export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    bio: string;
    photo: string;
    cv: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  stack: {
    category: string;
    technologies: string[];
  }[];
  experience: {
    position: string;
    company: string;
    companyLogo?: string;
    period: string;
    description: string;
    type: 'work' | 'education';
  }[];
  projects: {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    repoUrl?: string;
    demoUrl?: string;
    image?: string;
    featured?: boolean;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Iker Alvis Veloso",
    role: "Frontend Developer",
    bio: "Estudiante de Ingeniería Informática con experiencia práctica como desarrollador Front-end en Ayesa, especializado en la implementación de portales y aplicaciones con React.js y Liferay. Dominio de la metodología Scrum y de los fundamentos de programación con Java. Persona proactiva y orientada a resultados, enfocada en la calidad del código, el aprendizaje continuo y la colaboración en equipos multidisciplinares para entregar soluciones innovadoras y de valor.",
    photo: "/yo.JPG", 
    cv: "/CV_Iker_Es.pdf"
  },
  social: {
    github: "https://github.com/ikeralvis",
    linkedin: "https://linkedin.com/in/iker-veloso",
    email: "mailto:iker.a@opendeusto.es"
  },
  stack: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Java"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Others",
      technologies: ["Docker", "Git", "Figma", "Scrum", "IA Generativa"]
    }
  ],
  experience: [
    {
      position: "Desarrollador Front-End",
      company: "Ayesa",
      companyLogo: "/logos/ayesa.png", // Añade el logo de Ayesa en /public/logos/
      period: "Junio 2024 - Agosto 2025",
      description: "Desarrollo en Liferay Portales con tecnologías modernas. JavaScript avanzado, componentes reutilizables y optimización de rendimiento.",
      type: "work"
    },
    {
      position: "Ingeniería Informática",
      company: "Universidad de Deusto",
      companyLogo: "/logos/deusto.png", // Añade el logo de Deusto en /public/logos/
      period: "Sep 2022 - Jun 2026",
      description: "Grado en Ingeniería Informática con especialización en desarrollo web y arquitectura de software.",
      type: "education"
    }
  ],
  projects: [
    {
      id: "quicklink",
      name: "QuickLink - Acortador de URLs",
      description: "Acortador de URLs moderno con autenticación, análisis de enlaces y gestión de URLs personalizadas. Utiliza la API de TinyURL para generar enlaces cortos.",
      technologies: ["Next.js", "TypeScript", "Clerk Auth", "TinyURL API", "Tailwind CSS"],
      repoUrl: "https://github.com/ikeralvis/url-shortener",
      demoUrl: "https://quicklink-pearl.vercel.app/",
      image: "/projects/quicklink.png",
      featured: true
    },
    {
      id: "studiotools",
      name: "StudioTools",
      description: "Gestor de herramientas web con categorías personalizables, tres modos de visualización y búsqueda en tiempo real. Incluye autenticación completa y almacenamiento en la nube.",
      technologies: ["React", "Vite", "Firebase", "Tailwind CSS", "Lucide React"],
      repoUrl: "https://github.com/ikeralvis/MisHerramientas",
      demoUrl: "https://studiotools.netlify.app/",
      image: "/projects/studiotools.png",
      featured: true
    },
    {
      id: "cityinsight",
      name: "CityInsight",
      description: "🏆 1er Puesto OA6 University Deusto. Plataforma inteligente con IA generativa para mejorar la calidad de vida ciudadana, detectando problemas y ofreciendo soluciones rápidas a los gobiernos.",
      technologies: ["React", "IA Generativa", "IBM Watson", "Tailwind CSS"],
      repoUrl: "https://github.com/ikeralvis/CityInsight",
      demoUrl: "https://ikeralvis.github.io/CityInsight/",
      image: "/projects/cityinsight.png",
      featured: true
    },
    {
      id: "pinfluence",
      name: "Pinfluence Clone",
      description: "Clon de Pinterest con funcionalidad completa: visualización de fotos, descarga, favoritos, búsqueda avanzada y modo oscuro. Utiliza la API de Unsplash.",
      technologies: ["React", "React Router", "Unsplash API", "LocalStorage"],
      repoUrl: "https://github.com/ikeralvis/pinfluence-clone",
      demoUrl: "https://pinfluence-clone.vercel.app/",
      image: "/projects/pinfluence.png"
    },
    {
      id: "gasolineras",
      name: "Gasolineras España",
      description: "Consulta precios de gasolineras en España en tiempo real. Incluye ordenamiento por precio, búsqueda de estaciones y múltiples filtros para refinar resultados.",
      technologies: ["React", "Vite", "Tailwind CSS", "API Gobierno España"],
      repoUrl: "https://github.com/ikeralvis/gasolineras-app",
      demoUrl: "https://gasolineras-app-beta.vercel.app/",
      image: "/projects/gasolineras.png"
    },
    {
      id: "galeria-arte",
      name: "Galería de Arte",
      description: "Plataforma web para explorar colecciones de arte, cuadros y artistas. Incluye sistema de gestión completo con Django y diseño responsive.",
      technologies: ["Django", "HTML5", "CSS3", "Python"],
      repoUrl: "https://github.com/ikeralvis/GaleriaArte-IW",
      image: "/projects/galeria.png"
    }
  ]
};

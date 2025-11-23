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
    description: string | string[];
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
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Java", "Django"]
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"]
    },
    {
      category: "Tools & Others",
      technologies: ["Docker", "Git", "Figma", "Scrum", "IA Generativa", "Vite"]
    }
  ],
  experience: [
    {
      position: "Desarrollador Front-End",
      company: "Ayesa",
      companyLogo: "/logos/ayesa.png",
      period: "Junio 2025 - Actualmente",
      description: [
        "Desarrollo e implementación de páginas y componentes en portales <strong>Liferay</strong>.",
        "Creación de funcionalidades complejas y modulares usando <strong>Client Extensions</strong> basadas en <strong>React.js</strong> y <strong>JavaScript (ES6+)</strong>.",
        "Responsable de la corrección de <strong>bugs</strong> y el mantenimiento evolutivo de las aplicaciones para asegurar un óptimo rendimiento.",
        "Colaboración en equipos multidisciplinares aplicando la metodología ágil <strong>Scrum</strong>."
      ],
      type: "work"
    },
    {
      position: "Ingeniería Informática",
      company: "Universidad de Deusto",
      companyLogo: "/logos/deusto.png",
      period: "Sep 2022 - Actualmente",
      description: [
        "Formación integral en desarrollo de software y gestión de proyectos tecnológicos en la Universidad de Deusto.",
        "Conocimientos clave: Desarrollo Front-end (<strong>HTML, CSS, JavaScript, React</strong>), Back-end (<strong>Java, Python, C/C++</strong>), Bases de Datos (<strong>SQL, MySQL</strong>).",
        "Especializado en metodologías ágiles (<strong>Scrum</strong>) y principios de <strong>Arquitectura de Software</strong> y POO.",
        "Modelo educativo práctico con foco en la ética y la innovación tecnológica."
      ],
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
      technologies: ["HTML", "CSS", "JavaScript", "IA Generativa"],
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
    },
    {
      id: "skin-care-routine",
      name: "Skin Care Routine",
      description: "Aplicación web para gestionar y seguir rutinas de cuidado de la piel. Permite a los usuarios registrar productos, realizar un seguimiento de su uso y obtener recomendaciones personalizadas.",
      technologies: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firebase Firestore"],
      repoUrl: "https://github.com/ikeralvis/skincare-app",
      demoUrl: "https://mikelskinrutine.netlify.app/",
      image: "/projects/skin-care-routine.png"
    },
    {
      id: "tu-clima",
      name: "Tu Clima",
      description: "Aplicación web para consultar el clima en tiempo real. Permite a los usuarios buscar ciudades y ver la previsión del tiempo.",
      technologies: ["React", "Vite", "Tailwind CSS", "OpenWeather API"],
      repoUrl: "https://github.com/ikeralvis/mi-app-clima",
      demoUrl: "https://tu-clima-app.netlify.app/",
      image: "/projects/tu-clima.png"
    }, 
    {
      id: "countrip",
      name: "Countrip",
      description: "Aplicacion que permite registrar los viajes que has hecho.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/ikeralvis/countrip",
      demoUrl: "https://countrip.vercel.app/",
      image: "/projects/countrip.png"
    }
    
  ]
};

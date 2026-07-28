export interface PortfolioData {
  personal: {
    name: string;
    photo: string;
    cv: string;
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
  stack: {
    id: string;
    technologies: string[];
  }[];
  experience: {
    id: string;
    company: string;
    companyLogo?: string;
    period?: string;
    type: 'work' | 'education';
    roleIds?: string[];
  }[];
  projects: {
    id: string;
    name: string;
    technologies: string[];
    repoUrl?: string;
    demoUrl?: string;
    image?: string;
    featured?: boolean;
    highlight?: boolean;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Iker Alvis Veloso",
    photo: "/yo.JPG",
    cv: "/CV_Iker_Es.pdf"
  },
  social: {
    github: "https://github.com/ikeralvis",
    linkedin: "https://linkedin.com/in/iker-alvis",
    email: "mailto:ikeralvis14@gmail.com"
  },
  stack: [
    {
      id: "frontend",
      technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Liferay"]
    },
    {
      id: "database",
      technologies: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      id: "methodologies",
      technologies: ["Scrum"]
    },
    {
      id: "tools",
      technologies: ["Docker", "Git", "Figma"]
    }
  ],
  experience: [
    {
      id: "ayesa",
      company: "Ayesa Digital",
      companyLogo: "/logos/ayesa.png",
      type: "work",
      roleIds: ["current", "intern"]
    },
    {
      id: "deusto",
      company: "Universidad de Deusto",
      companyLogo: "/logos/deusto.png",
      type: "education"
    }
  ],
  projects: [
    {
      id: "tankgo",
      name: "TankGo",
      technologies: ["Next.js", "React", "TypeScript", "Fastify", "Python", "FastAPI", "PostgreSQL (Neon)", "Docker", "Google Cloud Run", "Gemini API", "LightGBM", "PWA"],
      repoUrl: "https://github.com/ikeralvis/gasolineras_project",
      demoUrl: "https://tankgo.dev",
      image: "/projects/tankgo.png",
      featured: true,
      highlight: true
    },
    {
      id: "studiotools",
      name: "StudioTools",
      technologies: ["React", "Vite", "Firebase", "Tailwind CSS", "Lucide React"],
      repoUrl: "https://github.com/ikeralvis/MisHerramientas",
      demoUrl: "https://studiotools.netlify.app/",
      image: "/projects/studiotools.png",
      featured: true
    },
    {
      id: "cityinsight",
      name: "CityInsight",
      technologies: ["HTML", "CSS", "JavaScript", "IA Generativa"],
      repoUrl: "https://github.com/ikeralvis/CityInsight",
      demoUrl: "https://ikeralvis.github.io/CityInsight/",
      image: "/projects/cityinsight.png",
      featured: true
    },
    {
      id: "pinfluence",
      name: "Pinfluence Clone",
      technologies: ["React", "React Router", "Unsplash API", "LocalStorage"],
      repoUrl: "https://github.com/ikeralvis/pinfluence-clone",
      demoUrl: "https://pinfluence-clone.vercel.app/",
      image: "/projects/pinfluence.png"
    },
    {
      id: "gasolineras",
      name: "Gasolineras España",
      technologies: ["React", "Vite", "Tailwind CSS", "API Gobierno España"],
      repoUrl: "https://github.com/ikeralvis/gasolineras-app",
      demoUrl: "https://gasolineras-app-beta.vercel.app/",
      image: "/projects/gasolineras.png"
    },
    {
      id: "galeria-arte",
      name: "Galería de Arte",
      technologies: ["Django", "HTML5", "CSS3", "Python"],
      repoUrl: "https://github.com/ikeralvis/GaleriaArte-IW",
      image: "/projects/galeria.png"
    },
    {
      id: "skin-care-routine",
      name: "Skin Care Routine",
      technologies: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firebase Firestore"],
      repoUrl: "https://github.com/ikeralvis/skincare-app",
      demoUrl: "https://mikelskinrutine.netlify.app/",
      image: "/projects/skin-care-routine.png"
    }
  ]
};

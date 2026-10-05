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
    inDevelopment?: boolean;
  }[];
  competitionPhotos: string[];
  certifications: {
    id: string;
    issuer: string;
    date?: string;
    logo?: string;
    credentialId?: string;
    url?: string;
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
      id: "deustotech",
      company: "DeustoTech - DEUSTEK / MoreLAB",
      companyLogo: "/logos/deustotech.png",
      type: "work"
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
      id: "fintek",
      name: "Fintek",
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Google OAuth", "PWA"],
      demoUrl: "https://fintek-app.vercel.app/",
      image: "/projects/fintek.png",
      featured: true
    },
    {
      id: "waytro",
      name: "Waytro",
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL (Neon)"],
      image: "/projects/waytro.png",
      inDevelopment: true
    },
    {
      id: "bilbotrans",
      name: "BilboTrans",
      technologies: ["Next.js", "React", "TypeScript"],
      repoUrl: "https://github.com/ikeralvis/bilbotrans",
      demoUrl: "https://bilbotrans.vercel.app/",
      image: "/projects/bilbotrans.png",
      inDevelopment: true
    },
    {
      id: "blogs",
      name: "Blogs",
      technologies: ["Astro", "Netlify"],
      image: "/projects/blogs.png",
      inDevelopment: true
    },
    {
      id: "pinfluence",
      name: "Pinfluence Clone",
      technologies: ["React", "React Router", "Unsplash API", "LocalStorage"],
      repoUrl: "https://github.com/ikeralvis/pinfluence-clone",
      demoUrl: "https://pinfluence-clone.vercel.app/",
      image: "/projects/pinfluence.png"
    }
  ],
  competitionPhotos: ["/projects/oa6-1.jpg", "/projects/oa6-2.jpg", "/projects/oa6-3.jpg"],
  certifications: [
    {
      id: "ai-intro",
      issuer: "LinkedIn Learning",
      logo: "/logos/linkedin.png",
      date: "2024-06",
      credentialId: "76cb144debb0eae4a88bc07c004a0b10443c9372d4a924e9f78848db3fcb1d98",
      url: "https://www.linkedin.com/learning/certificates/76cb144debb0eae4a88bc07c004a0b10443c9372d4a924e9f78848db3fcb1d98"
    },
    {
      id: "digital-skills",
      issuer: "Google",
      logo: "/logos/google.png",
      date: "2024-05",
      credentialId: "298873731",
      url: "https://skillshop.exceedlms.com/student/award/dwQA5bJxJT6BqHAu8y7w2rq2"
    },
    {
      id: "web-intro",
      issuer: "Google",
      logo: "/logos/google.png",
      date: "2024-05",
      credentialId: "298833045",
      url: "https://skillshop.exceedlms.com/student/award/7NtrwDU5QHXp8ToyG28bj4va"
    },
    {
      id: "cambridge-b2",
      issuer: "Cambridge English",
      logo: "/logos/cambridge.png",
      date: "2025"
    },
    {
      id: "habe-b2",
      issuer: "HABE · Eusko Jaurlaritza",
      logo: "/logos/habe.png",
      date: "2022-05",
      credentialId: "J0D0Z-T3PQM-SR2R"
    }
  ]
};

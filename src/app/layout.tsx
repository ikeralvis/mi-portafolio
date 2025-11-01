import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { LocaleProvider } from '@/contexts/LocaleContext';
import LanguageSwitch from '@/components/LanguageSwitch';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap', // AGREGAR: evita FOIT (Flash of Invisible Text)
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ikeralvis-dev.vercel.app'),
  title: {
    default: "Iker Alvis Veloso | Frontend Developer & Ingeniero",
    template: "%s | Iker Alvis"
  },
  description: "Estudiante de Ingeniería Informática y Frontend Developer. Experiencia en Ayesa con React, Next.js y Liferay. Portfolio con proyectos reales.",
  keywords: [
    "Iker Alvis Veloso",
    "Frontend Developer",
    "Desarrollador Frontend",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Liferay",
    "Tailwind CSS",
    "Portfolio",
    "Ayesa",
    "Universidad de Deusto",
    "Bilbao",
    "España",
    "Estudiante de Ingeniería Informática",
    "Frontend en formación",
    "Proyectos con React",
    "Desarrollo web moderno"
  ],
  authors: [{ name: "Iker Alvis Veloso", url: "https://github.com/ikeralvis" }],
  creator: "Iker Alvis Veloso",
  publisher: "Iker Alvis Veloso",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://ikeralvis-dev.vercel.app",
    title: "Iker Alvis Veloso | Frontend Developer en formación",
    description: "Portfolio profesional de Iker Alvis Veloso. Estudiante de Ingeniería Informática y desarrollador Frontend con experiencia en React, Next.js y Liferay (Ayesa).",
    siteName: "Iker Alvis Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Iker Alvis Veloso - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iker Alvis Veloso | Frontend Developer en formación",
    description: "Portfolio personal: React, Next.js, TypeScript y Liferay. Estudiante de Ingeniería Informática en Deusto.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ikeralvis-dev.vercel.app",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ES" className="dark">
      <head>
        <meta name="google-site-verification" content="tiZShbIP9iXkI7sKRl0uBUpEPisZGATKlzLvP_czs6I" />
        <link rel="canonical" href="https://ikeralvis-dev.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Iker Alvis Veloso",
              jobTitle: "Frontend Developer en formación",
              url: "https://ikeralvis-dev.vercel.app",
              image: "https://ikeralvis-dev.vercel.app/yo.JPG",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bilbao",
                addressRegion: "País Vasco",
                addressCountry: "ES"
              },
              sameAs: [
                "https://github.com/ikeralvis",
                "https://linkedin.com/in/iker-veloso",
              ],
              affiliation: {
                "@type": "EducationalOrganization",
                name: "Universidad de Deusto",
                url: "https://www.deusto.es",
                sameAs: "https://es.linkedin.com/school/deusto/"
              },
              worksFor: {
                "@type": "Organization",
                name: "Ayesa",
                url: "https://www.ayesa.com",
                sameAs: "https://es.linkedin.com/company/ayesa/"
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Liferay",
                "Tailwind CSS",
                "Frontend Development",
                "Web Development"
              ],
              description: "Estudiante de Ingeniería Informática y desarrollador Frontend en formación con experiencia en Liferay, React y Next.js."
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LocaleProvider>
          <LanguageSwitch />
          {children}
          {/* Vercel Web Analytics */}
          <Analytics />
          <SpeedInsights />
        </LocaleProvider>
      </body>
    </html>
  );
}

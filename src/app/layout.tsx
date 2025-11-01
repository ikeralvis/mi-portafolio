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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ikeralvis-dev.vercel.app'),
  title: {
    default: "Iker Alvis Veloso | Frontend Developer",
    template: "%s | Iker Alvis"
  },
  description: "Desarrollador Frontend especializado en React, Next.js, TypeScript y Liferay. Experiencia en Ayesa desarrollando portales web. Estudiante de Ingeniería Informática en Universidad de Deusto.",
  keywords: [
    "Iker Alvis",
    "Iker Alvis Veloso",
    "Frontend Developer",
    "Desarrollador Frontend",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Liferay Developer",
    "Portfolio",
    "Web Developer",
    "Ayesa",
    "Universidad Deusto",
    "Bilbao",
    "España",
    "Spain"
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
    title: "Iker Alvis Veloso | Frontend Developer",
    description: "Portfolio profesional de Iker Alvis Veloso. Desarrollador Frontend con experiencia en React, Next.js, Liferay y tecnologías modernas.",
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
    title: "Iker Alvis Veloso | Frontend Developer",
    description: "Portfolio profesional - React, Next.js, TypeScript, Liferay",
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
    <html lang="es" className="dark">
      <head>
        <meta name="google-site-verification" content="tiZShbIP9iXkI7sKRl0uBUpEPisZGATKlzLvP_czs6I" />
        <link rel="canonical" href="https://ikeralvis-dev.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Iker Alvis Veloso",
              jobTitle: "Frontend Developer",
              url: "https://ikeralvis-dev.vercel.app",
              image: "https://ikeralvis-dev.vercel.app/yo.JPG",
              sameAs: [
                "https://github.com/ikeralvis",
                "https://linkedin.com/in/iker-veloso",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Universidad de Deusto",
                url: "https://www.deusto.es"
              },
              worksFor: {
                "@type": "Organization",
                name: "Ayesa",
                url: "https://www.ayesa.com"
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
              description: "Desarrollador Frontend especializado en React, Next.js y Liferay con experiencia en Ayesa"
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

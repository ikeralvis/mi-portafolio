import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from '@/contexts/LocaleContext';
import LanguageSwitch from '@/components/LanguageSwitch';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Iker Alvis Velos | Frontend Developer",
  description: "Portfolio de Iker Alvis Velos - Desarrollador Frontend especializado en React, Next.js y tecnologías modernas",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Iker Alvis Velos" }],
  openGraph: {
    title: "Iker Alvis Velos | Frontend Developer",
    description: "Portfolio de Iker Alvis Velos - Desarrollador Frontend",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <LocaleProvider>
          <LanguageSwitch />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { MotionConfig } from 'framer-motion';
import { routing, type Locale } from '@/i18n/routing';
import NavControls from '@/components/NavControls';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const localePath = locale === routing.defaultLocale ? '' : `/${locale}`;
  const canonical = `${SITE_URL}${localePath}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: "%s | Iker Alvis"
    },
    description: t('description'),
    keywords: [
      "Iker Alvis Veloso",
      "Liferay Frontend Developer",
      "Desarrollador Frontend",
      "React",
      "Next.js",
      "TypeScript",
      "Portfolio",
      "Bilbao",
      "Ayesa Digital",
      "Universidad de Deusto"
    ],
    authors: [{ name: "Iker Alvis Veloso", url: "https://github.com/ikeralvis" }],
    applicationName: "Iker Alvis",
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
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
      url: canonical,
      title: t('title'),
      description: t('ogDescription'),
      siteName: SITE_NAME,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('twitterDescription'),
      images: ["/og-image.png"],
    },
    alternates: {
      canonical,
      languages: {
        es: SITE_URL,
        en: `${SITE_URL}/en`,
        'x-default': SITE_URL,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const tNav = await getTranslations({ locale, namespace: 'nav' });

  return (
    <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="tiZShbIP9iXkI7sKRl0uBUpEPisZGATKlzLvP_czs6I" />
        <JsonLd locale={locale} />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <a href="#main" className="skip-link">{tNav('skipToContent')}</a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>
            <MotionConfig reducedMotion="user">
              <NavControls />
              {children}
              <Analytics />
              <SpeedInsights />
            </MotionConfig>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

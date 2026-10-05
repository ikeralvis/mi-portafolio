'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, Link2, Linkedin } from 'lucide-react';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { SITE_URL } from '@/lib/seo';

const linkClass =
  'glass flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:glass-strong hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white';

export default function ShareLinks() {
  const t = useTranslations('share');
  const locale = useLocale();
  const [copied, setCopied] = useState(false);

  const url = locale === 'es' ? SITE_URL : `${SITE_URL}/${locale}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(t('text'));

  const copy = () => {
    navigator.clipboard?.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-sm text-zinc-500 dark:text-gray-500">{t('label')}</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('linkedin')}
        className={linkClass}
      >
        <Linkedin aria-hidden="true" className="h-4 w-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('x')}
        className={linkClass}
      >
        <FaXTwitter aria-hidden="true" className="h-4 w-4" />
      </a>
      <a
        href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('whatsapp')}
        className={linkClass}
      >
        <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
      </a>
      <button type="button" onClick={copy} aria-label={t('copy')} className={linkClass}>
        {copied ? (
          <Check aria-hidden="true" className="h-4 w-4 text-green-500" />
        ) : (
          <Link2 aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? t('copy') : ''}
      </span>
    </div>
  );
}

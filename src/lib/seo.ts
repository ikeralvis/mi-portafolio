/**
 * Single source of truth for site-identity constants used across
 * generateMetadata (layout.tsx), JSON-LD (JsonLd.tsx), sitemap.ts and
 * robots.ts — avoids the URL/name drifting out of sync between files.
 */
export const SITE_URL = 'https://ikeralvis-dev.vercel.app';

// Full legal/display name — used for og:site_name and JSON-LD `name` so
// Google and social previews show "Iker Alvis Veloso", not a shortened
// or platform-derived name (e.g. "Vercel").
export const SITE_NAME = 'Iker Alvis Veloso';

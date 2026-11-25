/**
 * Base-path aware URL helper.
 * Astro exposes the configured `base` via import.meta.env.BASE_URL (always trailing-slashed).
 * Stripping the trailing slash lets us concatenate cleanly: url('/work/') -> '/portfolio/work/'
 */
const raw = import.meta.env.BASE_URL ?? '/';
export const BASE = raw.endsWith('/') ? raw.slice(0, -1) : raw;

export function url(path: string = '/'): string {
  if (!path.startsWith('/')) return `${BASE}/${path}`;
  return `${BASE}${path}`;
}

/** Absolute URL for meta tags / sitemap / OG images. */
export function absolute(path: string, site: string): string {
  return new URL(url(path), site).toString();
}

// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Deployment targets (all free):
 *
 *  • GitHub Pages project site  -> SITE_URL=https://amazo123.github.io  SITE_BASE=/portfolio
 *  • GitHub Pages user site     -> SITE_URL=https://amazo123.github.io  SITE_BASE=/
 *  • Cloudflare Pages (apex)    -> SITE_URL=https://amazingadelowo.pages.dev  SITE_BASE=/
 *  • Custom domain (amazingadelowo.com) -> SITE_URL=https://amazingadelowo.com SITE_BASE=/
 *
 * Nothing in the site hard-codes a URL, so switching targets is a rebuild away.
 */
const site = process.env.SITE_URL ?? 'https://amazingadelowo.pages.dev';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  compressHTML: true,
});

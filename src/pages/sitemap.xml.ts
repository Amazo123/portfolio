import type { APIRoute } from 'astro';
import { url } from '../lib/url';

const pages = [
  '/',
  '/work/',
  '/work/crynet/',
  '/work/attendx/',
  '/work/evoting/',
  '/work/swarm/',
  '/lab/',
  '/about/',
];

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.toString().replace(/\/$/, '') : '';
  const urls = pages
    .map((p) => `  <url><loc>${new URL(url(p), origin).toString()}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

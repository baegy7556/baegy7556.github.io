import type { APIRoute } from 'astro';
import { getProjects } from '../lib/projects';

// /sitemap.xml — home page + every visible project. Hidden projects and the 404 page are left out.
// Updates itself on every build, so nothing to edit here when projects change.
export const GET: APIRoute = async ({ site }) => {
  const paths = ['/', ...(await getProjects()).map((p) => `/projects/${p.id}/`)];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

import type { APIRoute } from 'astro';

const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'nosotros', priority: '0.6', changefreq: 'monthly' },
  { path: 'contacto', priority: '0.8', changefreq: 'monthly' },
  ...['instalacion-de-camaras-de-seguridad', 'timbres-inteligentes', 'cerraduras-yale', 'automatizacion-residencial'].map((slug) => ({ path: `servicios/${slug}`, priority: '0.9', changefreq: 'monthly' })),
  ...['huixquilucan', 'naucalpan', 'metepec', 'toluca', 'tlalnepantla', 'miguel-hidalgo', 'benito-juarez', 'cuauhtemoc', 'alvaro-obregon', 'coyoacan'].map((slug) => ({ path: `zonas/${slug}`, priority: '0.8', changefreq: 'monthly' })),
];
export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || 'https://siloseguridadmx.site';
  const lastmod = new Date().toISOString().slice(0, 10);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${origin}/${page.path}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};

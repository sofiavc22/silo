import type { APIRoute } from 'astro';

const pages = ['', 'servicios/camaras-ring-nest', 'servicios/timbres-inteligentes', 'servicios/cerraduras-yale', 'servicios/automatizacion-residencial', 'zonas/huixquilucan', 'zonas/naucalpan', 'zonas/metepec', 'zonas/toluca', 'zonas/tlalnepantla', 'zonas/miguel-hidalgo', 'zonas/benito-juarez', 'zonas/cuauhtemoc', 'zonas/alvaro-obregon', 'zonas/coyoacan'];
export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || 'https://silo.mx';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${origin}/${page}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};

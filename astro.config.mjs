import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Define SITE_URL in Vercel when the final domain is connected.
  site: process.env.SITE_URL,
  prefetch: true,
});

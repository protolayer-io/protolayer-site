import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://protolayer.io',
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [
    // Emits sitemap-index.xml with hreflang alternates for every locale of
    // each page. Referenced from public/robots.txt.
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', pt: 'pt' }
      }
    })
  ]
});

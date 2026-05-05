import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: change `site` to your final URL when you deploy.
  // For Cloudflare Pages, this will be e.g. https://mv-lab.pages.dev
  // Or your custom domain, e.g. https://mvlab.uw.edu
  site: 'https://mv-lab.example.com',
  integrations: [
    tailwind({
      // We provide our own base styles in src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  build: {
    // Inline small stylesheets for faster first paint
    inlineStylesheets: 'auto',
  },
});

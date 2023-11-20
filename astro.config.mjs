import { defineConfig } from 'astro/config';
import { sanityIntegration } from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: '25mghe5s',
      dataset: 'production',
      useCdn: false,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'server',
  adapter: netlify(),
});

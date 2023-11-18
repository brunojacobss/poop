import { defineConfig } from 'astro/config';

import {sanityIntegration} from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sanityIntegration({
    projectId: "25mghe5s",
    dataset: "production",
    useCdn: false,
  })]
});
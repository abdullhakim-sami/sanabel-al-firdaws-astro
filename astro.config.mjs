import { defineConfig } from 'astro/config';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: 'https://abdullhakim-sami.github.io',
  base: '/sanabel-al-firdaws-astro',
  integrations: [markdoc()]
});
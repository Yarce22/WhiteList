import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://Yarce22.github.io',
  output: "server",
  adapter: netlify()
});
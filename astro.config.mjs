import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
    i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  site: 'https://David10110.github.io',
  base: '/CVWeb',
  integrations: [tailwind(), react(), robotsTxt(), sitemap()]
});




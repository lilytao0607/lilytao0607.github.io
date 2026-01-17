// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  server: {
    host: '0.0.0.0',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'zh'],
  },
});
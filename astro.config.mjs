import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  server: {
    host: true
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [expressiveCode({
    themes: ['tokyo-night']
  })],
});
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true
  },
  integrations: [expressiveCode({
    themes: ['tokyo-night']
  })],
  env: {
    schema: {
      SPOTIFY_CLIENT_ID: envField.string({ context: 'server', access: 'secret' }),
      SPOTIFY_CLIENT_SECRET: envField.string({ context: 'server', access: 'secret' }),
      SPOTIFY_REFRESH_TOKEN: envField.string({ context: 'server', access: 'secret' }),
    }
  }
});
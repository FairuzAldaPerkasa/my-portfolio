// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fairuzaldaperkasa.github.io', 
  base: '/my-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});
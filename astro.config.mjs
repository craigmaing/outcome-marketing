// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://outcomemarketing.co.uk',
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    // Add integrations here as needed
  ],
  output: 'static',
  image: {
    domains: ['outcomemarketing.co.uk'],
  },
});

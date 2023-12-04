import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  server: {
    open: true
  },
  base: '/sneekers-ecom-demo/',
  resolve: {
    alias: {
      '@': './',
      '@src': './src',
      '@lib': './src/lib',
      '@scripts': './src/scripts',
      '@styles': './src/styles',
      '@components': './src/lib/components',
    },
  },
});

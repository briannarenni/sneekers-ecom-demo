import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte()],
  server: {
    open: true
  },
  base: '/sneekers-ecom-demo/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@scripts': path.resolve(__dirname, './src/scripts'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, './src/lib/components'),
      '@layout': path.resolve(__dirname, './src/lib/layout')
    }
  }

});

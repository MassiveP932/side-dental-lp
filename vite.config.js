import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import postcss from "./postcss.config.js";
import path from 'path'
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss,
  },
  resolve: {
    alias: {
      $components: path.resolve('./src/components'),
      $services: path.resolve('./src/services')
    }
  }
})

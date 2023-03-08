import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';

import path from 'path';
// https://vitejs.dev/config/

// Library build
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  server: {
    port: 8080
  },
  base: "/goldy-store/",
  build: {
    outDir: '../dist',
    minify: true
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.config.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  define: {
    'process.env': {},
  },
  build: {
    rollupOptions: {
      input: {
        popup: 'index.html',
        content: 'src/contentScript.js', // ✅ Make sure this path exists
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/report/',
  publicDir: 'static',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          icons: ['lucide-react'],
          markdown: ['react-markdown', 'rehype-raw', 'remark-gfm'],
          motion: ['framer-motion'],
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  define: {
    __BUILD_DATE__: JSON.stringify(
      new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    ),
  },
});

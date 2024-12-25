import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
    emptyOutDir: true,
  },
  base: '/', // Adjust this if deploying to a subdirectory
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

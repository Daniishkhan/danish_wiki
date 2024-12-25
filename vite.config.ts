import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory
    emptyOutDir: true,
  },
  base: '/', // Adjust this if deploying to a subdirectory
});

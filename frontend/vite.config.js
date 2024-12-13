import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Use @ for shorter imports
    },
  },
  build: {
    outDir: 'publish', // Output directory for the build files
  },
});
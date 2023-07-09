import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-0.1/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const maxSizeKB = 50; // 500KB
          const fileSizeKB = (id.toString().length * 2) / 1024; // Approximate size in KB
          if (fileSizeKB > maxSizeKB) {
            const packageName = id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
            return `${packageName}-chunk`;
          }
        },
      },
    },
    commonjsOptions: {
      maxChunkSize: 500000, // 500KB
    },
  },
});

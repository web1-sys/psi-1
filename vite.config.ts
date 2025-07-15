import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { auth } from './src/lib/auth';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    global: 'globalThis',
  },
});

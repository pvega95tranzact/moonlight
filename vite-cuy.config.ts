import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';
import dotenv from 'dotenv'

dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/main-cuy.tsx'),
      name: 'Moonlight',
      fileName: (format) => `index.${format}.js`,
    },
  },
});

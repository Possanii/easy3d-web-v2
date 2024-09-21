import react from '@vitejs/plugin-react-swc'
import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

// Load environment variables from .env file
config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

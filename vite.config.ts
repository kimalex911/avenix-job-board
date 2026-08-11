import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '5173-iw99kd80erdx598okimlj.e2b.app',
      'localhost',
      '.e2b.app'
    ],
    host: true
  }
})

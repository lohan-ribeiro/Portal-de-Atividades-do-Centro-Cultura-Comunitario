import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/atividades': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/deletar-atividades': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})

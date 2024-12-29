import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Permite o acesso de qualquer IP da rede local
    port: 3000,         // Você pode escolher outra porta, se necessário
    open: true,         // Abre automaticamente no navegador ao iniciar
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/Books-Nest/', //nombre del repositorio para enlazarlo con git pages y que se muestre
})

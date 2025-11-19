import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { 'ts-unused-vars': 'silent' },
  },
})

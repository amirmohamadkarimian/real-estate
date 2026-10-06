import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    // The preview is served through an external proxy host, so accept any host/origin.
    allowedHosts: true,
    watch: { usePolling: true },
  },
})

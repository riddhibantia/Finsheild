import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Static-hosting friendly: HashRouter needs no server rewrites.
  // For a project sub-path (e.g. GitHub Pages), build with VITE_BASE=/Finsheild/
  base: process.env.VITE_BASE ?? "/",
})

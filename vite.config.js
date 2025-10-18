import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base dynamically: when deploying to GitHub Pages project repo, set env VITE_DEPLOY_BASE=/office-portfolio/
const base = process.env.VITE_DEPLOY_BASE || '/'

export default defineConfig({
  base,
  plugins: [react()],
})

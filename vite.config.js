import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'vavion-logo.png'],
      manifest: {
        name: 'Vavion | Creative Solutions',
        short_name: 'Vavion',
        description: 'Vavion offers professional web development, visual identity, and printing services.',
        theme_color: '#E95C27',
        background_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'vavion-logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'vavion-logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})

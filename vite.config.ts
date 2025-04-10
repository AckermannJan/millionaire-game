import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'app-icon.png',
        'app-icon_x96.png',
        'app-icon_x128.png',
        'app-icon_x192.png',
      ],
      manifest: {
        name: 'Lisas Geburtstag App',
        short_name: 'Geburtstag',
        description: 'Lisas Geburtstags App',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'app-icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'app-icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'pwa-icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'app-icon_x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@primevue/nuxt-module'
  ],
    primevue: {
      options: {
        theme: {
            preset: Aura
        }
    }
    },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
})
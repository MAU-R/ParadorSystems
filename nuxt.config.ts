// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import Lara from '@primeuix/themes/lara';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@primevue/nuxt-module',
    '@tailwindcss/vite'
  ],
    primevue: {
      options: {
        theme: {
            preset: Lara
        }
    }
    },
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@600;700&display=swap',
        },
      ],
    },
  }
})
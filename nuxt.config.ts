// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";
import Material from '@primeuix/themes/material';
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
          preset:Material,
            options: {
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue'
                }
            }
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
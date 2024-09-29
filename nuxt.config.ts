// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'Node16',
      },
    },
  },

  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Dasta - Digital Agency',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },

  css: ['~/assets/tailwind.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-marquee',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore', // automatically imports `defineStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    'nuxt-svgo',
  ],

  security: {
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginEmbedderPolicy: 'unsafe-none',
      contentSecurityPolicy: false,
      permissionsPolicy: {
        geolocation: ['self'],
      },
    },
  },

  nitro: {
    serveStatic: true,
    compressPublicAssets: true,
  },

  svgo: {
    componentPrefix: 'i',
  },

  build: {
    transpile: ['vue-toastification', 'vue-countup-v3'],
  },

  devServerHandlers: [],

  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },

  compatibilityDate: '2024-07-10',
})

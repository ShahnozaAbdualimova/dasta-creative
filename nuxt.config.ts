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
    meta: [
      {
        name: "google-site-verification",
        content: "oSlSh0zorvyguK5nLao8Bl_u8yiCSzCRk8LA6BsXHbk",
      },
  },

  css: [
    '~/assets/tailwind.css',
    '~/assets/fonts/fonts.css',
    '~/assets/_toastification.css',
    'vue-toastification/dist/index.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-marquee',
    '@nuxtjs/i18n',
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

  i18n: {
    langDir: 'locales',
    baseUrl: 'https://xolodilnik.uz',
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru' },
      { code: 'uz', iso: 'uz', file: 'uz' },
      { code: 'en', iso: 'en', file: 'en' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'i18n_redirected',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended
      fallbackLocale: 'uz',
    },
    defaultLocale: 'uz',
    strategy: 'prefix_and_default',
  },

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

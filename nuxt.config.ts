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
      meta: [
        {
          name: 'google-site-verification',
          content: 'oSlSh0zorvyguK5nLao8Bl_u8yiCSzCRk8LA6BsXHbk',
        },
      ],
    },
  },

  css: [
    '~/assets/tailwind.css',
    '~/assets/fonts/fonts.css',
    '~/assets/_toastification.css',
    'vue-toastification/dist/index.css',
  ],

  i18n: {
    langDir: 'locales',
    baseUrl: 'https://xolodilnik.uz',
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru.json' },
      { code: 'uz', iso: 'uz', file: 'uz.json' },
      { code: 'en', iso: 'en', file: 'en.json' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'i18n_redirected',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      fallbackLocale: 'uz',
    },
    defaultLocale: 'uz',
    strategy: 'prefix_and_default',
  },

  routeRules: {
    '/': {
      sitemap: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toString('yyyy-mm-ddThh:mm:ss:zzz'),
      },
    },
    '/ru': {
      sitemap: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toString('yyyy-mm-ddThh:mm:ss:zzz'),
      },
    },
    '/en': {
      sitemap: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toString('yyyy-mm-ddThh:mm:ss:zzz'),
      },
    },
    '/uz': {
      sitemap: {
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date().toString('yyyy-mm-ddThh:mm:ss:zzz'),
      },
    },
  },

  sitemap: {
    exclude: [],
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      {
        label: 'Change Frequency',
        select: 'sitemap:changefreq',
        width: '12.5%',
      },
    ],
    sitemaps: {
      projects: {
        includeAppSources: false,
        sources: ['/api/__sitemap__/urls/events'],
      },
      categories: {
        includeAppSources: false,
        sources: ['/api/__sitemap__/urls/categories'],
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-marquee',
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
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

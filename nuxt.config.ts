import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      tokenStripe: process.env.TOKEN_STRIPE,
      apiUrl: process.env.NUXT_API_URL || 'https://manie-api.onrender.com',
    },
  },

  nitro: {
    preset: 'vercel-static',
    serveStatic: true,
  },

  // Le reste de votre config...
  build: {
    transpile: ['vuetify', 'vee-validate'],
  },

  vite: {
    plugins: [svgLoader()],
  },

  modules: ['@pinia/nuxt', '@nuxtjs/gtm'],

  app: {
    head: {
      title: 'Manie - Facilite vos événements',
    },
  },

  gtm: {
    id: 'GTM-5V625W39',
    enabled: true,
    debug: false,
    loadScript: true,
    pageTracking: true,
  },

  compatibilityDate: '2024-09-06',
});

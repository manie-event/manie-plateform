import svgLoader from 'vite-svg-loader';

// process.env.NUXT_TELEMETRY_DISABLED = '1'

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://manie-api.onrender.com',
    },
  },
  // telemetry: false,
  // devtools: { enabled: false },

  nitro: {
    sqlite: false,
    preset: 'vercel',
  },

  build: {
    transpile: ['vuetify', 'vee-validate'],
  },

  vite: {
    plugins: [svgLoader()],
  },

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: 'Manie - Facilite vos événements',
    },
  },

  compatibilityDate: '2024-09-06',
});

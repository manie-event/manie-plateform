import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL || 'https://manie-api.onrender.com',
    },
  },

  nitro: {
    preset: 'vercel',
  },

  // Le reste de votre config...
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

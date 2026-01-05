import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://manie-api.onrender.com',
    },
  },

  css: [
    '@/assets/scss/style.scss', // 👉 ton fichier principal de style
    'vuetify/styles', // si tu utilises Vuetify
  ],

  nitro: {
    preset: 'vercel',
  },

  build: {
    transpile: ['vuetify', 'vee-validate'],
  },

  vite: {
    plugins: [svgLoader()],
  },

  modules: ['@pinia/nuxt', '@zadigetvoltaire/nuxt-gtm'],

  app: {
    head: {
      title: 'Manie - Facilite vos événements',
    },
  },

  gtm: {
    id: 'GTM-5V625W39',
    defer: false,
    compatibility: false,
    enabled: true,
    debug: true, // Activez en dev, désactivez en prod
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: ['homepage'],
    trackOnNextTick: false,
  },

  compatibilityDate: '2024-09-06',
});

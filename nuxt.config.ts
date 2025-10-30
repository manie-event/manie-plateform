import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://manie-api.onrender.com',
    },
  },

  css: css: [
    '@/assets/scss/style.scss', // 👉 ton fichier principal de style
    'vuetify/styles' // si tu utilises Vuetify
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

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: 'Manie - Facilite vos événements',
    },
  },

  compatibilityDate: '2024-09-06',
});

import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable server-side rendering
  ssr: false,
  runtimeConfig: {
    public: {
      tokenSiret: process.env.TOKEN_SIRET,
      apiUrl: process.env.NUXT_API_URL || 'https://manie-api.onrender.com',
    },
  },
  // TypeScript configuration
  typescript: {
    shim: false,
  },

  // Vuetify build configuration
  build: {
    transpile: ['vuetify'],
  },

  // Modules
  modules: ['@pinia/nuxt'],

  // Application metadata
  app: {
    head: {
      title: 'Manie - Facilite vos événements',
    },
  },

  // Nitro configuration
  nitro: {
    serveStatic: true,
  },

  // Dev server handlers
  devServerHandlers: [],

  compatibilityDate: '2024-09-06',
});

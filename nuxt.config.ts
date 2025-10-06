import { fileURLToPath } from 'url';
import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      tokenStripe: process.env.TOKEN_STRIPE,
      apiUrl: process.env.NUXT_API_URL || 'https://manie-api.onrender.com',
    },
  },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)), // racine projet
    '@components': fileURLToPath(new URL('./components', import.meta.url)), // exemple
  },
  // TypeScript configuration
  typescript: {
    shim: false,
  },

  // Vuetify build configuration
  build: {
    transpile: ['vuetify', 'vee-validate'],
  },

  //Plugins
  vite: {
    plugins: [svgLoader()],
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

import { createResolver } from "@nuxt/kit";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Enable server-side rendering
  ssr: false,

  // TypeScript configuration
  typescript: {
    shim: false,
  },

  // Vuetify build configuration
  build: {
    transpile: ["vuetify"],
  },

  // Modules
  modules: ["@pinia/nuxt"],

  // Application metadata
  app: {
    head: {
      title:
        "SpikeAdmin Nuxt 3 - Vuetify 3 - vite - Typescript Based Admin Dashboard Template",
    },
  },

  // Nitro configuration
  nitro: {
    serveStatic: true,
  },

  // Dev server handlers
  devServerHandlers: [],

  compatibilityDate: "2024-09-06",
});

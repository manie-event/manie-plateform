import { defineNuxtPlugin } from '#app';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin((nuxtApp) => {
  // $pinia may be unknown on the NuxtApp type, cast to any to access it
  (nuxtApp as any).$pinia.use(piniaPluginPersistedstate);
});

import { defineNuxtPlugin } from '#app';
import { createPersistedState } from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = nuxtApp.$pinia as any;
  pinia.use(
    createPersistedState({
      storage: {
        getItem: (key) => (process.client ? localStorage.getItem(key) : null),
        setItem: (key, value) => process.client && localStorage.setItem(key, value),
      },
    })
  );
});

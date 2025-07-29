export default defineNuxtPlugin(() => {
  const userStore = useUserStore();

  // Le store est automatiquement hydraté par persistedstate
  // Ce plugin peut servir pour des actions supplémentaires
  console.log('Store hydraté:', userStore.user);
  console.log('Store pour professionel', userStore.professionalUser);
});

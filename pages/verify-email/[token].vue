<template>
  <div class="verify-email__wrapper">
    <div class="verify-email__card">
      <logoManie alt="Logo" class="verify-email__logo" />

      <div v-if="loading" class="verify-email__loader">
        <Loader />
      </div>

      <div v-else-if="success" class="verify-email__success">
        <img :src="goodVerification" alt="Succès" width="70" class="mb-4" />
        <h1 class="text-2xl font-bold mb-2">Bonjour à toi 👋</h1>
        <h3 class="text-green-600">Ton email est maintenant vérifié !</h3>
        <h3 class="mt-1 text-gray-500 text-sm">L'aventure commence ici 🚀</h3>
        <p class="mt-6 text-gray-400 text-sm">
          Vous allez être redirigé vers la page d'identification dans {{ counter }} secondes...
        </p>
      </div>

      <div v-else-if="error" class="verify-email__error">
        <h1 class="text-xl font-bold mb-2 text-red-500">Une erreur est survenue</h1>
        <p class="text-gray-500 text-sm">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthentification } from '@/composables/UseAuthentification';
import goodVerification from '@/public/images/backgrounds/flutter.png';
import logoManie from '@/public/images/logos/logo-manie-creme.svg';
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Loader from '~/components/common/Loader.vue';

definePageMeta({
  layout: 'blank',
});

const route = useRoute();
const router = useRouter();
const token = route.params.token as string;
const { checkEmail } = useAuthentification();

const loading = ref(true);
const success = ref(false);
const error = ref('');
const counter = ref(5);
let interval: number;

onMounted(async () => {
  try {
    const result = await checkEmail(token);
    if (result?.message?.toLowerCase().includes('verified')) {
      success.value = true;
      setTimeout(() => router.push('/auth/login'), 5000);
    } else {
      throw new Error(result?.message || 'Erreur inconnue');
    }
  } catch (err: any) {
    error.value = err?.response?.data?.message || err?.message;
  } finally {
    loading.value = false;
  }

  interval = window.setInterval(() => {
    if (counter.value > 0 && success.value) counter.value--;
    else clearInterval(interval);
  }, 1000);
});

onUnmounted(() => clearInterval(interval));
</script>

<style lang="scss" scoped>
.verify-email__wrapper {
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--v-theme-background));
}

.verify-email__card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  width: 90%;
  max-width: 420px;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.verify-email__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.verify-email__logo {
  margin: 0 auto 2rem auto;
  display: block;
}

.verify-email__success h1 {
  color: rgb(var(--v-theme-darkbg));
}

.verify-email__error {
  color: #e53e3e;
}

.verify-email__loader {
  display: flex;
  justify-content: center;
}
</style>

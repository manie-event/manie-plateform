<template>
  <div class="verify-email__container">
    <div class="verify-email__message">
      <div v-if="loading">
        <Loader />
      </div>
      <div v-else-if="success">
        <img :src="goodVerification" alt="" width="70" />
        <h1 class="text-2xl font-bold mb-4">Bonjour à toi,</h1>
        <div class="text-green-600">
          <h3>Nous venons de vérifier ton email.</h3>
          <h3 class="mt-2 text-sm">L'aventure commence ici</h3>
          <p class="mt-6 text-sm">
            {{
              `Vous allez être rediriger vers la page d'identification dans ${counter} secondes `
            }}
          </p>
        </div>
      </div>
    </div>
    <base-side-picture>
      <template #bg-image>
        <img
          :src="checkEmailPicture"
          alt=""
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="logoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
  </div>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import goodVerification from '@/public/images/backgrounds/flutter.png';
import logoManie from '@/public/images/logos/logo-manie-creme.svg';
import checkEmailPicture from '@/public/images/side-picture/check-email.jpg';
import { onMounted, ref } from 'vue';
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
const counter = ref(10);
let interval: number;

onMounted(async () => {
  try {
    const result = await checkEmail(token);

    if (
      result?.message === 'Email verified' ||
      result?.message?.toLowerCase().includes('verified')
    ) {
      success.value = true;
      setTimeout(() => router.push('/auth/login'), 10000);
    } else {
      throw new Error(result?.message || 'Erreur inconnue');
    }
  } catch (err: any) {
    error.value = err?.response?.data?.message || err?.message;
  } finally {
    loading.value = false;
  }

  interval = window.setInterval(() => {
    if (counter.value > 0 && success.value) {
      counter.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<style lang="scss" scoped>
.verify-email {
  &__container {
    height: calc(100dvh);
    display: flex;
  }
  &__message {
    position: relative;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50vw;
  }
}
.manie-logo {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 80px;
}
</style>

<template>
  <div class="p-8 text-center">
    <h1 class="text-2xl font-bold mb-4">Vérification de l'email</h1>

    <div v-if="loading">⏳ Vérification en cours...</div>

    <div v-else-if="success" class="text-green-600">✅ Email vérifié avec succès !</div>

    <div v-else class="text-red-600">
      ❌ Erreur de vérification : {{ error || 'Lien invalide ou expiré.' }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const token = route.params.token as string;
const { checkEmail } = useAuthentification();

const loading = ref(true);
const success = ref(false);
const error = ref('');

onMounted(async () => {
  try {
    const result = await checkEmail(token);
    console.log(result, 'result');

    if (result?.success) {
      success.value = true;
      setTimeout(() => router.push('/login'), 3000);
    } else {
      throw new Error(result?.message || 'Erreur inconnue');
    }
  } catch (err: any) {
    error.value = err?.response?.data?.message || err?.message;
  } finally {
    loading.value = false;
  }
});
</script>

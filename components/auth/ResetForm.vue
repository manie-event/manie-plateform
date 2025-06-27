<script setup lang="ts">
import { useAuthentification } from '@/composables/UseAuthentification';
import { ref } from 'vue';

const { sendNewPassword } = useAuthentification();
const resetPassword = ref({
  email: '',
});
const emailRules = ref([
  (v: string) => !!v || 'Votre E-mail est requis',
  (v: string) => /.+@.+\..+/.test(v) || 'Renseignez une adresse valide',
]);

const patchNewPassword = async () => {
  await sendNewPassword(resetPassword.value.email);
};
</script>
<template>
  <v-form
    ref="form"
    @submit="patchNewPassword"
    lazy-validation
    action="/dashboards/analytical"
    class="mt-sm-13 mt-8"
  >
    <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText">Email</v-label>
    <VTextField v-model="resetPassword.email" :rules="emailRules" required></VTextField>
    <v-btn size="large" color="primary" @click="patchNewPassword" block submit rounded="pill"
      >Réinitialiser mon mot de passe</v-btn
    >
  </v-form>
</template>

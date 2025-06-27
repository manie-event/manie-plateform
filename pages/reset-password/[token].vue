<template>
  <v-form
    ref="form"
    @submit="registerNewPass"
    lazy-validation
    action="/dashboards/analytical"
    class="mt-sm-13 mt-8"
  >
    <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText"
      >Votre nouveau mot de passe</v-label
    >
    <VTextField v-model="registerPassword.password" :rules="emailRules" required></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText"
      >Confirmez votre nouveau mot de passe</v-label
    >
    <VTextField
      v-model="registerPassword.confirmPassword"
      :rules="emailRules"
      required
    ></VTextField>
    <v-btn size="large" color="primary" @click="registerNewPass" block submit rounded="pill"
      >Réinitialiser mon mot de passe</v-btn
    >
  </v-form>
</template>
<script setup lang="ts">
import { useAuthentification } from '@/composables/UseAuthentification';
import { ref } from 'vue';
import type { registerNewPasswordModel } from '~/models/authentification/registerNewPasswordModel';

const route = useRoute();
const token = route.params.token as string;

const { registerNewPassword } = useAuthentification();
const registerPassword = ref<registerNewPasswordModel>({
  token: token,
  password: '',
  confirmPassword: '',
});
const emailRules = ref([
  (v: string) => !!v || 'Votre E-mail est requis',
  (v: string) => /.+@.+\..+/.test(v) || 'Renseignez une adresse valide',
]);

const registerNewPass = async () => {
  await registerNewPassword(registerPassword.value);
};
</script>

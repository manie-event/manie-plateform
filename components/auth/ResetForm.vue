<script setup lang="ts">
import { ref } from "vue";
const { sendNewPassword } = useAuthentification();
const resetPassword = ref({
  email: "",
  newPassword: "",
});
const emailRules = ref([
  (v: string) => !!v || "Votre E-mail est requis",
  (v: string) => /.+@.+\..+/.test(v) || "Renseignez une adresse valide",
]);
const passwordRules = ref([
  (v: string) => !!v || "Votre nouveau mot de passe est requis",
  (v: string) =>
    v.length >= 10 ||
    "Votre nouveau mot de passe doit contenir au minimum 10 caractères",
]);
const patchNewPassword = async () => {
  await sendNewPassword(resetPassword.value);
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
    <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText"
      >Email</v-label
    >
    <VTextField
      v-model="resetPassword.email"
      :rules="emailRules"
      required
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2 text-lightText"
      >Nouveau mot de passe</v-label
    >
    <VTextField
      v-model="resetPassword.newPassword"
      :rules="passwordRules"
      required
    ></VTextField>
    <v-btn size="large" color="primary" to="/" block submit rounded="pill"
      >Réinitialiser mon mot de passe</v-btn
    >
  </v-form>
</template>

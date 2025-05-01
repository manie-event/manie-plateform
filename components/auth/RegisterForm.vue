<script setup lang="ts">
import { ref } from "vue";
/*Social icons*/
import google from "/images/svgs/google-icon.svg";
import facebook from "/images/svgs/icon-facebook.svg";

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref("");
const email = ref("");
const passwordRules = ref([
  (v: string) => !!v || "Le mot de passe est obligatoire",
  (v: string) =>
    (v && v.length >= 10) || "Le mot de passe doit faire 10 caractères minimum",
]);
const emailRules = ref([
  (v: string) => !!v || "L'e-mail est obligatoire",
  (v: string) => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
]);
const fname = ref("");
const fnameRules = ref([
  (v: string) => !!v || "Votre nom d'utilisateur est obligatoire",
  (v: string) =>
    (v && v.length <= 10) ||
    "Le nom d'utilisateur doit faire 10 caractères maximum",
]);
</script>
<template>
  <!-- <v-row class="d-flex mb-3">
        <v-col cols="6" sm="6">
            <v-btn variant="outlined" size="large" class="border text-subtitle-1 text-gray200 font-weight-semibold" block>
                <img :src="google" height="16" class="mr-2" alt="google" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>Google
            </v-btn>
        </v-col>
        <v-col cols="6" sm="6">
            <v-btn variant="outlined" size="large" class="border text-subtitle-1 text-gray200 font-weight-semibold" block>
                <img :src="facebook" width="25" height="25" class="mr-1" alt="facebook" />
                <span class="d-sm-flex d-none mr-1">Sign in with</span>FB
            </v-btn>
        </v-col>
    </v-row> -->
  <div class="d-flex align-center text-center mb-6">
    <div
      class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"
    >
      <span
        class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100"
        >M'enregistrer avec</span
      >
    </div>
  </div>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    action="/pages/boxedlogin"
    class="mt-5"
  >
    <v-label class="text-subtitle-1 font-weight-medium pb-2"
      >Nom d'utilisateur</v-label
    >
    <VTextField
      v-model="fname"
      :rules="fnameRules"
      required
      placeholder="Votre nom d'utilisateur"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Email</v-label>
    <VTextField
      v-model="email"
      :rules="emailRules"
      required
      placeholder="info@manie.com"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-medium pb-2"
      >Mot de passe</v-label
    >
    <VTextField
      v-model="password"
      :rules="passwordRules"
      placeholder="**********"
      required
      variant="outlined"
      type="password"
      color="primary"
    ></VTextField>
    <v-btn size="large" class="mt-2" color="primary" block submit rounded="pill"
      >M'enregistrer</v-btn
    >
  </v-form>
</template>

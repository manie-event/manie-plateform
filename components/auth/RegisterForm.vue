<script setup lang="ts">
import { ref } from 'vue';
import type { RegisterModel } from '../../models/authentification/registerModel';
import errorToaster from '../common/errorToaster.vue';

/*Social icons*/
// import google from "/images/svgs/google-icon.svg";
// import facebook from "/images/svgs/icon-facebook.svg";
import JuridiqueCharteBonneConduite from '@/components/juridique/CharteBonneConduite.vue';
const { sendRegister } = useAuthentification();
const registerForm = ref<RegisterModel>({
  username: '',
  category: 'professional',
  password: '',
  confirmPassword: '',
  email: '',
});
const valid = ref(true);
const isCharteBonneConduite = ref(false);
const isCharteMention = ref(false);
const openModalCharte = ref(false);
const openModalCharteMentions = ref(false);
const passwordRules = ref([
  (v: string) => !!v || 'Le mot de passe est obligatoire',
  (v: string) => (v && v.length >= 10) || 'Le mot de passe doit faire 10 caractères minimum',
  (v: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/.test(v) ||
    'Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial',
]);
const checkPasswordRules = ref([
  (v: string) => !!v || 'La confirmation du mot de passe est obligatoire',
  (v: string) => v === registerForm.value.password || 'Les mots de passe doivent être identiques',
]);
const emailRules = ref([
  (v: string) => !!v || "L'e-mail est obligatoire",
  (v: string) => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
]);
const nameRules = ref([(v: string) => !!v || 'Votre pseudo est obligatoire']);
const siretRules = ref([
  (v: string) => v.length === 14 || 'Le numéro SIRET doit faire 14 caractères',
  (v: string) => /^\d+$/.test(v) || 'Le numéro SIRET doit contenir uniquement des chiffres',
]);

const register = async () => {
  await sendRegister(registerForm.value);
  registerForm.value = {
    username: '',
    category: 'professional',
    password: '',
    confirmPassword: '',
    email: '',
  };
};
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
    <div class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative">
      <span class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100"
        >M'enregistrer avec</span
      >
    </div>
  </div>
  <v-form ref="form" v-model="valid" lazy-validation class="mt-5">
    <div class="d-flex gap-2 align-center">
      <v-label class="text-subtitle-1 font-weight-medium">Vous êtes :</v-label>
      <div class="d-flex align-center gap-2">
        <v-label class="text-subtitle-1 font-weight-medium">Prestataire</v-label>
        <v-switch
          v-model="registerForm.category"
          false-value="professional"
          true-value="consumer"
          :color="registerForm.category === 'consumer' ? '#f39454' : 'primary'"
          hide-details
          >{{ registerForm.category }}</v-switch
        >
        <v-label class="text-subtitle-1 font-weight-medium">Client</v-label>
      </div>
    </div>

    <div class="d-flex gap-4">
      <div class="w-100">
        <v-label class="text-subtitle-1 font-weight-medium pb-2">Pseudo</v-label>
        <VTextField
          v-model="registerForm.username"
          :rules="nameRules"
          required
          placeholder="Votre nom d'utilisateur"
        ></VTextField>
      </div>
    </div>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Email</v-label>
    <VTextField
      v-model="registerForm.email"
      :rules="emailRules"
      required
      autocomplete="new-email"
      placeholder="info@manie.com"
    ></VTextField>
    <div class="d-flex flex-column gap-2">
      <v-label class="text-subtitle-1 font-weight-medium pb-2">Mot de passe</v-label>
      <span :style="{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '1rem' }"
        >Votre mot de passe doit combiner au moins une majuscule, une minuscule, un chiffre, un
        caractère spécial et dois faire au moins 10 caractères</span
      >
      <VTextField
        v-model="registerForm.password"
        :rules="passwordRules"
        placeholder="**********"
        required
        autocomplete="new-password"
        type="password"
        variant="outlined"
        color="primary"
      ></VTextField>
    </div>
    <v-label class="text-subtitle-1 font-weight-medium pb-2">Je confirme mon mot de passe</v-label>
    <VTextField
      v-model="registerForm.confirmPassword"
      :rules="checkPasswordRules"
      type="password"
      placeholder="**********"
      required
      autocomplete="new-password"
      variant="outlined"
      color="primary"
    ></VTextField>

    <div class="d-flex gap-4 mt-3">
      <p style="font-size: small">
        Je certifie avoir lu et accepté la charte de bonne conduite établie par Manie.
        <span @click="openModalCharte = true" style="opacity: 0.5; cursor: pointer"
          >En savoir plus ici</span
        >
      </p>
      <input type="checkbox" v-model="isCharteBonneConduite" />
    </div>
    <div class="d-flex gap-4 mt-3">
      <p style="font-size: small">
        Je certifie avoir lu et accepté l’ensemble des mentions légales et politiques.
        <span @click="openModalCharteMentions = true" style="opacity: 0.5; cursor: pointer"
          >En savoir plus ici</span
        >
      </p>
      <input type="checkbox" v-model="isCharteMention" />
    </div>
    <v-btn
      size="large"
      class="mt-2"
      style="color: white"
      color="rgb(var(--v-theme-darkbg))"
      style="color: white"
      color="rgb(var(--v-theme-darkbg))"
      block
      submit
      rounded="pill"
      @click="register"
      :disabled="!isCharteBonneConduite"
      >Je créer mon compte</v-btn
    >
    <div v-if="openModalCharte">
      <JuridiqueCharteBonneConduite
        v-model:openModal="openModalCharte"
        @isCharteBonneConduite="isCharteBonneConduite = $event"
      />
    </div>
    <div v-if="openModalCharteMentions">
      <JuridiqueMentionLegales
        v-model:openModal="openModalCharteMentions"
        @is-charte-mentions-legales="isCharteMention = $event"
      />
    </div>
  </v-form>
  <Teleport to="body">
    <errorToaster />
  </Teleport>
</template>

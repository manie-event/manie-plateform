<script setup lang="ts">
import { Form } from 'vee-validate';
import { ref } from 'vue';
import { useAuthentification } from '../../composables/UseAuthentification';
import errorToaster from '../common/errorToaster.vue';
import successToaster from '../common/successToaster.vue';

/*Social icons*/
// import google from "/images/svgs/google-icon.svg";
// import facebook from "/images/svgs/icon-facebook.svg";

const router = useRouter();
const checkbox = ref(false);
const valid = ref(false);
const authentification = ref({
  password: '',
  email: '',
});
const { sendLogin } = useAuthentification();
const passwordRules = ref([
  (v: string) => !!v || 'Le mot de passe est obligatoire',
  (v: string) => (v && v.length >= 10) || 'Le mot de passe doit faire 10 caractères minimum',
]);
const emailRules = ref([
  (v: string) => !!v || "L'e-mail est obligatoire",
  (v: string) => /.+@.+\..+/.test(v) || "L'e-mail doit être valide",
]);

const validate = async () => {
  const login = await sendLogin(authentification.value);

  const isConsumer = computed(() =>
    login.user.category.some((cat: string) => cat.toLowerCase() === 'consumer')
  );

  if (isConsumer) {
    router.push({ path: '/dashboards/dashboard1' });
  } else {
    router.push({ path: '/dashboards/dashboard2' });
  }
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
        >Identifiez-vous avec</span
      >
    </div>
  </div>
  <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-grey200">Email</v-label>
    <VTextField
      v-model="authentification.email"
      :rules="emailRules"
      class="mb-8"
      placeholder="info@manie.com"
      required
      autocomplete="current-email"
      hide-details="auto"
    ></VTextField>
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-grey200">Mot de passe</v-label>
    <VTextField
      v-model="authentification.password"
      :rules="passwordRules"
      required
      hide-details="auto"
      placeholder="**********"
      type="password"
      autocomplete="current-password"
      class="pwdInput"
    ></VTextField>
    <div class="d-flex flex-wrap align-center my-3 ml-n2">
      <div class="ml-sm-auto">
        <NuxtLink
          to="/auth/forgot-password"
          class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
          >Mot de passe oublié ?</NuxtLink
        >
      </div>
    </div>
    <v-btn
      size="large"
      rounded="pill"
      :loading="isSubmitting"
      color="primary"
      :disabled="valid"
      block
      type="submit"
      flat
      >M'identifier</v-btn
    >
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
  <Teleport to="body">
    <errorToaster />
    <successToaster />
  </Teleport>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});

import { useAuthentification } from '@/composables/UseAuthentification';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const route = useRoute();
const token = route.query.token as string;

const { registerNewPassword } = useAuthentification();

// Validation avancée
const passwordSchemaAdvanced = yup.object({
  password: yup
    .string()
    .min(10, 'Le mot de passe doit contenir au moins 10 caractères')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
      'Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial'
    )
    .required('Le mot de passe est requis'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
    .required('La confirmation du mot de passe est requise'),
});

const { values, errors, handleSubmit, setFieldValue } = useForm({
  validationSchema: passwordSchemaAdvanced,
  initialValues: {
    token,
    password: '',
    confirmPassword: '',
  },
});

// Soumission
const onSubmit = handleSubmit(async (values) => {
  await registerNewPassword(values);
});
</script>

<template>
  <div class="login-app-wrapper">
    <div
      class="auth-login position-relative d-flex align-center justify-content-center px-lg-16 px-sm-8 px-3 rounded-xl overflow-hidden"
    >
      <div class="auth-login-wrapper position-relative rounded-xl mx-lg-16 mx-4 mx-auto w-100">
        <v-card elevation="0" class="overflow-hidden px-sm-3 mx-auto" max-width="800">
          <v-card-item class="px-sm-8 px-3">
            <v-row class="justify-md-space-around align-center p-0">
              <v-col cols="12">
                <div class="mt-xl-0 mt-5 mw-100">
                  <h2 class="text-h2 font-weight-bold mb-2">Réinitialiser votre mot de passe</h2>
                  <div class="text-14 mb-6 font-weight-medium mt-3 mb-8">
                    Entrez un nouveau mot de passe.
                  </div>

                  <!-- Champ mot de passe -->
                  <v-text-field
                    :model-value="values.password"
                    @update:model-value="setFieldValue('password', $event)"
                    :error-messages="errors.password"
                    placeholder="Rentrer un mot de passe"
                    type="password"
                  />

                  <!-- Champ confirmation -->
                  <v-text-field
                    :model-value="values.confirmPassword"
                    @update:model-value="setFieldValue('confirmPassword', $event)"
                    :error-messages="errors.confirmPassword"
                    placeholder="Confirmer votre mot de passe"
                    type="password"
                  />

                  <v-btn
                    size="large"
                    flat
                    style="
                      background: rgb(var(--v-theme-darkbg));
                      color: rgb(var(--v-theme-background));
                    "
                    @click="onSubmit"
                    block
                    class="mt-5"
                  >
                    Enregistrer mon mot de passe
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-item>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

<template>
  <div
    class="min-h-screen bg-[#f5f1ed] flex items-center justify-center p-4 relative overflow-hidden"
  >
    <!-- Formes décoratives -->
    <div
      class="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#2c3e50] rounded-full -translate-x-1/3 translate-y-1/3"
    ></div>
    <div
      class="absolute right-0 top-0 w-[500px] h-[500px] bg-[#f4a460] rounded-full translate-x-1/3 -translate-y-1/3"
    ></div>

    <!-- Petit logo en bas à gauche -->
    <div
      class="absolute left-6 bottom-6 w-12 h-12 bg-[#4a6fa5] rounded-full flex items-center justify-center z-20"
    >
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <!-- Carte principale -->
    <div class="relative bg-white rounded-3xl shadow-xl p-12 w-full max-w-2xl z-10">
      <div class="max-w-lg mx-auto">
        <!-- Titre -->
        <h1 class="text-4xl font-bold text-[#1a1a1a] mb-3">Réinitialiser votre mot de passe</h1>
        <p class="text-gray-700 mb-8">
          Choisissez un nouveau mot de passe sécurisé pour votre compte.
        </p>

        <!-- Formulaire -->
        <Form
          ref="form"
          @submit.prevent="onSubmit()"
          action="/dashboards/analytical"
          class="space-y-5"
        >
          <!-- Champ Nouveau mot de passe -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Votre nouveau mot de passe
            </label>
            <Field name="password" v-slot="{ field, errors }">
              <input
                v-bind="field"
                type="password"
                class="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-[#2c3e50] focus:outline-none transition-colors"
                :class="{ 'border-red-500 focus:border-red-500': errors.length }"
                placeholder="Votre nouveau mot de passe"
              />
              <span v-if="errors.length" class="text-red-600 text-sm block mt-2">{{
                errors[0]
              }}</span>
            </Field>
          </div>

          <!-- Champ Confirmation mot de passe -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Confirmez votre nouveau mot de passe
            </label>
            <Field name="confirmPassword" v-slot="{ field, errors }">
              <input
                v-bind="field"
                type="password"
                class="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-[#2c3e50] focus:outline-none transition-colors"
                :class="{ 'border-red-500 focus:border-red-500': errors.length }"
                placeholder="Confirmez votre nouveau mot de passe"
              />
              <span v-if="errors.length" class="text-red-600 text-sm block mt-2">{{
                errors[0]
              }}</span>
            </Field>
            <ErrorMessage name="confirmPassword" class="text-red-600 text-sm block mt-2" />
          </div>

          <!-- Bouton principal -->
          <button
            type="submit"
            class="w-full bg-[#2c3e50] hover:bg-[#243442] text-white font-medium py-3.5 px-6 rounded-lg transition-colors mt-6"
          >
            Réinitialiser mon mot de passe
          </button>

          <!-- Bouton secondaire -->
          <button
            type="button"
            class="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-3.5 px-6 rounded-lg border-2 border-gray-300 transition-colors"
          >
            Revenir à la page d'identification
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthentification } from '@/composables/UseAuthentification';
import { ErrorMessage, Field, Form, useForm } from 'vee-validate';
import * as yup from 'yup';

const route = useRoute();
const token = route.query.token as string;

const { registerNewPassword } = useAuthentification();
const passwordSchemaAdvanced = yup.object({
  password: yup
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial'
    )
    .required('Le mot de passe est requis'),
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Les mots de passe ne correspondent pas', function (value) {
      return this.parent.password === value;
    })
    .required('La confirmation du mot de passe est requise'),
});

const {
  values: registerPassword,
  errors,
  handleSubmit,
  setFieldValue,
  validate,
} = useForm({
  validationSchema: passwordSchemaAdvanced,
  initialValues: {
    token: token,
    password: '',
    confirmPassword: '',
  },
  validateOnMount: false,
});

// Soumission simplifiée
const onSubmit = handleSubmit(async (values) => {
  await registerNewPassword(values);
});
</script>

<style scoped>
/* Smooth transitions */
* {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>

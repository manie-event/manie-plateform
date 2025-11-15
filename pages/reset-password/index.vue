<template>
  <div
    class="min-h-screen bg-[#fff5eb] flex items-center justify-center p-4 relative overflow-hidden"
  >
    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"
      ></div>
    </div>

    <!-- Main card -->
    <div class="relative w-full max-w-md z-10">
      <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <!-- Header -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl mb-4 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Nouveau mot de passe</h1>
          <p class="text-gray-600">Sécurisez votre compte avec un mot de passe fort</p>
        </div>

        <!-- Formulaire -->
        <Form
          ref="form"
          @submit.prevent="onSubmit()"
          action="/dashboards/analytical"
          class="space-y-5"
        >
          <!-- Champ mot de passe -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              Nouveau mot de passe
            </label>
            <Field name="password" v-slot="{ field, errors }">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>
                <input
                  v-bind="field"
                  type="password"
                  class="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all"
                  :class="{
                    'border-red-500 focus:border-red-500 focus:ring-red-100': errors.length,
                  }"
                  placeholder="••••••••"
                />
                <div v-if="errors.length" class="absolute inset-y-0 right-4 flex items-center">
                  <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <span v-if="errors.length" class="flex items-center gap-2 text-red-600 text-sm mt-2">
                <svg class="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ errors[0] }}
              </span>
            </Field>
          </div>

          <!-- Champ confirmation -->
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <Field name="confirmPassword" v-slot="{ field, errors }">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <input
                  v-bind="field"
                  type="password"
                  class="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all"
                  :class="{
                    'border-red-500 focus:border-red-500 focus:ring-red-100': errors.length,
                  }"
                  placeholder="••••••••"
                />
                <div v-if="errors.length" class="absolute inset-y-0 right-4 flex items-center">
                  <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <span v-if="errors.length" class="flex items-center gap-2 text-red-600 text-sm mt-2">
                <svg class="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ errors[0] }}
              </span>
            </Field>
            <ErrorMessage
              name="confirmPassword"
              class="flex items-center gap-2 text-red-600 text-sm mt-2"
            />
          </div>

          <!-- Password requirements -->
          <div
            class="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-4 border border-orange-100"
          >
            <p class="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <svg class="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              Exigences du mot de passe
            </p>
            <ul class="space-y-2 text-xs text-gray-600">
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                8 caractères minimum
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                Majuscules et minuscules
              </li>
              <li class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                Chiffres et caractères spéciaux
              </li>
            </ul>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group mt-6"
          >
            <span>Réinitialiser mon mot de passe</span>
            <svg
              class="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <!-- Secondary button -->
          <button
            type="button"
            class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200"
          >
            Revenir à la connexion
          </button>
        </Form>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <div class="inline-flex items-center gap-2 text-gray-500 text-xs">
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Connexion sécurisée SSL
          </div>
        </div>
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
  transition-property: color, background-color, border-color, transform, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>

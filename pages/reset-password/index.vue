<template>
  <form
    ref="form"
    @submit.prevent="onSubmit()"
    action="/dashboards/analytical"
    class="mt-sm-13 mt-8"
  >
    <label class="text-subtitle-1 font-weight-medium pb-2 text-lightText"
      >Votre nouveau mot de passe</label
    >
    <Field v-model="registerPassword.password" required></Field>
    <label class="text-subtitle-1 font-weight-medium pb-2 text-lightText"
      >Confirmez votre nouveau mot de passe</label
    >
    <Field v-model="registerPassword.confirmPassword" required></Field>
    <ErrorMessage name="confirmPassword" />

    <button size="large" color="primary" block submit rounded="pill">
      Réinitialiser mon mot de passe
    </button>
  </form>
</template>
<script setup lang="ts">
import { useAuthentification } from '@/composables/UseAuthentification';
import { useForm } from 'vee-validate';
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
  console.log('✅ Formulaire valide:', values);
  await registerNewPassword(values);
  // Appel API
});
</script>

<template>
  <Form ref="form" @submit.prevent="onSubmit()" class="mt-sm-13 mt-8">
    <label class="text-subtitle-1 font-weight-medium pb-2 text-lightText">
      Votre nouveau mot de passe
    </label>

    <Field name="password" v-slot="{ field, errors }">
      <input
        v-bind="field"
        type="password"
        class="form-input w-full px-3 py-2 border rounded"
        placeholder="Votre nouveau mot de passe"
      />
      <span v-if="errors.length" class="text-red-500 text-sm">
        {{ errors[0] }}
      </span>
    </Field>

    <label class="text-subtitle-1 font-weight-medium pb-2 text-lightText">
      Confirmez votre nouveau mot de passe
    </label>

    <Field name="confirmPassword" v-slot="{ field, errors }">
      <input
        v-bind="field"
        type="password"
        class="form-input w-full px-3 py-2 border rounded"
        placeholder="Confirmez votre nouveau mot de passe"
      />
      <span v-if="errors.length" class="text-red-500 text-sm">
        {{ errors[0] }}
      </span>
    </Field>

    <ErrorMessage name="confirmPassword" class="text-red-500 text-sm" />

    <button
      type="submit"
      size="large"
      color="rgb(var(--v-theme-darkbg))"
      block
      class="mt-6 w-full py-3 text-white"
      @click="onSubmit()"
    >
      Réinitialiser mon mot de passe
    </button>
  </Form>
</template>

<script setup lang="ts">
import { useAuthentification } from '@/composables/UseAuthentification';
import { Field, useForm } from 'vee-validate';
import { useRoute } from 'vue-router';
import * as yup from 'yup';

const route = useRoute();
const token = route.query.token as string;

const { registerNewPassword } = useAuthentification();

const schema = yup.object({
  password: yup
    .string()
    .min(10, 'Le mot de passe doit faire 10 caractères minimum')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      'Le mot de passe doit contenir une majuscule, une minuscule, un chiffre et un caractère spécial'
    )
    .required('Le mot de passe est requis'),

  confirmPassword: yup
    .string()
    .test('passwords-match', 'Les mots de passe ne correspondent pas', function (value) {
      return this.parent.password === value;
    })
    .required('La confirmation est requise'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    token,
    password: '',
    confirmPassword: '',
  },
});

const onSubmit = handleSubmit(async (values) => {
  await registerNewPassword(values);
});
</script>

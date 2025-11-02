<template>
  <BaseModal v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <template #content>
      <v-form class="px-4">
        <v-divider class="mt-6">
          <p class="mt-6"></p>
          A propos de vous
        </v-divider>
        <div class="d-flex align-center my-4">
          <input
            type="checkbox"
            class="mr-3"
            label="Êtes-vous une entreprise ?"
            v-model="profile.isBusiness"
            :error-messages="showErrors ? errors.isBusiness : undefined"
          />
          <p>Êtes-vous une entreprise ?</p>
        </div>

        <template v-if="profile.isBusiness">
          <v-text-field
            class="mt-6"
            label="Le nom de votre entreprise ?"
            v-model="profile.businessName"
            :error-messages="showErrors ? errors.businessName : undefined"
          />
          <v-text-field
            label="Votre Numéro De Siret ?"
            v-model="profile.businessSiret"
            :error-messages="showErrors ? errors.businessSiret : undefined"
          />
          <v-text-field
            label="Nom du dirigeant ?"
            v-model="profile.businessLeader"
            :error-messages="showErrors ? errors.businessLeader : undefined"
          />
        </template>

        <v-text-field
          label="Votre nom ?"
          v-model="profile.username"
          :error-messages="showErrors ? errors.username : undefined"
        />

        <v-text-field
          label="Votre date de naissance ?"
          type="date"
          v-model="profile.birthDate"
          :error-messages="showErrors ? errors.birthDate : undefined"
        />

        <v-text-field
          label="Votre numéro de téléphone ?"
          v-model="profile.phoneNumber"
          :error-messages="showErrors ? errors.phoneNumber : undefined"
        />

        <v-divider class="my-6">
          <p>A propos de votre adresse</p>
        </v-divider>

        <v-text-field
          label="Votre adresse ?"
          v-model="profile.address"
          :error-messages="showErrors ? errors.address : undefined"
        />

        <v-text-field
          label="Votre code postal ?"
          v-model="profile.zipCode"
          :error-messages="showErrors ? errors.zipCode : undefined"
        />

        <v-text-field
          label="Votre ville ?"
          v-model="profile.city"
          :error-messages="showErrors ? errors.city : undefined"
        />

        <v-text-field
          label="Votre pays ?"
          v-model="profile.country"
          :error-messages="showErrors ? errors.country : undefined"
        />

        <v-btn color="primary" @click="onSubmit" :loading="isSubmitting" block>
          Valider le profil
        </v-btn>
      </v-form>
    </template>
  </BaseModal>
  <Teleport to="body">
    <error-toaster></error-toaster>
  </Teleport>
</template>

<script setup lang="ts">
import BaseModal from '@/components/common/BaseModal.vue';
import { useForm } from 'vee-validate';
import { ref, Teleport } from 'vue';
import * as yup from 'yup';
import errorToaster from '~/components/common/errorToaster.vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import type { ClientModel } from '~/models/user/ClientModel';

const userStore = useUserStore();
const { isProfileCreated } = storeToRefs(userStore);
const { patchClientProfil } = useClientProfil();
const openModal = defineModel<boolean>('openModal');
const showErrors = ref(false);
const isSubmitting = ref(false);

// Validation conditionnelle basée sur isBusiness
const validationSchema = yup.object({
  isBusiness: yup.boolean(),
  businessName: yup.string().when('isBusiness', {
    is: true,
    then: (schema) => schema.min(2).required('La raison sociale est requise'),
    otherwise: (schema) => schema.optional(),
  }),
  businessSiret: yup.string().when('isBusiness', {
    is: true,
    then: (schema) =>
      schema
        .required('Le numéro de siret est requis')
        .matches(/^\d{14}$/, 'Le SIRET doit contenir 14 chiffres'),
    otherwise: (schema) => schema.optional(),
  }),
  businessLeader: yup.string().when('isBusiness', {
    is: true,
    then: (schema) => schema.min(2).required('Le nom du dirigeant est requis'),
    otherwise: (schema) => schema.optional(),
  }),
  username: yup.string().min(2).required('Le nom est requis'),
  birthDate: yup.date().required('La date de naissance est requise'),
  phoneNumber: yup
    .string()
    .matches(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Format de téléphone invalide')
    .required('Le numéro de téléphone est requis'),
  address: yup.string().required("L'adresse est requise"),
  zipCode: yup
    .string()
    .matches(/^\d{5}$/, 'Le code postal doit contenir 5 chiffres')
    .required('Le code postal est requis'),
  city: yup.string().required('La ville est requise'),
  country: yup.string().required('Le pays est requis'),
});

const {
  values: profile,
  errors,
  handleSubmit,
  resetForm,
} = useForm({
  validationSchema,
  initialValues: {
    businessName: '',
    businessSiret: '',
    businessLeader: '',
    address: '',
    zipCode: '',
    city: '',
    country: 'France', // Valeur par défaut
    birthDate: null,
    username: '',
    phoneNumber: '',
    isBusiness: false,
  },
  validateOnMount: false,
  keepValuesOnUnmount: true,
});

// Fonction de soumission corrigée
const onSubmit = handleSubmit(async (profile: ClientModel) => {
  try {
    isSubmitting.value = true;
    showErrors.value = true;
    // Appel de votre fonction de patch
    await patchClientProfil(profile);

    // Fermer le modal en cas de succès
    openModal.value = false;
    showErrors.value = false;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    // L'erreur sera affichée par le errorToaster
  } finally {
    isSubmitting.value = false;
  }
});
</script>

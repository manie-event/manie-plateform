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
    <SuccessToaster></SuccessToaster>
  </Teleport>
</template>

<script setup lang="ts">
import BaseModal from '@/components/common/BaseModal.vue';
import { useToaster } from '@/utils/toaster';
import { useForm } from 'vee-validate';
import { onMounted, ref, Teleport } from 'vue';
import * as yup from 'yup';
import errorToaster from '~/components/common/errorToaster.vue';
import SuccessToaster from '~/components/common/successToaster.vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import type { ClientModel } from '~/models/user/ClientModel';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const { clientProfile, isProfileCreated } = storeToRefs(userStore);
const { patchClientProfil, getClientProfil } = useClientProfil();
const { addSuccess, addError } = useToaster();

const openModal = defineModel<boolean>('openModal');
const showErrors = ref(false);
const isSubmitting = ref(false);

// ✅ Schéma de validation
const validationSchema = yup.object({
  isBusiness: yup.boolean(),
  businessName: yup.string().when('isBusiness', {
    is: true,
    then: (schema) => schema.min(2).required('La raison sociale est requise'),
  }),
  businessSiret: yup.string().when('isBusiness', {
    is: true,
    then: (schema) =>
      schema
        .required('Le numéro de SIRET est requis')
        .matches(/^\d{14}$/, 'Le SIRET doit contenir 14 chiffres'),
  }),
  businessLeader: yup.string().when('isBusiness', {
    is: true,
    then: (schema) => schema.min(2).required('Le nom du dirigeant est requis'),
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
  setValues,
} = useForm({
  validationSchema,
  initialValues: {
    businessName: '',
    businessSiret: '',
    businessLeader: '',
    address: '',
    zipCode: '',
    city: '',
    country: 'France',
    birthDate: null,
    username: '',
    phoneNumber: '',
    isBusiness: false,
  },
  validateOnMount: false,
  keepValuesOnUnmount: true,
});

// ✅ Pré-remplir les champs à l’ouverture

// ✅ Soumission
const onSubmit = handleSubmit(async (values) => {
  try {
    isSubmitting.value = true;
    showErrors.value = true;

    const profilePayload: ClientModel = {
      businessName: values.businessName,
      businessSiret: values.businessSiret,
      businessLeader: values.businessLeader,
      address: values.address,
      zipCode: values.zipCode,
      city: values.city,
      country: values.country,
      birthDate: values.birthDate ?? null,
      username: values.username,
      phoneNumber: values.phoneNumber,
      isBusiness: values.isBusiness,
    };

    await patchClientProfil(profilePayload);

    if (isProfileCreated.value) {
      addSuccess('Profil mis à jour avec succès !');
      openModal.value = false;
      showErrors.value = false;
    }
  } catch (error) {
    addError({
      message: 'Une erreur est survenue lors de la mise à jour du profil.',
    });
  } finally {
    isSubmitting.value = false;
  }
});

onMounted(async () => {
  try {
    // On recharge les infos si le store est vide (sécurité)
    if (!clientProfile.value?.uuid) {
      await getClientProfil();
    }

    const profileData = clientProfile.value;
    if (profileData) {
      setValues({
        businessName: profileData.businessName || '',
        businessSiret: profileData.businessSiret || '',
        businessLeader: profileData.businessLeader || '',
        address: profileData.address || '',
        zipCode: profileData.zipCode || '',
        city: profileData.city || '',
        country: profileData.country || 'France',
        birthDate: profileData.birthDate || '',
        username: profileData.username || '',
        phoneNumber: profileData.phoneNumber || '',
        isBusiness: profileData.isBusiness || false,
      });
    }
  } catch (error) {
    addError({ message: 'Erreur lors du chargement du profil.' });
  }
});
</script>

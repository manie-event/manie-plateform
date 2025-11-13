<template>
  <v-dialog v-model="openModal" transition="dialog-bottom-transition" max-width="600">
    <v-card class="edit-client-profil">
      <v-form class="px-4">
        <v-divider class="mt-6">
          <p class="mt-6">À propos de vous</p>
        </v-divider>

        <!-- Checkbox entreprise -->
        <div class="d-flex align-center my-4">
          <input type="checkbox" class="mr-3" v-model="profile.isBusiness" id="isBusiness" />
          <label for="isBusiness">Êtes-vous une entreprise ?</label>
        </div>

        <!-- Si entreprise -->
        <template v-if="profile.isBusiness">
          <v-text-field
            class="mt-6"
            label="Nom de votre entreprise"
            v-model="profile.businessName"
            :error-messages="showErrors ? errors.businessName : undefined"
          />
          <v-text-field
            label="Numéro de SIRET"
            v-model="profile.businessSiret"
            :error-messages="showErrors ? errors.businessSiret : undefined"
          />
          <v-text-field
            label="Nom du dirigeant"
            v-model="profile.businessLeader"
            :error-messages="showErrors ? errors.businessLeader : undefined"
          />
        </template>

        <v-text-field
          label="Votre nom"
          v-model="profile.username"
          :error-messages="showErrors ? errors.username : undefined"
        />

        <v-text-field
          label="Votre date de naissance"
          type="date"
          v-model="profile.birthDate"
          :error-messages="showErrors ? errors.birthDate : undefined"
        />

        <v-text-field
          label="Votre numéro de téléphone"
          v-model="profile.phoneNumber"
          :error-messages="showErrors ? errors.phoneNumber : undefined"
        />

        <v-divider class="my-6">
          <p>À propos de votre adresse</p>
        </v-divider>

        <v-text-field
          label="Votre adresse"
          v-model="profile.address"
          :error-messages="showErrors ? errors.address : undefined"
        />

        <v-text-field
          label="Code postal"
          v-model="profile.zipCode"
          :error-messages="showErrors ? errors.zipCode : undefined"
        />

        <v-text-field
          label="Ville"
          v-model="profile.city"
          :error-messages="showErrors ? errors.city : undefined"
        />

        <v-text-field
          label="Pays"
          v-model="profile.country"
          :error-messages="showErrors ? errors.country : undefined"
        />

        <v-btn
          color="rgb(var(--v-theme-darkbg))"
          style="color: rgb(var(--v-theme-background))"
          class="mt-6"
          @click="onSubmit"
          :loading="isSubmitting"
          block
        >
          Valider le profil
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <error-toaster />
    <SuccessToaster />
  </Teleport>
</template>

<script setup lang="ts">
import { useToaster } from '@/utils/toaster';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { onMounted, ref } from 'vue';
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

// ✅ Soumission du formulaire
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

    addSuccess('Profil mis à jour avec succès !');
    openModal.value = false;
    showErrors.value = false;
  } catch (error) {
    if (!clientProfile.value?.uuid) {
      addError({ message: 'Le profil utilisateur est introuvable.' });
      return;
    }
  } finally {
    isSubmitting.value = false;
  }
});

// ✅ Pré-remplir les champs à l’ouverture
onMounted(async () => {
  try {
    if (!clientProfile.value?.uuid) {
      const profil = await getClientProfil();
      if (!profil) {
        console.warn('Aucun profil trouvé pour cet utilisateur.');
        return; // on arrête ici, pas de setValues
      }
    }

    const data = clientProfile.value;
    if (data) {
      const formattedBirthDate = data.birthDate
        ? new Date(data.birthDate).toISOString().split('T')[0]
        : '';
      setValues({
        businessName: data.businessName || '',
        businessSiret: data.businessSiret || '',
        businessLeader: data.businessLeader || '',
        address: data.address || '',
        zipCode: data.zipCode || '',
        city: data.city || '',
        country: data.country || 'France',
        birthDate: formattedBirthDate || '',
        username: data.username || '',
        phoneNumber: data.phoneNumber || '',
        isBusiness: data.isBusiness || false,
      });
    }
  } catch (e) {
    console.error('Erreur lors du chargement du profil :', e);
    addError({ message: 'Erreur lors du chargement du profil.' });
  }
});
</script>

<style scoped lang="scss">
.edit-client-profil {
  width: 50vw;
  margin: 0 auto;
  padding: 30px;
  background: rgb(var(--v-theme-background));
  border-radius: 12px;
}

@media screen and (max-width: 960px) {
  .edit-client-profil {
    width: 80vw;
    padding: 20px;
  }
}
</style>

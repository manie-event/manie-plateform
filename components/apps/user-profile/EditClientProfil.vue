<template>
  <v-dialog v-model="openModal" transition="dialog-bottom-transition" max-width="600">
    <v-card class="edit-client-profil">
      <v-form class="px-4" @submit.prevent="onSubmit">
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
            label="Nom de votre entreprise *"
            v-model="profile.businessName"
            :error-messages="errors.businessName"
            required
          />
          <v-text-field
            label="Numéro de SIRET *"
            v-model="profile.businessSiret"
            :error-messages="errors.businessSiret"
            required
          />
          <v-text-field
            label="Nom du dirigeant *"
            v-model="profile.businessLeader"
            :error-messages="errors.businessLeader"
            required
          />
        </template>

        <v-text-field
          label="Votre nom *"
          v-model="profile.username"
          :error-messages="errors.username"
          required
        />

        <v-text-field
          label="Votre date de naissance *"
          type="date"
          v-model="profile.birthDate"
          :error-messages="errors.birthDate"
          required
        />

        <v-text-field
          label="Votre numéro de téléphone *"
          v-model="profile.phoneNumber"
          :error-messages="errors.phoneNumber"
          placeholder="Ex: 06 12 34 56 78"
          required
        />

        <v-divider class="my-6">
          <p>À propos de votre adresse</p>
        </v-divider>

        <v-text-field
          label="Votre adresse *"
          v-model="profile.address"
          :error-messages="errors.address"
          required
        />

        <v-text-field
          label="Code postal *"
          v-model="profile.zipCode"
          :error-messages="errors.zipCode"
          required
        />

        <v-text-field
          label="Ville *"
          v-model="profile.city"
          :error-messages="errors.city"
          required
        />

        <v-text-field
          label="Pays *"
          v-model="profile.country"
          :error-messages="errors.country"
          required
        />

        <v-btn
          color="rgb(var(--v-theme-darkbg))"
          style="color: rgb(var(--v-theme-background))"
          class="mt-6"
          type="submit"
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
const isSubmitting = ref(false);

// ✅ Schéma de validation amélioré
const validationSchema = yup.object({
  isBusiness: yup.boolean().default(false),
  businessName: yup.string().when('isBusiness', {
    is: true,
    then: (schema) =>
      schema.min(2, 'Minimum 2 caractères').required('La raison sociale est requise'),
    otherwise: (schema) => schema.notRequired(),
  }),
  businessSiret: yup.string().when('isBusiness', {
    is: true,
    then: (schema) =>
      schema
        .required('Le numéro de SIRET est requis')
        .matches(/^\d{14}$/, 'Le SIRET doit contenir exactement 14 chiffres'),
    otherwise: (schema) => schema.notRequired(),
  }),
  businessLeader: yup.string().when('isBusiness', {
    is: true,
    then: (schema) =>
      schema.min(2, 'Minimum 2 caractères').required('Le nom du dirigeant est requis'),
    otherwise: (schema) => schema.notRequired(),
  }),
  username: yup.string().min(2, 'Minimum 2 caractères').required('Le nom est requis'),
  birthDate: yup
    .string()
    .required('La date de naissance est requise')
    .test('is-valid-date', 'Date invalide', (value) => {
      if (!value) return false;
      const date = new Date(value);
      return date instanceof Date && !isNaN(date.getTime());
    })
    .test('is-adult', 'Vous devez avoir au moins 18 ans', (value) => {
      if (!value) return false;
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }),
  phoneNumber: yup
    .string()
    .required('Le numéro de téléphone est requis')
    .matches(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      'Format invalide (ex: 06 12 34 56 78)'
    ),
  address: yup.string().min(5, 'Minimum 5 caractères').required("L'adresse est requise"),
  zipCode: yup
    .string()
    .required('Le code postal est requis')
    .matches(/^\d{5}$/, 'Le code postal doit contenir exactement 5 chiffres'),
  city: yup.string().min(2, 'Minimum 2 caractères').required('La ville est requise'),
  country: yup.string().min(2, 'Minimum 2 caractères').required('Le pays est requis'),
});

const {
  values: profile,
  errors,
  handleSubmit,
  setValues,
  validate,
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
    birthDate: '',
    username: '',
    phoneNumber: '',
    isBusiness: false,
  },
  validateOnMount: false,
});

const onSubmit = handleSubmit(
  async (values) => {
    try {
      isSubmitting.value = true;

      const profilePayload: ClientModel = {
        businessName: values.isBusiness ? values.businessName : null,
        businessSiret: values.isBusiness ? values.businessSiret : null,
        businessLeader: values.isBusiness ? values.businessLeader : null,
        address: values.address,
        zipCode: values.zipCode,
        city: values.city,
        country: values.country,
        birthDate: values.birthDate,
        username: values.username,
        phoneNumber: values.phoneNumber,
        isBusiness: values.isBusiness,
      };

      const response = await patchClientProfil(profilePayload);

      if (response) {
        addSuccess('Profil mis à jour avec succès !');
        openModal.value = false;
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      addError({ message: 'Erreur lors de la mise à jour du profil.' });
    } finally {
      isSubmitting.value = false;
    }
  },
  ({ errors }) => {
    // Callback en cas d'erreur de validation
    console.log('Erreurs de validation:', errors);

    // Afficher un message global
    addError({
      message: 'Veuillez corriger les erreurs dans le formulaire.',
    });

    // Scroll vers la première erreur
    const firstErrorField = Object.keys(errors)[0];
    const element = document.querySelector(`[name="${firstErrorField}"]`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
);

// ✅ Pré-remplir les champs à l'ouverture
onMounted(async () => {
  try {
    if (!clientProfile.value?.uuid) {
      const profil = await getClientProfil();
      if (!profil) {
        console.warn('Aucun profil trouvé pour cet utilisateur.');
        return;
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
        birthDate: formattedBirthDate,
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

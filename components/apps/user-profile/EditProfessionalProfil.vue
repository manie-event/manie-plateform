<template>
  <BaseModal v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <template #content>
      <v-form class="px-4">
        <div v-show="currentPage === 1">
          <v-divider class="mt-6"
            ><p class="mt-6"></p>
            A propos de votre entreprise</v-divider
          >
          <v-text-field
            class="mt-6"
            label="Le nom de votre entreprise ?"
            v-model="profile.name"
            :error-messages="showErrors ? errors.name : undefined"
          />

          <v-text-field
            label="Votre Numéro De Siret ?"
            v-model="profile.siret"
            :error-messages="showErrors ? errors.siret : undefined"
          />
          <v-text-field
            label="Votre numéro de téléphone ?"
            v-model="profile.telephone"
            :error-messages="showErrors ? errors.siret : undefined"
          />
          <v-text-field
            label="L'adresse complète du siège social ?"
            v-model="profile.address"
            :error-messages="showErrors ? errors.address : undefined"
          />
          <v-text-field
            label="Une courte description de votre activité ?"
            v-model="profile.bio"
            :error-messages="showErrors ? errors.bio : undefined"
          />
          <v-select
            label="Votre activité principale ?"
            v-model="profile.mainActivity"
            :items="activityItems"
            item-title="label"
            item-value="value"
            @update:model-value="setSector"
            :error-messages="showErrors ? errors.mainActivity : undefined"
          />
          <v-text-field
            label="Le nom complet de l'interlocuteur principal ?"
            v-model="profile.mainInterlocutor"
            :error-messages="showErrors ? errors.mainInterlocutor : undefined"
          />
          <v-number-input
            label="Depuis combien d'année exercez-vous cette activité ?"
            v-model="profile.experience"
            variant="solo"
            :min="0"
            :error-messages="showErrors ? errors.experience : undefined"
          />
          <v-divider class="border-opacity-50 mb-6"
            ><p class="mb-6">A propos de votre activité</p></v-divider
          >

          <v-select
            label="Votre secteur géographique ?"
            v-model="profile.geographicArea"
            :items="geographicActivity"
            item-title="label"
            item-value="value"
            :error-messages="showErrors ? errors.geographicArea : undefined"
          />

          <div>
            <div
              v-for="(certif, index) in profile.certification"
              :key="index"
              class="flex items-center gap-2 mb-3"
            >
              <v-text-field
                v-model="profile.certification[index]"
                label="Certification(s) & Label(s)"
                variant="outlined"
                placeholder="Exemple : Label AB (Bio)"
                hide-details
                class="flex-1"
              />

              <v-btn
                v-if="profile.certification.length > 1"
                icon="mdi-delete"
                color="error"
                variant="text"
                size="small"
                @click="removeCertification(index)"
              />
            </div>

            <!-- Bouton d’ajout -->
            <v-btn color="primary" class="mt-2" @click="addCertification">
              Ajouter une certification
            </v-btn>
          </div>

          <v-number-input
            variant="solo"
            :min="0"
            label="Votre délai de réservation minimum (en semaine) ?"
            v-model="reservationDelay"
            :error-messages="showErrors ? errors.minimumReservationPeriod : undefined"
          />
          <v-checkbox
            label="Doit-on vous faire un accompte avant prestation"
            v-model="profile.deposit"
            :error-messages="showErrors ? errors.deposit : undefined"
          />
          <v-number-input
            v-if="profile.deposit"
            variant="solo"
            :min="0"
            :max="100"
            :step="5"
            label="Quel est le montant de dépôt (en pourcentage)?"
            v-model="profile.depositAmount"
            :error-messages="showErrors ? errors.depositAmount : undefined"
          />
          <div class="d-flex gap-2 flex-column justify-start align-items-start">
            <v-label class="text-subtitle-1 font-weight-medium"
              >Vous souhaitez être payer avant l'évènement ?</v-label
            >
            <div class="d-flex align-center gap-2">
              <v-label class="text-subtitle-1 font-weight-medium">Avant la prestation</v-label>
              <v-switch
                v-model="profile.billingPeriod"
                false-value="beforeEvent"
                true-value="afterEvent"
                :color="profile.billingPeriod === 'beforeEvent' ? 'success' : 'primary'"
                hide-details
                :error-messages="showErrors ? errors.billingPeriod : undefined"
                >{{ profile.billingPeriod }}</v-switch
              >
              <v-label class="text-subtitle-1 font-weight-medium">Après la prestation</v-label>
            </div>
          </div>

          <v-divider class="mb-6"> <p class="mb-6">A propos de votre communication</p></v-divider>

          <div class="mt-4">
            <div v-for="(link, index) in profile.links" :key="index">
              <v-select
                v-model="link.type"
                label="Renseignez le réseau social ou le site web"
                :items="['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Site Web']"
                item-title="label"
                item-value="value"
              />
              <v-text-field
                v-model="link.value"
                label="Renseignez le lien vers le réseau social ou le site web"
                type="url"
                variant="outlined"
                placeholder="https://www.example.com/mon-reseau-social"
              />
              <v-btn
                @click="removeLink(index)"
                :disabled="profile.links.length <= 0"
                color="error"
                prepend-icon="mdi-delete"
                size="small"
                class="mb-4"
              >
                Supprimer
              </v-btn>
            </div>
            <v-btn @click="addLink" color="primary">
              Ajouter un lien vers un réseau social ou un site web
            </v-btn>
          </div>

          <div class="my-8">
            <div v-for="(faq, index) in faqArray" :key="index">
              <v-text-field
                v-model="faq.question"
                label="Renseignez une question fréquente auquelle vous répondez souvent"
                item-title="label"
                item-value="value"
              >
              </v-text-field>
              <v-text-field
                v-model="faq.reponse"
                label="Renseignez la réponse à la question"
                type="text"
                variant="outlined"
                placeholder="https://www.example.com/mon-reseau-social"
              >
              </v-text-field>
              <v-btn
                @click="removeFaq(index)"
                :disabled="faqArray.length === 0"
                color="error"
                prepend-icon="mdi-delete"
                size="small"
                class="my-2"
              >
                Supprimer
              </v-btn>
            </div>
            <v-btn @click="addFaq" color="primary">
              Ajouter une question fréquente et sa réponse
            </v-btn>
          </div>
        </div>

        <div v-if="currentPage === 1" class="d-flex justify-space-between">
          <v-btn @click="openModal = false">Annuler</v-btn>
          <v-btn v-if="!isProfileVerified" color="primary" @click="createProfile(profile)">
            Valider mon profil
          </v-btn>
          <div v-if="isProfileVerified">
            <v-btn color="primary" @click="modifyProfile(profile)"> Modifier mon profil </v-btn>
          </div>
        </div>
      </v-form>
    </template>
  </BaseModal>
  <Teleport to="body">
    <ModalRedirection :redirection="'dashboard2'" v-model="isProfilUpdate" />
    <CommonSuccessToaster></CommonSuccessToaster>
    <error-toaster></error-toaster>
  </Teleport>
</template>
<script setup lang="ts">
import BaseModal from '@/components/common/BaseModal.vue';
import { useForm } from 'vee-validate';
import { ref, Teleport } from 'vue';
import * as yup from 'yup';
import errorToaster from '~/components/common/errorToaster.vue';
import { useKeywords } from '~/composables/professional-user/UseKeywords';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import { GEOGRAPHIC_ACTIVITY } from '~/constants/geographicActivity';
import type { Faq, Link, ProfessionalProfile } from '~/models/user/UserModel';
import ModalRedirection from './ModalRedirection.vue';

const userStore = useUserStore();
const { professionalUser } = storeToRefs(userStore);
const { createProfessionalProfile, patchProfessionnalProfileDetails } = useProfessionalProfile();
const { getSectors } = useKeywords();
const openModal = defineModel<boolean>('openModal');

const faqArray = ref<Faq[]>([]);
const showErrors = ref(false);
const { addError, addSuccess } = useToaster();
const currentPage = ref(1);
const activityItems = ref(ACTIVITY_ITEMS);
const geographicActivity = ref(GEOGRAPHIC_ACTIVITY);
const isProfileVerified = localStorage.getItem('is-profile-verified');
const reservationDelay = ref(0);
const isProfilUpdate = ref(false);

const minimumDaysReservation = computed(() => reservationDelay.value * 7);

const mergedFaq = computed(() => {
  return faqArray.value.reduce((acc, faq) => {
    if (faq.question && faq.reponse) {
      acc[faq.question] = faq.reponse;
    }
    return acc;
  }, null);
});

const validationSchema = yup.object({
  name: yup.string().min(2).required('Le nom est requis'),
  siret: yup
    .string()
    .required('Le SIRET est requis')
    .length(14, 'Le SIRET doit contenir 14 caractères'),
  address: yup.string().required("L'adresse est requise"),
  telephone: yup
    .string()
    .length(10, 'Vous devez indiquer 10 numéros')
    .required('Le numéro de téléphone est obligatoire'),
  bio: yup.string().required('La bio est requise'),
  mainActivity: yup.string().required('Activité requise'),
  mainInterlocutor: yup.string().required("L'interlocuteur principal est requis"),
  experience: yup
    .number()
    .min(0, "L'expérience doit être positive")
    .required("L'expérience est requise"),
  geographicArea: yup.string().required('La zone géographique est requise'),
  certification: yup.string(),
  minimumReservationPeriod: yup.number().min(0, 'La période de réservation doit être positive'),
  deposit: yup.boolean(),
  depositAmount: yup.number().min(0, "Le montant de l'acompte doit être positif"),
  billingPeriod: yup.string().required('La période de facturation est requise'),
  links: yup.array().of(
    yup.object({
      type: yup.string(),
      value: yup.string().url('URL non valide'),
    })
  ),
  faq: yup.object({
    question: yup.string(),
    reponse: yup.string(),
  }),
});

const {
  values: profile,
  errors,
  handleSubmit,
  resetForm,
} = useForm({
  validationSchema,
  initialValues: {
    name: '',
    siret: '',
    address: '',
    telephone: '',
    bio: '',
    mainActivity: 'Veuillez choisir votre activité',
    mainInterlocutor: '',
    experience: 0,
    geographicArea: geographicActivity.value[0]?.label ?? '',
    faq: {},
    minimumReservationPeriod: 0,
    certification: [''],
    deposit: false,
    depositAmount: 0,
    billingPeriod: 'beforeEvent',
    links: [] as Link[] as [{ type: string; value: string }],
  },
  validateOnMount: false,
  keepValuesOnUnmount: true,
});

const addLink = () => {
  profile.links.push({ type: '', value: '' });
};

const removeLink = (index: number) => {
  if (profile.links.length > 0) {
    profile.links.splice(index, 1);
  }
};

const addFaq = () => {
  faqArray.value.push({
    question: '',
    reponse: '',
  });
};

const removeFaq = (index: number) => {
  if (faqArray.value.length >= 0) {
    faqArray.value.splice(index, 1);
  }
};

const addCertification = () => {
  profile.certification.push('');
};

const removeCertification = (index: number) => {
  profile.certification.splice(index, 1);
};

const setSector = () => {
  getSectors(profile.mainActivity);
};

const createProfile = async (values: ProfessionalProfile) => {
  try {
    const payload = {
      ...values,
      faq: mergedFaq.value || {},
      minimumReservationPeriod: minimumDaysReservation.value,
      links: profile.links.filter((link) => link.type.trim() && link.value.trim()),
      certification: profile.certification.filter((c) => c.trim()),
    };
    const response = await createProfessionalProfile(payload);

    if (response.message === 'Professional updated') {
      if (professionalUser.value?.uuid) {
        localStorage.setItem('professional-uuid', professionalUser.value?.uuid);
      }
      if (professionalUser.value?.name) {
        localStorage.setItem('pro-name', professionalUser.value?.name);
      }
      addSuccess('Votre profil a été modifié avec success');
      openModal.value = false;
      isProfilUpdate.value = true;
    } else {
      addError({ message: 'La mise à jour du profil a échoué.' });
    }
  } catch (error) {
    addError({ message: 'Erreur lors de la mise à jour du profil.' });
  }
};

const modifyProfile = async (newValues: ProfessionalProfile) => {
  try {
    const payload = {
      ...newValues,
      faq: mergedFaq.value || {},
      minimumReservationPeriod: minimumDaysReservation.value,
      links: profile.links.filter((link) => link.type.trim() && link.value.trim()),
      certification: profile.certification.filter((c) => c.trim()),
    };
    const response = await patchProfessionnalProfileDetails(payload);

    if (response.message === 'Professional updated') {
      const professional = response.newPro || response.data?.professional;
      if (professional?.uuid) {
        localStorage.setItem('professional-uuid', professional.uuid);
      }

      if (professional?.name) {
        localStorage.setItem('pro-name', professional.name);
      }
      addSuccess('Votre profil a été modifié avec success');
      openModal.value = false;
      isProfilUpdate.value = true;
    } else {
      addError({ message: 'La mise à jour du profil a échoué.' });
    }
  } catch (error) {
    addError({ message: 'Erreur lors de la mise à jour du profil.' });
  }
};

onMounted(() => {
  if (professionalUser.value) {
    const isBooleanBillingPeriod =
      typeof professionalUser.value.billingPeriod === 'boolean'
        ? professionalUser.value.billingPeriod
          ? 'afterEvent'
          : 'beforeEvent'
        : professionalUser.value.billingPeriod || 'beforeEvent';
    resetForm({
      values: {
        name: professionalUser.value.name ?? '',
        siret: professionalUser.value.siret ?? '',
        telephone: professionalUser.value.telephone ?? '',
        address: professionalUser.value.address ?? '',
        bio: professionalUser.value.bio ?? '',
        mainActivity: professionalUser.value.mainActivity ?? 'Veuillez choisir votre activité',
        mainInterlocutor: professionalUser.value.mainInterlocutor ?? '',
        experience: professionalUser.value.experience ?? 0,
        geographicArea:
          professionalUser.value.geographicArea ?? geographicActivity.value[0]?.label ?? '',
        certification:
          Array.isArray(professionalUser.value.certification) &&
          professionalUser.value.certification.length > 0
            ? professionalUser.value.certification
            : [''],
        minimumReservationPeriod: professionalUser.value.minimumReservationPeriod ?? 0,
        deposit: professionalUser.value.deposit ?? false,
        depositAmount: professionalUser.value.depositAmount ?? 0,
        billingPeriod: isBooleanBillingPeriod,
        links: professionalUser.value.links?.length ? professionalUser.value.links : [],
        faq: professionalUser.value.faq ?? {},
      },
    });

    // Pré-remplir la FAQ et les liens si tu gères des refs séparés
    faqArray.value = professionalUser.value.faqArray ?? [];
  }
});
</script>

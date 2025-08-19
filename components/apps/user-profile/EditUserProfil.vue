<template>
  <BaseModal v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <template #title>{{
      !isProfessionalProfileCreated ? 'Renseignez votre profil' : 'Modifier votre profil'
    }}</template>

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
          <v-text-field
            v-model="profile.certification"
            label="Labels & Certifications"
            variant="outlined"
            placeholder="exemple: Label AB (Bio)"
          />
          <v-number-input
            variant="solo"
            :min="0"
            label="Votre délai de réservation minimum (en semaine) ?"
            v-model="profile.minimumReservationPeriod"
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
        <services-prestataire
          v-if="currentPage === 2"
          class="mt-6"
          :sector="profile.mainActivity"
          v-model:pageActuelle="currentPage"
        />
        <div v-if="currentPage === 1" class="d-flex justify-space-between">
          <v-btn @click="openModal = false">Annuler</v-btn>
          <v-btn color="primary" @click="setSector(profile)">Vers le questionnaire détaillé</v-btn>
        </div>
      </v-form>
    </template>
  </BaseModal>
  <Teleport to="body"> <error-toaster></error-toaster> </Teleport>
</template>
<script setup lang="ts">
import BaseModal from '@/components/common/BaseModal.vue';
import { useForm } from 'vee-validate';
import { ref, Teleport } from 'vue';
import * as yup from 'yup';
import errorToaster from '~/components/common/errorToaster.vue';
import ServicesPrestataire from '~/components/questionnaires/ServicesPrestataire.vue';
import { useUserProfile } from '~/composables/professional-user/UseUserProfile';
import { useKeywords } from '~/composables/UseKeywords';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import { GEOGRAPHIC_ACTIVITY } from '~/constants/geographicActivity';
import type { Faq, Link, ProfessionalProfile } from '~/models/user/UserModel';

const userStore = useUserStore();
const { createProfessionalProfile } = useUserProfile();
const { getSectors } = useKeywords();
const { isProfessionalProfileCreated } = storeToRefs(userStore);
const openModal = defineModel<boolean>('openModal');

const faqArray = ref<Faq[]>([]);
const showErrors = ref(false);
const { addError, addSuccess } = useToaster();
const currentPage = ref(1);
const activityItems = ref(ACTIVITY_ITEMS);
const geographicActivity = ref(GEOGRAPHIC_ACTIVITY);

const mergedFaq = computed(() => {
  return faqArray.value.reduce(
    (acc, faq) => {
      if (faq.question && faq.reponse) {
        acc[faq.question] = faq.reponse;
      }
      return acc;
    },
    {} as Record<string, string>
  );
});

const validationSchema = yup.object({
  name: yup.string().min(2).required('Le nom est requis'),
  siret: yup
    .string()
    .required('Le SIRET est requis')
    .length(14, 'Le SIRET doit contenir 14 caractères'),
  address: yup.string().required("L'adresse est requise"),
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
    bio: '',
    mainActivity: 'Veuillez choisir votre activité',
    mainInterlocutor: '',
    experience: 0,
    geographicArea: geographicActivity.value[0]?.label ?? '',
    faq: {},
    minimumReservationPeriod: 0,
    certification: '',
    deposit: false,
    depositAmount: 0,
    billingPeriod: 'beforeEvent',
    links: [] as Link[] as [{ type: string; value: string }],
  },
  validateOnMount: false,
  keepValuesOnUnmount: true,
});

const onSubmit = () => {
  console.log('Submitting profile:', profile);
};

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

const setSector = async (values: ProfessionalProfile) => {
  const finalValues = {
    ...values,
    faq: mergedFaq.value,
    minimumReservationPeriod: values.minimumReservationPeriod * 7,
  };

  try {
    const response = await createProfessionalProfile(finalValues);

    if (response.message === 'Professional created') {
      getSectors(profile.mainActivity);
      currentPage.value = 2;
    } else {
      addError({ message: 'La mise à jour du profil a échoué.' });
    }
  } catch (error) {
    addError({ message: 'Erreur lors de la mise à jour du profil.' });
  }
};
resetForm();
</script>

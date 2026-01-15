<template>
  <v-dialog v-model="openModal" max-width="800" transition="dialog-bottom-transition">
    <v-card max-width="800" class="rounded edit-professional">
      <Icon
        icon="ri:close-fill"
        size="22"
        class="text-grey100 cursor-pointer"
        :style="{ position: 'absolute', right: '20px', top: '20px' }"
        @click="closeModal"
      />
      <v-form class="edit-professional__formulaire">
        <div>
          <v-divider class="mt-6">
            <p class="mt-6">A propos de votre entreprise</p>
          </v-divider>

          <v-text-field
            class="mt-6"
            label="Le nom de votre entreprise ?"
            v-model="professionalUser.name"
            :error-messages="showErrors ? errors.name : undefined"
          />

          <v-text-field
            label="Le nom complet de l'interlocuteur principal ?"
            v-model="professionalUser.mainInterlocutor"
            :error-messages="showErrors ? errors.mainInterlocutor : undefined"
          />

          <v-text-field
            label="Votre Numéro De Siret ?"
            v-model="professionalUser.siret"
            :error-messages="showErrors ? errors.siret : undefined"
          />

          <v-text-field
            label="L'adresse complète du siège social ?"
            v-model="professionalUser.address"
            :error-messages="showErrors ? errors.address : undefined"
          />

          <v-divider class="border-opacity-50 mb-6">
            <p class="mb-6">A propos de votre activité</p>
          </v-divider>

          <v-select
            label="Votre activité principale ?"
            v-model="professionalUser.mainActivity"
            :items="activityItems"
            item-title="label"
            item-value="value"
            :error-messages="showErrors ? errors.mainActivity : undefined"
          />

          <v-select
            label="Votre seconde activité ?"
            v-model="professionalUser.secondActivity"
            :items="activityItems"
            item-title="label"
            item-value="value"
          />

          <v-select
            label="Votre troisième activité ?"
            v-model="professionalUser.thirdActivity"
            :items="activityItems"
            item-title="label"
            item-value="value"
          />

          <v-select
            label="Votre secteur géographique ?"
            v-model="professionalUser.geographicArea"
            :items="geographicActivity"
            item-title="label"
            item-value="value"
            :error-messages="showErrors ? errors.geographicArea : undefined"
          />

          <v-textarea
            v-model="professionalUser.bio"
            label="Une courte description de votre activité ?"
            placeholder="Veuillez renseigner votre activité ici"
            counter="1000"
            :error-messages="showErrors ? errors.bio : undefined"
          />

          <v-number-input
            label="Depuis quelle année exercez-vous cette activité ?"
            v-model="professionalUser.experience"
            control-variant="hidden"
            :min="0"
            :error-messages="showErrors ? errors.experience : undefined"
          />

          <!-- Certifications -->
          <div>
            <div
              v-for="(certif, index) in professionalUser.certification"
              :key="index"
              class="flex items-center gap-2 mb-3"
            >
              <v-text-field
                v-model="professionalUser.certification[index]"
                label="Certification(s) & Label(s)"
                variant="outlined"
                placeholder="Exemple : Label AB (Bio)"
                hide-details
                class="flex-1"
                counter="255"
              />

              <Icon
                width="24"
                height="24"
                icon="solar:trash-bin-trash-line-duotone"
                v-if="professionalUser.certification.length > 1"
                color="error"
                size="small"
                @click="removeCertification(index)"
              />
            </div>

            <v-btn
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
              class="mb-5"
              @click="addCertification"
            >
              Ajouter une certification
            </v-btn>
          </div>

          <!-- Délai de réservation -->
          <v-number-input
            control-variant="hidden"
            :min="0"
            label="Votre délai de réservation minimum (en semaine) ?"
            v-model="reservationDelayInWeeks"
            :error-messages="showErrors ? errors.minimumReservationPeriod : undefined"
          />

          <!-- Acompte -->
          <div class="d-flex gap-2 text-subtitle-2 mb-3 justify-center">
            <p>Un acompte est nécessaire à la réservation d'une prestation</p>
          </div>

          <v-number-input
            v-if="professionalUser.deposit"
            control-variant="hidden"
            :min="10"
            :max="100"
            :step="5"
            label="Quel est le montant (en pourcentage)?"
            v-model="professionalUser.depositAmount"
            :error-messages="showErrors ? errors.depositAmount : undefined"
          />

          <!-- Période de facturation -->
          <div class="d-flex gap-2 flex-column justify-start align-items-start">
            <v-divider class="text-subtitle-2 font-weight-medium">
              Le restant dû est à régler avant ou après la prestation ?
            </v-divider>
            <div class="d-flex align-center justify-center gap-2">
              <v-label class="text-subtitle-2 font-weight-medium">AVANT</v-label>
              <v-switch
                v-model="professionalUser.billingPeriod"
                false-value="beforeEvent"
                true-value="afterEvent"
                :color="professionalUser.billingPeriod === 'beforeEvent' ? '#293b57' : '#f39454'"
                hide-details
              />
              <v-label class="text-subtitle-2 font-weight-medium">APRES</v-label>
            </div>
          </div>

          <v-divider class="mb-6 edit-professional__divider">
            <p class="mb-6">A propos de votre communication</p>
          </v-divider>

          <v-text-field
            label="Votre numéro de téléphone ?"
            v-model="professionalUser.telephone"
            :error-messages="showErrors ? errors.telephone : undefined"
          />

          <!-- Liens réseaux sociaux -->
          <div class="mt-4">
            <v-divider class="mb-6 edit-professional__divider">
              <p class="mb-6">Vos Réseaux</p>
            </v-divider>
            <div v-for="(link, index) in professionalUser.links" :key="index">
              <v-select
                v-model="link.type"
                label="Renseignez le réseau social ou le site web"
                :items="['Facebook', 'Instagram', 'LinkedIn', 'Youtube', 'Twitter', 'Site Web']"
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
                :disabled="professionalUser.links?.length === 0"
                color="rgb(var(--v-theme-peach))"
                style="color: rgb(var(--v-theme-background))"
                size="small"
                class="mb-4 text-center"
              >
                Supprimer
              </v-btn>
            </div>
            <v-btn
              @click="addLink"
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
            >
              Ajouter un lien vers un réseau social ou un site web
            </v-btn>
          </div>

          <!-- FAQ -->

          <div class="my-8">
            <v-divider class="mb-6 edit-professional__divider">
              <p class="mb-6">Votre Foire Aux Questions (FAQ)</p>
            </v-divider>
            <div v-for="(question, index) in faqQuestions" :key="index">
              <v-text-field
                v-model="faqQuestions[index]"
                label="Renseignez une question fréquente"
                @update:model-value="updateFaqQuestion(index, $event)"
              />
              <v-textarea
                :model-value="professionalUser?.faq?.[faqQuestions[index]] ?? ''"
                @update:model-value="
                  (value) => {
                    if (professionalUser?.faq) {
                      professionalUser.faq[faqQuestions[index]] = value;
                    }
                  }
                "
                label="Renseignez la réponse à la question"
                variant="outlined"
                placeholder="Veuillez renseigner votre réponse ici"
                counter="255"
              />
              <v-btn
                @click="removeFaq(index)"
                :disabled="faqQuestions.length === 0"
                color="rgb(var(--v-theme-peach))"
                style="color: rgb(var(--v-theme-background))"
                size="small"
                class="my-2"
              >
                Supprimer
              </v-btn>
            </div>
            <v-btn
              @click="addFaq"
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
            >
              Ajouter une question fréquente et sa réponse
            </v-btn>
          </div>
        </div>

        <!-- Boutons d'action -->
        <div class="d-flex justify-space-between edit-professional__btn">
          <v-btn
            @click="closeModal"
            style="
              border: 1px solid rgb(var(--v-theme-darkbg));
              background: rgb(var(--v-theme-background));
              color: rgb(var(--v-theme-darkbg));
            "
          >
            Annuler
          </v-btn>
          <v-btn
            v-if="!isProfileCreated"
            color="rgb(var(--v-theme-darkbg))"
            style="color: rgb(var(--v-theme-background))"
            @click="createProfile"
          >
            Valider mon profil
          </v-btn>
          <v-btn
            v-else
            class="edit-professional__btn-width"
            color="rgb(var(--v-theme-darkbg))"
            style="color: rgb(var(--v-theme-background))"
            @click="modifyProfile"
          >
            Enregistrer
          </v-btn>
        </div>
      </v-form>
    </v-card>
  </v-dialog>

  <Teleport to="body">
    <ModalRedirection :redirection="'dashboard2'" v-model="isProfilUpdate" />
    <CommonSuccessToaster />
    <error-toaster />
  </Teleport>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { AxiosError } from 'axios';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { computed, ref, watch } from 'vue';
import * as yup from 'yup';
import errorToaster from '~/components/common/errorToaster.vue';
import { useProfessionalService } from '~/composables/professional-services/UseProfessionalService';
import { useProfessional } from '~/composables/professional-user/UseProfessional';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import { GEOGRAPHIC_ACTIVITY } from '~/constants/geographicActivity';
import type { ProfessionalProfile } from '~/models/user/UserModel';
import { useProfilStore } from '~/stores/profilStore';
import { useToaster } from '~/utils/toaster';
import ModalRedirection from './ModalRedirection.vue';

const userStore = useProfilStore();
const { professionalUser, isProfilUpdate, isProfileCreated } = storeToRefs(userStore);
const { setProfessionalUser } = userStore;
const { editProfessionalProfileDetails, createProfessional } = useProfessional();
const { listProfessionalServiceByProfessional } = useProfessionalService();

const openModal = defineModel<boolean>('openModal', { default: false });

const showErrors = ref(false);
const { addError, addSuccess } = useToaster();
const activityItems = ref(ACTIVITY_ITEMS);
const geographicActivity = ref(GEOGRAPHIC_ACTIVITY);
const errors = ref<Record<string, string>>({});

// Gestion des questions FAQ (tableau des clés)
const faqQuestions = ref<string[]>([]);

// Conversion semaines <-> jours
const reservationDelayInWeeks = computed({
  get: () => Math.floor((professionalUser.value?.minimumReservationPeriod || 0) / 7),
  set: (weeks) => {
    if (professionalUser.value) {
      professionalUser.value.minimumReservationPeriod = weeks * 7;
    }
  },
});

// Schéma de validation
const validationSchema = yup.object({
  name: yup.string().min(2).required('Le nom est requis'),
  siret: yup
    .string()
    .required('Le SIRET est requis')
    .matches(/^[0-9]{14}$/, 'Le SIRET doit contenir exactement 14 chiffres'),
  address: yup.string().required("L'adresse est requise"),
  telephone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Le numéro doit contenir exactement 10 chiffres')
    .required('Le numéro de téléphone est obligatoire'),
  bio: yup
    .string()
    .required('La bio est requise')
    .min(10, 'La bio doit contenir au moins 10 caractères')
    .max(1000, 'La bio ne peut pas dépasser 1000 caractères'),
  mainActivity: yup
    .string()
    .required('Activité requise')
    .notOneOf(['Veuillez choisir votre activité'], 'Veuillez sélectionner une activité'),
  mainInterlocutor: yup.string().required("L'interlocuteur principal est requis"),
  experience: yup
    .number()
    .min(1900, "L'année doit être supérieure à 1900")
    .max(new Date().getFullYear(), "L'année ne peut pas être dans le futur")
    .required("L'expérience est requise"),
  minimumReservationPeriod: yup
    .number()
    .min(0, 'La période de réservation doit être positive')
    .required('La période de réservation est requise'),
  depositAmount: yup.number().when('deposit', {
    is: true,
    then: (schema) =>
      schema
        .min(10, "Le montant de l'acompte doit être au minimum 10%")
        .max(100, "Le montant de l'acompte ne peut pas dépasser 100%")
        .required("Le montant de l'acompte est requis"),
    otherwise: (schema) => schema.notRequired(),
  }),
  billingPeriod: yup.string().required('La période de facturation est requise'),
});

const { errors: formErrors } = useForm({
  validationSchema,
  validateOnMount: false,
});

// Initialisation du professionalUser si vide
const initializeProfessionalUser = () => {
  if (!professionalUser.value) {
    professionalUser.value = {
      name: '',
      email: '',
      siret: '',
      telephone: '',
      address: '',
      bio: '',
      mainActivity: 'Veuillez choisir votre activité',
      mainInterlocutor: '',
      experience: 2010,
      certification: [''],
      picture: '',
      geographicArea: 'Auvergne-Rhône-Alpes',
      professionalServices: [],
      faq: {},
      minimumReservationPeriod: 0,
      deposit: true,
      depositAmount: 0,
      billingPeriod: 'beforeEvent',
      links: [{ type: 'Facebook', value: '' }],
    } as ProfessionalProfile;
  }

  // Initialiser les questions FAQ
  faqQuestions.value = Object.keys(professionalUser.value?.faq || {});
  if (faqQuestions.value.length === 0) {
    faqQuestions.value = [''];
  }
};

// Gestion des liens
const addLink = () => {
  if (professionalUser.value?.links) {
    professionalUser.value.links.push({ type: 'Facebook', value: '' });
  }
};

const removeLink = (index: number) => {
  if (professionalUser.value?.links && professionalUser.value.links.length > 0) {
    professionalUser.value.links.splice(index, 1);
  }
};

// Gestion des FAQ
const addFaq = () => {
  faqQuestions.value.push('');
};

const removeFaq = (index: number) => {
  const question = faqQuestions.value[index];
  if (professionalUser.value?.faq && question) {
    delete professionalUser.value.faq[question];
  }
  faqQuestions.value.splice(index, 1);
};

const updateFaqQuestion = (index: number, newQuestion: string) => {
  const oldQuestion = faqQuestions.value[index];
  if (professionalUser.value?.faq && oldQuestion && oldQuestion !== newQuestion) {
    const answer = professionalUser.value.faq[oldQuestion] || '';
    delete professionalUser.value.faq[oldQuestion];
    professionalUser.value.faq[newQuestion] = answer;
  }
};

// Gestion des certifications
const addCertification = () => {
  if (professionalUser.value?.certification) {
    professionalUser.value.certification.push('');
  }
};

const removeCertification = (index: number) => {
  if (professionalUser.value?.certification) {
    professionalUser.value.certification.splice(index, 1);
  }
};

// Nettoyage du payload
const sanitizePayload = (): ProfessionalProfile => {
  if (!professionalUser.value) throw new Error('Professional user is undefined');

  return {
    ...professionalUser.value,
    siret: professionalUser.value.siret?.replace(/\s/g, '').trim() || '',
    telephone: professionalUser.value.telephone?.replace(/\s/g, '').trim() || '',
    bio: professionalUser.value.bio?.substring(0, 1000) || '',
    faq: professionalUser.value.faq || {},
    links:
      professionalUser.value.links?.filter((link) => link.type?.trim() && link.value?.trim()) || [],
    certification: professionalUser.value.certification?.filter((c) => c?.trim()) || [],
    depositAmount: professionalUser.value.deposit
      ? professionalUser.value.depositAmount || 0
      : undefined,
  };
};

// Validation
const validateAndShowErrors = async (): Promise<boolean> => {
  try {
    await validationSchema.validate(professionalUser.value, { abortEarly: true });
    errors.value = {};
    return true;
  } catch (err: any) {
    if (err.path && err.message) {
      errors.value = {
        [err.path]: err.message,
      };

      addError({ message: err.message });
    }
    return false;
  }
};

// Création du profil
const createProfile = async () => {
  const isValid = await validateAndShowErrors();
  if (!isValid) return;
  console.log(isValid, 'isValid');

  try {
    const payload = sanitizePayload();
    console.log('📦 Payload:', payload);

    console.log('🔄 Appel editProfessionalProfileDetails...');
    await createProfessional(payload);
    console.log('✅ editProfessionalProfileDetails terminé');

    console.log('🔄 Appel listProfessionalServiceByProfessional...');
    await listProfessionalServiceByProfessional();
    console.log('✅ listProfessionalServiceByProfessional terminé');
    console.log(await createProfessional(payload), '');

    addSuccess('Votre profil a été créé avec succès');
    showErrors.value = false;
    openModal.value = false;
  } catch (error: any) {
    console.log(error, 'error');

    useDisplayErrorMessage(error);
  }
};

// Modification du profil
const modifyProfile = async () => {
  const isValid = await validateAndShowErrors();
  if (!isValid) return;

  try {
    const payload = sanitizePayload();
    console.log('📦 Payload:', payload);

    console.log('🔄 Appel editProfessionalProfileDetails...');
    await editProfessionalProfileDetails(payload);
    console.log('✅ editProfessionalProfileDetails terminé');

    console.log('🔄 Appel listProfessionalServiceByProfessional...');
    await listProfessionalServiceByProfessional();
    console.log('✅ listProfessionalServiceByProfessional terminé');

    addSuccess('Votre profil a été modifié avec succès');
    showErrors.value = false;
    openModal.value = false;
  } catch (error: any) {
    console.log(error, 'ERROR');

    useDisplayErrorMessage(error as AxiosError);
  }
};

// Fermer le modal
const closeModal = () => {
  showErrors.value = false;
  openModal.value = false;
};

// Initialisation à l'ouverture
watch(openModal, (isOpen) => {
  if (isOpen) {
    initializeProfessionalUser();
  }
});
</script>

<style lang="scss" scoped>
.edit-professional {
  background: rgb(var(--v-theme-background));

  .v-text-field,
  .v-select,
  .v-number-input {
    background: rgb(var(--v-theme-background));
    border-radius: 10px;

    .v-field__input,
    .v-input__control {
      font-size: 0.95rem;
      color: rgb(var(--v-theme-on-surface));
    }

    .v-label {
      color: rgba(93, 121, 164, 0.9) !important;
      font-weight: 500;
    }
  }
}

.v-form {
  padding: 2rem 3.5rem;
  border-radius: 16px;

  @media (max-width: 960px) {
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
}

.v-divider {
  margin: 2.5rem 0 1.5rem;
  border-color: rgba(93, 121, 164, 0.25) !important;
  font-weight: 600;
  color: rgb(var(--v-theme-darkbg));

  p {
    color: rgb(var(--v-theme-darkbg));
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.95rem;
  }
}

.flex {
  display: flex;
  align-items: center;
}

.gap-2 {
  gap: 0.75rem;
}

.mb-3 {
  margin-bottom: 1.25rem !important;
}

.my-8 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.v-btn {
  border-radius: 10px !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.2px;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
}

.d-flex.justify-space-between {
  border-top: 1px solid rgba(93, 121, 164, 0.15);
  padding-top: 1.5rem;
  margin-top: 3rem;
  gap: 1rem;

  .v-btn {
    min-width: 150px;
  }
}

@media (max-width: 900px) {
  .edit-professional {
    &__btn {
      display: flex;
      flex-direction: column-reverse;

      &-width {
        width: 100%;
      }
    }
  }
}
</style>

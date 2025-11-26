<template>
  <v-dialog v-model="openModal" max-width="600" transition="dialog-bottom-transition">
    <v-card max-width="600" class="rounded edit-professional">
      <Icon
        icon="ri:close-fill"
        size="22"
        class="text-grey100 cursor-pointer"
        :style="{ position: 'absolute', right: '20px', top: '20px' }"
        @click="openModal = false"
      />
      <v-form class="edit-professional__formulaire">
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
            label="Le nom complet de l'interlocuteur principal ?"
            v-model="profile.mainInterlocutor"
            :error-messages="showErrors ? errors.mainInterlocutor : undefined"
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

          <v-divider class="border-opacity-50 mb-6"
            ><p class="mb-6">A propos de votre activité</p></v-divider
          >
          <v-select
            label="Votre activité principale ?"
            v-model="profile.mainActivity"
            :items="activityItems"
            item-title="label"
            item-value="value"
            @update:model-value="setSector"
            :error-messages="showErrors ? errors.mainActivity : undefined"
          />
          <v-textarea
            v-model="profile.bio"
            label="Une courte description de votre activité ?"
            placeholder="Veuillez renseigner votre activité ici"
            counter="1000"
            :error-messages="showErrors ? errors.bio : undefined"
          ></v-textarea>

          <v-number-input
            label="Depuis quelle année exercez-vous cette activité ?"
            v-model="profile.experience"
            control-variant="hidden"
            :min="0"
            :error-messages="showErrors ? errors.experience : undefined"
          />

          <!-- <v-select
            label="Votre secteur géographique ?"
            v-model="profile.geographicArea"
            :items="geographicActivity"
            item-title="label"
            item-value="value"
            :error-messages="showErrors ? errors.geographicArea : undefined"
          /> -->

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
                :error-messages="showErrors ? errors.certification : undefined"
                class="flex-1"
                counter="255"
              />

              <Icon
                width="24"
                height="24"
                icon="solar:trash-bin-trash-line-duotone"
                v-if="profile.certification.length > 1"
                color="error"
                size="small"
                @click="removeCertification(index)"
              />
            </div>

            <!-- Bouton d’ajout -->
            <v-btn
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
              class="mb-5"
              @click="addCertification"
            >
              Ajouter une certification
            </v-btn>
          </div>

          <v-number-input
            control-variant="hidden"
            :min="0"
            label="Votre délai de réservation minimum (en semaine) ?"
            v-model="reservationDelay"
            :error-messages="showErrors ? errors.minimumReservationPeriod : undefined"
          />
          <div class="d-flex gap-2 text-subtitle-2 mb-3 justify-center">
            <p>Un acompte est nécessaire à la réservation d’une prestation</p>
          </div>
          <v-number-input
            v-if="profile.deposit"
            control-variant="hidden"
            :min="10"
            :max="100"
            :step="5"
            label="Quel est le montant (en pourcentage)?"
            v-model="profile.depositAmount"
            :error-messages="showErrors ? errors.depositAmount : undefined"
          />
          <div class="d-flex gap-2 flex-column justify-start align-items-start">
            <v-divider class="text-subtitle-2 font-weight-medium"
              >Le restant dû est à régler avant ou après la prestation ?</v-divider
            >
            <div class="d-flex align-center justify-center gap-2">
              <v-label class="text-subtitle-2 font-weight-medium">AVANT</v-label>
              <v-switch
                v-model="profile.billingPeriod"
                false-value="beforeEvent"
                true-value="afterEvent"
                :color="profile.billingPeriod === 'beforeEvent' ? '#293b57' : '#f39454'"
                hide-details
                :error-messages="showErrors ? errors.billingPeriod : undefined"
                >{{ profile.billingPeriod }}</v-switch
              >
              <v-label class="text-subtitle-2 font-weight-medium">APRES</v-label>
            </div>
          </div>

          <v-divider class="mb-6 edit-professional__divider">
            <p class="mb-6">A propos de votre communication</p></v-divider
          >

          <v-text-field
            label="Votre numéro de téléphone ?"
            v-model="profile.telephone"
            :error-messages="showErrors ? errors.telephone : undefined"
          />

          <div class="mt-4">
            <div v-for="(link, index) in profile.links" :key="index">
              <v-select
                v-model="link.type"
                label="Renseignez le réseau social ou le site web"
                :items="['Facebook', 'Instagram', 'LinkedIn', 'Youtube', 'Twitter', 'Site Web']"
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

          <div class="my-8">
            <div v-for="(faq, index) in faqArray" :key="index">
              <v-text-field
                v-model="faq.question"
                label="Renseignez une question fréquente auquelle vous répondez souvent"
                item-title="label"
                item-value="value"
              >
              </v-text-field>
              <v-textarea
                v-model="faq.answer"
                label="Renseignez la réponse à la question"
                type="text"
                variant="outlined"
                placeholder="Veuillez renseigner votre réponse ici"
                counter="255"
                :error-messages="showErrors ? errors.faq : undefined"
              ></v-textarea>
              <v-btn
                @click="removeFaq(index)"
                :disabled="faqArray.length === 0"
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

        <div v-if="currentPage === 1" class="d-flex justify-space-between edit-professional__btn">
          <v-btn
            @click="openModal = false"
            style="
              border: 1px solid rgb(var(--v-theme-darkbg));
              background: rgb(var(--v-theme-background));
              color: rgb(var(--v-theme-darkbg));
            "
            >Annuler</v-btn
          >
          <v-btn
            v-if="!isProfileCreated"
            color="rgb(var(--v-theme-darkbg))"
            style="color: rgb(var(--v-theme-background))"
            @click="createProfile(profile)"
          >
            Valider mon profil
          </v-btn>
          <div v-else>
            <v-btn
              class="edit-professional__btn-width"
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
              @click="modifyProfile(profile)"
            >
              Enregistrer
            </v-btn>
          </div>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
  <Teleport to="body">
    <ModalRedirection :redirection="'dashboard2'" v-model="isProfilUpdate" />
    <CommonSuccessToaster></CommonSuccessToaster>
    <error-toaster></error-toaster>
  </Teleport>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';
import errorToaster from '~/components/common/errorToaster.vue';
import { ACTIVITY_ITEMS } from '~/constants/activitySector';
import { GEOGRAPHIC_ACTIVITY } from '~/constants/geographicActivity';
import type { Faq, ProfessionalProfile } from '~/models/user/UserModel';
import { useProfessionalProfileService } from '~/services/UseProfessionalProfileService';
import { useToaster } from '~/utils/toaster';
import { useSector } from '../../../composables/sector/UseSector';
import ModalRedirection from './ModalRedirection.vue';

const userStore = useUserStore();
const { professionalUser, isProfilUpdate, isProfileCreated } = storeToRefs(userStore);
const { setProfessionalUser } = userStore;
const { selectSectors } = useSector();
const { createProfessionalProfile, patchProfessionalProfileDetails } =
  useProfessionalProfileService();

const openModal = defineModel<boolean>('openModal', { default: false });

const faqArray = ref<Faq[]>([]);
const showErrors = ref(false);
const { addError, addSuccess } = useToaster();
const currentPage = ref(1);
const activityItems = ref(ACTIVITY_ITEMS);
const geographicActivity = ref(GEOGRAPHIC_ACTIVITY);
const reservationDelay = ref(0);

const minimumDaysReservation = computed(() => reservationDelay.value);

const mergedFaq = computed(() => {
  return faqArray.value.reduce(
    (acc, faq) => {
      if (faq.question && faq.answer) {
        acc[faq.question] = faq.answer;
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
    .matches(/^[0-9]{14}$/, 'Le SIRET doit contenir exactement 14 chiffres numériques') // ✅ Plus strict
    .test('siret-valid', 'SIRET invalide', (value) => {
      // ✅ Vérifier que c'est bien un nombre
      return value ? /^\d{14}$/.test(value) : false;
    }),
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
  geographicArea: yup.string().required('La zone géographique est requise'),
  certification: yup.array().of(yup.string().max(255, 'Maximum 255 caractères par certification')),
  minimumReservationPeriod: yup
    .number()
    .min(0, 'La période de réservation doit être positive')
    .required('La période de réservation est requise'),
  deposit: yup.boolean(),
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
  links: yup.array().of(
    yup.object({
      type: yup.string(),
      value: yup.string().url('URL non valide'),
    })
  ),
  faq: yup.object(),
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
    geographicArea: geographicActivity.value[0]?.label,
    faq: {},
    minimumReservationPeriod: 0,
    certification: [''],
    deposit: true,
    depositAmount: 0,
    billingPeriod: 'beforeEvent',
    links: [{ type: 'Facebook', value: '' }] as [{ type: string; value: string }],
  },
  validateOnMount: false,
  keepValuesOnUnmount: true,
});

const sanitizePayload = (values: ProfessionalProfile) => {
  return {
    ...values,
    // ✅ S'assurer que le SIRET est une string numérique
    siret: values.siret?.replace(/\s/g, '').trim() || '',

    // ✅ Nettoyer le téléphone
    telephone: values.telephone?.replace(/\s/g, '').trim() || '',

    // ✅ Limiter la bio à 1000 caractères
    bio: values.bio?.substring(0, 1000) || '',

    // ✅ FAQ en objet propre
    faq: mergedFaq.value || {},

    // ✅ Période de réservation en jours (conversion semaines → jours)
    minimumReservationPeriod: (reservationDelay.value || 0) * 7,

    // ✅ Filtrer les liens vides
    links: profile.links.filter((link) => link.type?.trim() && link.value?.trim()),

    // ✅ Filtrer les certifications vides
    certification: profile.certification.filter((c) => c?.trim()),

    // ✅ S'assurer que depositAmount existe si deposit = true
    depositAmount: values.deposit ? values.depositAmount || 0 : null,

    // ✅ Convertir billingPeriod en format attendu par la DB
    billingPeriod: values.billingPeriod === 'afterEvent' ? 'afterEvent' : 'beforeEvent',
  };
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
    answer: '',
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
  selectSectors(profile.mainActivity);
};

// Ajoutez cette fonction avant vos fonctions createProfile et modifyProfile

const validateAndShowErrors = async (): Promise<boolean> => {
  try {
    // Valider toutes les données du formulaire
    await validationSchema.validate(
      {
        ...profile,
        minimumReservationPeriod: reservationDelay.value,
      },
      { abortEarly: false } // Récupère toutes les erreurs, pas seulement la première
    );

    showErrors.value = false;
    return true; // Validation réussie
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      showErrors.value = true;

      // Afficher un message d'erreur global
      addError({
        message: err.message,
      });

      // Optionnel : Logger les erreurs en console pour debug
      console.error(
        'Erreurs de validation:',
        err.inner.map((e) => ({
          field: e.path,
          message: e.message,
        }))
      );

      return false; // Validation échouée
    }

    // Erreur inattendue
    addError({ message: 'Une erreur est survenue lors de la validation' });
    return false;
  }
};

// Modifiez votre fonction createProfile
const createProfile = async (values: ProfessionalProfile) => {
  const isValid = await validateAndShowErrors();
  if (!isValid) return;

  try {
    const payload = sanitizePayload(values);

    console.log('📤 Payload envoyé:', payload); // ✅ Debug

    const response = await createProfessionalProfile(payload);

    if (response.message === 'Professional created') {
      addSuccess('Votre profil a été créé avec succès');
      showErrors.value = false;
      openModal.value = false;
    }
  } catch (error: any) {
    console.error('❌ Erreur complète:', error); // ✅ Log complet

    // ✅ Extraire le message d'erreur DB si disponible
    const dbError = error.response?.data?.error || error.response?.data?.message;
    const userMessage = error.response?.data?.message || 'Erreur lors de la création du profil';

    // ✅ Afficher une erreur plus explicite
    if (dbError?.includes('duplicate') || dbError?.includes('unique')) {
      addError({ message: 'Ce SIRET ou email existe déjà dans notre base de données' });
    } else if (dbError?.includes('invalid input syntax')) {
      addError({ message: 'Format de données invalide. Vérifiez le SIRET et le téléphone.' });
    } else {
      addError({ message: userMessage });
    }
  }
};

// Modifiez votre fonction modifyProfile
const modifyProfile = async (newValues: ProfessionalProfile) => {
  const isValid = await validateAndShowErrors();
  if (!isValid) return;

  try {
    const payload = {
      ...sanitizePayload(newValues),
      uuid: professionalUser.value?.uuid,
    };

    console.log('📤 Payload modification:', payload); // ✅ Debug

    const response = await patchProfessionalProfileDetails(payload);
    const updatedProfessional = response.newPro || response;

    setProfessionalUser(updatedProfessional);
    addSuccess('Votre profil a été modifié avec succès');
    showErrors.value = false;
    openModal.value = false;
  } catch (error: any) {
    console.error('❌ Erreur modification:', error);

    const dbError = error.response?.data?.error || error.response?.data?.message;
    const userMessage = error.response?.data?.message || 'Erreur lors de la modification du profil';

    if (dbError?.includes('duplicate') || dbError?.includes('unique')) {
      addError({ message: 'Ce SIRET existe déjà pour un autre professionnel' });
    } else if (dbError?.includes('invalid input syntax')) {
      addError({ message: 'Format de données invalide. Vérifiez vos informations.' });
    } else {
      addError({ message: userMessage });
    }
  }
};

watch(openModal, (isOpen) => {
  if (!isOpen) return; // ← ne rien faire quand on ferme

  // Chargement des données uniquement quand on OUVRE
  if (professionalUser.value) {
    const isBooleanBillingPeriod =
      typeof professionalUser.value.billingPeriod === 'boolean'
        ? professionalUser.value.billingPeriod
          ? 'afterEvent'
          : 'beforeEvent'
        : professionalUser.value.billingPeriod || 'beforeEvent';

    // Parse la FAQ correctement
    let parsedFaq = {};
    if (professionalUser.value.faq) {
      try {
        parsedFaq =
          typeof professionalUser.value.faq === 'string'
            ? JSON.parse(professionalUser.value.faq)
            : professionalUser.value.faq;
      } catch (e) {
        console.error('Erreur lors du parsing de la FAQ:', e);
        parsedFaq = {};
      }
    }

    // Convertir l'objet FAQ en tableau pour faqArray
    const faqEntries = Object.entries(parsedFaq).map(([question, answer]) => ({
      question,
      answer: answer || '', // S'assurer qu'il y a toujours une valeur
    }));

    // S'il n'y a pas de FAQ, initialiser avec un élément vide
    faqArray.value = faqEntries.length > 0 ? faqEntries : [{ question: '', answer: '' }];

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
        faq: parsedFaq, // Objet FAQ parsé
      },
    });
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

/* --- DIVIDERS --- */
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

/* --- CHAMPS DE FORMULAIRE --- */

/* --- CHECKBOX & SWITCH --- */
.v-checkbox,
.v-switch {
  margin: 1rem 0;

  .v-label {
    color: rgb(var(--v-theme-textSecondary)) !important;
    font-weight: 500;
  }
}

/* --- CHAMPS DYNAMIQUES (FAQ, liens, certifs) --- */
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

.mt-2 {
  margin-top: 0.75rem !important;
}

.my-8 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

/* --- BOUTONS --- */
.v-btn {
  border-radius: 10px !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.2px;
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;

  &.v-btn--variant-text {
    color: rgb(var(--v-theme-darkbg)) !important;
  }

  &.v-btn--variant-contained {
    background-color: rgb(var(--v-theme-darkbg)) !important;
    color: rgb(var(--v-theme-background)) !important;
  }
}

/* --- ZONE DE VALIDATION / ACTIONS --- */
.d-flex.justify-space-between {
  border-top: 1px solid rgba(93, 121, 164, 0.15);
  padding-top: 1.5rem;
  margin-top: 3rem;
  gap: 1rem;

  .v-btn {
    min-width: 150px;
  }
}

/* --- HIERARCHIE VISUELLE --- */
.text-subtitle-1 {
  color: rgba(93, 121, 164, 0.9);
}

.font-weight-medium {
  font-weight: 500;
}

@media (max-width: 900px) {
  .v-form {
    max-width: 100%;
  }
  .edit-professional {
    p {
      text-align: center;
    }

    &__btn {
      display: flex;
      flex-direction: column-reverse;
      &-width {
        width: 100%;
      }
    }
    &__divider {
      max-width: 100%;
      text-wrap: unset;
      font-size: 0.5rem;
    }
  }
}
</style>

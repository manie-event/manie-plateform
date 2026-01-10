<template>
  <v-dialog v-model="openModificationModal" max-width="800">
    <v-card
      v-if="professionalActivities.length > 0"
      max-width="800"
      style="padding: 35px; background: rgb(var(--v-theme-background))"
    >
      <v-card-text>
        <div
          v-for="(activity, activityIndex) in professionalActivities"
          :key="activityIndex"
          class="mb-8"
        >
          <div class="mb-4 w-100 d-flex justify-lg-space-between align-center">
            <h3 class="text-h6">Mon activité N° {{ activityIndex + 1 }} : {{ activity }}</h3>
            <Icon
              icon="solar:trash-bin-trash-line-duotone"
              style="height: 40px; width: 25px"
              class="mt-1 cursor-pointer"
              color="rgb(var(--v-theme-error))"
              @click="deleteActivity(activityIndex)"
            >
            </Icon>
          </div>

          <h4 class="mb-3">{{ getServiceBySector.questions[activityIndex] }}</h4>

          <div class="mb-6">
            <v-chip
              v-for="service in getServiceBySector.responseServices[activityIndex]"
              :key="service.uuid"
              variant="outlined"
              class="ma-1"
              :color="isServiceSelected(activityIndex, service.uuid) ? 'primary' : undefined"
              @click="selectServices(activityIndex, service)"
            >
              {{ service.name }}
            </v-chip>
          </div>

          <v-expansion-panels
            v-if="getKeywordsByCategory[activityIndex]"
            variant="accordion"
            multiple
            class="mb-4"
          >
            <v-expansion-panel
              v-for="(question, questionIndex) in getKeywordsByCategory[activityIndex]?.questions"
              :key="questionIndex"
            >
              <v-expansion-panel-title>
                <div class="d-flex align-center">
                  <v-icon class="mr-2" size="20">mdi-help-circle-outline</v-icon>
                  <span>{{ question }}</span>
                </div>
              </v-expansion-panel-title>

              <v-expansion-panel-text>
                <div class="keyword-chips">
                  <v-chip
                    v-for="keyword in getKeywordsByCategory[activityIndex]?.keywords[questionIndex]"
                    :key="keyword.uuid"
                    variant="outlined"
                    class="ma-1"
                    :color="isKeywordSelected(activityIndex, keyword.uuid) ? 'primary' : undefined"
                    @click="toggleKeywordArray(activityIndex, keyword)"
                  >
                    {{ keyword.value }}
                  </v-chip>
                </div>

                <p
                  v-if="!getKeywordsByCategory[activityIndex]?.keywords[questionIndex]?.length"
                  class="text-caption text-grey mt-2"
                >
                  Aucun mot-clé disponible pour cette catégorie
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-alert v-else type="info" variant="tonal" class="mb-4">
            Aucune question disponible pour cette activité
          </v-alert>

          <v-divider v-if="activityIndex < professionalActivities.length - 1" class="my-6" />
        </div>
      </v-card-text>

      <v-card-actions class="px-6 pb-4 d-flex gap-4">
        <v-btn variant="outlined" @click="openModificationModal = false"> Annuler </v-btn>
        <v-btn
          color="rgb(var(--v-theme-acier))"
          class="text-white"
          variant="flat"
          @click="saveAnswers"
        >
          Enregistrer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import questionnairePresta from '@/data/questionnaire-presta.json';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useProfessionalService } from '~/composables/professional-services/UseProfessionalService';
import { useProfessional } from '~/composables/professional-user/UseProfessional';
import type { Services } from '~/models/professionalService/Services';
import { useProfilStore } from '~/stores/profilStore';
import { useSectorStore } from '~/stores/sectorStore';
import { useToaster } from '~/utils/toaster';

const openModificationModal = defineModel<boolean>('openModificationModal', { default: false });

const { professionalActivities, professionalUuid, professionalUser } =
  storeToRefs(useProfilStore());
const { services, sectors, keywords } = storeToRefs(useSectorStore());
const {
  createProfessionalServices,
  changeProfessionalServices,
  deleteServiceAndActivity,
  professionalServiceFilteredByVerification,
} = useProfessionalService();
const { editProfessionalProfileDetails } = useProfessional();
const { addError, addSuccess } = useToaster();

const localSelectedServices = ref<Record<number, Services>>({});
const localSelectedKeywords = ref<Record<number, string[]>>({});

const selectedServices = computed<Record<number, Services>>(() => {
  const result: Record<number, Services> = {};

  professionalActivities.value.forEach((activity, activityIndex) => {
    const sector = sectors.value.find((s) => s.name === activity);
    if (!sector) return;

    const professionalService = professionalServiceFilteredByVerification.value.find((ps) => {
      return ps.sector?.uuid === sector.uuid;
    });

    if (!professionalService) return;

    const service = services.value.find((s) => s.uuid === professionalService.serviceUuid);

    if (service) {
      result[activityIndex] = service;
    }
  });

  return result;
});

const selectedKeywordsArray = computed<Record<number, string[]>>(() => {
  const result: Record<number, string[]> = {};

  professionalActivities.value.forEach((activity, activityIndex) => {
    const sector = sectors.value.find((s) => s.name === activity);
    if (!sector) return;

    const professionalService = professionalServiceFilteredByVerification.value.find((ps) => {
      return ps.sector?.uuid === sector.uuid;
    });

    if (professionalService?.keywordsUuid) {
      result[activityIndex] = professionalService.keywordsUuid;
    }
  });

  return result;
});

const initializeLocalData = () => {
  localSelectedServices.value = { ...selectedServices.value };
  localSelectedKeywords.value = { ...selectedKeywordsArray.value };
};

const getServiceBySector = computed(() => {
  const data = professionalActivities.value.map((activity) => {
    const questionnaire = questionnairePresta.find((s) => s.sector === activity);
    const question = questionnaire?.general?.questions[0]?.question || 'Aucune question disponible';

    const sector = sectors.value.find((s) => s.name === activity);
    const sectorUuid = sector?.uuid;

    const servicesForSector = sectorUuid
      ? services.value.filter((s) => s.sectorUuid === sectorUuid)
      : [];

    return { question, services: servicesForSector };
  });

  return {
    questions: data.map((d) => d.question),
    responseServices: data.map((d) => d.services),
  };
});

const getKeywordsByCategory = computed(() => {
  return professionalActivities.value.map((activity) => {
    const sector = questionnairePresta.find((s) => s.sector === activity);

    if (!sector?.servicesSection?.questions) {
      return { questions: [], keywords: [] };
    }

    console.log(sector, 'sector');

    const questions = sector.servicesSection.questions.map((q) => q.question);
    console.log(questions, 'questions');

    const categories = sector.servicesSection.questions.map((q) => q.category);
    console.log(categories, 'categories');

    const keywordsByCategory = categories.map((category) => {
      return keywords.value.filter((k) => k.category === category);
    });
    console.log(keywords.value, 'keywords.value');

    return {
      questions,
      keywords: keywordsByCategory,
    };
  });
});

const isServiceSelected = (activityIndex: number, serviceUuid: string): boolean => {
  return localSelectedServices.value[activityIndex]?.uuid === serviceUuid;
};

const selectServices = (activityIndex: number, service: Services) => {
  if (localSelectedServices.value[activityIndex]?.uuid === service.uuid) {
    localSelectedServices.value[activityIndex] = {} as Services;
  } else {
    localSelectedServices.value[activityIndex] = service;
  }
};

const isKeywordSelected = (activityIndex: number, keywordUuid: string): boolean => {
  return localSelectedKeywords.value[activityIndex]?.includes(keywordUuid) ?? false;
};

const toggleKeywordArray = (activityIndex: number, keyword: any) => {
  if (!localSelectedKeywords.value[activityIndex]) {
    localSelectedKeywords.value[activityIndex] = [];
  }

  const keywordArray = localSelectedKeywords.value[activityIndex];
  const index = keywordArray.indexOf(keyword.uuid);

  if (index !== -1) {
    keywordArray.splice(index, 1);
  } else {
    keywordArray.push(keyword.uuid);
  }
};

const saveAnswers = async () => {
  const responses = professionalActivities.value
    .map((activity, index) => {
      const service = localSelectedServices.value[index];
      const keywordsArray = localSelectedKeywords.value[index] || [];
      const isVerified = professionalServiceFilteredByVerification.value[index]?.isVerified;

      if (!service?.uuid) {
        addError({ message: `Aucun service sélectionné pour ${activity}` });
        return null;
      }
      if (keywordsArray.length === 0) {
        addError({ message: `Veuillez sélectionner au moins un mot clé pour ${activity}` });
        return null;
      }

      return {
        name: service.name,
        serviceUuid: service.uuid,
        professionalUuid: professionalUuid.value!,
        keywordsUuid: keywordsArray,
        isVerified: isVerified ?? undefined,
      };
    })
    .filter(Boolean);

  // Envoyer les réponses une par une avec un délai de 500ms entre chaque pour éviter la saturation de Resend
  for (let i = 0; i < responses.length; i++) {
    if (responses[i]?.isVerified === undefined) {
      await createProfessionalServices(responses[i]);
      addSuccess(
        "Vos services doivent être vérifiés avant de pouvoir être modifiés. Nous revenons vers vous dès que c'est fait !"
      );
    } else {
      const professionalServiceUuid = professionalServiceFilteredByVerification.value[i].uuid;

      await changeProfessionalServices(professionalServiceUuid, responses[i]);
      addSuccess("Vos services viennent de d' être misent à jour!");
    }
    if (i < responses.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  openModificationModal.value = false;
};

const deleteActivity = async (activityIndex: number) => {
  const proServiceUuid = professionalServiceFilteredByVerification.value.find((ps) => {
    return ps.serviceUuid === localSelectedServices.value[activityIndex].uuid;
  })?.uuid;

  if (!proServiceUuid) {
    addError({ message: 'Service introuvable' });
    return;
  }

  const result = await deleteServiceAndActivity(proServiceUuid, activityIndex);

  if (result.success) {
    addSuccess('Activité supprimée avec succès');
  } else {
    addError({ message: 'Erreur lors de la suppression' });
  }
};

const handleModalOpen = (isOpen: boolean) => {
  if (isOpen) {
    initializeLocalData();
  }
};

watch(() => openModificationModal.value, handleModalOpen);
</script>

<style scoped>
.keyword-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

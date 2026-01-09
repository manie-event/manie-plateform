<template>
  <v-dialog v-model="openModificationModal" max-width="800">
    <v-card
      v-if="professionalActivities.length > 0"
      max-width="800"
      style="padding: 35px; background: rgb(var(--v-theme-background))"
    >
      <v-card-text>
        <div v-for="(activity, activityIndex) in activities" :key="activityIndex" class="mb-8">
          <div class="mb-4 w-100 d-flex justify-lg-space-between align-center">
            <h3 class="text-h6">Mon activité N° {{ activityIndex + 1 }} : {{ activity }}</h3>
            <Icon
              icon="solar:trash-bin-trash-line-duotone"
              style="height: 40px; width: 25px"
              class="mt-1 cursor-pointer"
              color="rgb(var(--v-theme-error))"
              @click="deleteActivity(activity, activityIndex)"
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

          <v-divider v-if="activityIndex < activities.length - 1" class="my-6" />
        </div>
      </v-card-text>

      <v-card-actions class="px-6 pb-4">
        <v-spacer />
        <v-btn variant="outlined" @click="openModificationModal = false"> Annuler </v-btn>
        <v-btn color="primary" variant="flat" @click="saveAnswers"> Enregistrer </v-btn>
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
import type { Services } from '~/models/professionalService/Services';
import { useProfessionalStore } from '~/stores/professionalStore';
import { useSectorStore } from '~/stores/sectorStore';
import { useUserStore } from '~/stores/userStore';
import { useToaster } from '~/utils/toaster';

const openModificationModal = defineModel<boolean>('openModificationModal', { default: false });

const { professionalActivities, professionalUuid } = storeToRefs(useUserStore());
const { services, sectors, keywords } = storeToRefs(useSectorStore());
const { createProfessionalServices } = useProfessionalService();
const { addError, addSuccess } = useToaster();
const { professionalServices } = storeToRefs(useProfessionalStore());

const localSelectedServices = ref<Record<number, Services>>({});
const localSelectedKeywords = ref<Record<number, string[]>>({});

const selectedServices = computed<Record<number, Services>>(() => {
  const result: Record<number, Services> = {};
  activities.value.forEach((activity, activityIndex) => {
    const sector = sectors.value.find((s) => s.name === activity);
    if (!sector) return;
    // console.log(sector, 'sector found for activity:');

    const professionalService = professionalServices.value.find((ps) => {
      return ps.sector?.uuid === sector.uuid;
    });

    if (!professionalService) return;

    console.log(professionalService.serviceUuid, 'ProService');

    const service = services.value.find((s) => s.uuid === professionalService.serviceUuid);
    console.log(service, 'selectedServices service found for activity:');
    console.log('----------------------');

    if (service) {
      result[activityIndex] = service;
    }
  });

  return result;
});

const selectedKeywordsArray = computed<Record<number, string[]>>(() => {
  const result: Record<number, string[]> = {};

  activities.value.forEach((activity, activityIndex) => {
    const sector = sectors.value.find((s) => s.name === activity);
    if (!sector) return;

    const professionalService = professionalServices.value.find((ps) => {
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

//TODO: Savoir ce qu'est un record

const activities = computed(() => {
  return professionalActivities.value.filter(Boolean);
});

const getSectorUuid = computed(() => {
  return sectors.value
    .filter((sector) => activities.value.includes(sector.name))
    .map((sector) => sector.uuid);
});

const getServiceBySector = computed(() => {
  const questions = activities.value.map((activity) => {
    const questionnaire = questionnairePresta.find((s) => s.sector === activity);
    console.log(questionnaire, 'questionnaire for activity: ', activity);
    return questionnaire?.general?.questions[0]?.question || 'Aucune question disponible';
  });

  const servicesChip = getSectorUuid.value.map((sectorUuid: string) => {
    return services.value.filter((s) => s.sectorUuid === sectorUuid);
  });

  console.log(servicesChip, '--- servicesChip ---');

  return {
    questions,
    responseServices: servicesChip,
  };
});

const getKeywordsByCategory = computed(() => {
  return activities.value.map((activity) => {
    const sector = questionnairePresta.find((s) => s.sector === activity);

    if (!sector?.servicesSection?.questions) {
      return { questions: [], keywords: [] };
    }

    const questions = sector.servicesSection.questions.map((q) => q.question);

    const categories = sector.servicesSection.questions.map((q) => q.category);

    const keywordsByCategory = categories.map((category) => {
      return keywords.value.filter((k) => k.category === category);
    });

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
  const responses = activities.value
    .map((activity, index) => {
      const service = localSelectedServices.value[index];
      const keywordsArray = localSelectedKeywords.value[index] || [];

      if (!service?.uuid) {
        addError({ message: `Aucun service sélectionné pour ${activity}` });
        return null;
      }
      if (keywordsArray.length === 0) {
        addError({ message: `Veuillez sélectionner au moins un mot clé pour ${activity}` });
        return null;
      }

      return {
        serviceUuid: service.uuid,
        professionalUuid: professionalUuid.value!,
        keywordsUuid: keywordsArray,
      };
    })
    .filter(Boolean);

  // Envoyer les réponses une par une avec un délai de 500ms entre chaque pour éviter la saturation de Resend
  for (let i = 0; i < responses.length; i++) {
    await createProfessionalServices(responses[i]);

    if (i < responses.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  addSuccess('Vos services ont été mis à jour avec succès !');
  openModificationModal.value = false;
};

const deleteActivity = (activity: string, activityIndex: number) => {
  // TO DO: Supprimer aussi le service en base de données

  const serviceToDelete = activities.value.filter((a) => a === activity);
  console.log(serviceToDelete, 'serviceToDelete');

  // professionalActivities.value.splice(activityIndex, 1);
};

const handleModalOpen = (isOpen: boolean) => {
  if (isOpen) {
    initializeLocalData();
  }
};

// Observer l'ouverture du modal
watch(() => openModificationModal.value, handleModalOpen);
</script>

<style scoped>
.keyword-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>

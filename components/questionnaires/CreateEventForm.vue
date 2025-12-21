<template>
  <v-dialog v-model="open" transition="dialog-bottom-transition" max-width="800">
    <v-card class="pa-6 rounded-2xl elevation-3 bg-grey-lighten-5">
      <Icon
        icon="ri:close-fill"
        height="24"
        width="24"
        class="cursor-pointer"
        style="position: absolute; top: 20px; right: 20px"
        @click="open = false"
      />

      <!-- PAGE 1 -->
      <div v-if="currentPage === 1">
        <h2 class="text-h5 font-weight-bold mb-4">Créer votre évènement</h2>

        <v-text-field
          v-model="event.type_event"
          label="Nom de votre évènement"
          variant="outlined"
        />

        <h3 class="text-h6 mb-2">Quel type d'évènement ?</h3>
        <div class="d-flex flex-wrap gap-2 mb-6">
          <v-chip
            v-for="type in getQuestionOptions(0)"
            :key="type.value"
            :color="event.name === type.value ? '#293b57' : 'default'"
            :variant="event.name === type.value ? 'flat' : 'outlined'"
            size="large"
            class="rounded-xl"
            @click="event.name = type.value"
          >
            {{ type.label }}
          </v-chip>
        </div>

        <h3 class="text-h6 mb-2">📅 À quelle date ?</h3>
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field type="date" v-model="dateStart" :min="today" label="Début" />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field type="date" v-model="dateEnd" :min="dateStart" label="Fin" />
          </v-col>
        </v-row>

        <h3 class="text-h6 mt-6 mb-2">{{ questionnaire.general[1].title }}</h3>
        <v-select
          :items="questionnaire.general[1].reponses"
          item-title="label"
          item-value="value"
          v-model="event.location"
          label="Localisation"
          variant="outlined"
        />

        <div class="mt-6">
          <h3 class="text-h6 mb-2">{{ questionnaire.general[2].title }}</h3>
          <v-radio-group v-model="event.group_type" inline>
            <v-radio
              v-for="r in getQuestionOptions(2)"
              :key="r.value"
              :label="r.label"
              :value="r.value"
            />
          </v-radio-group>
        </div>

        <div class="mt-6">
          <h3 class="text-h6 mb-2">{{ questionnaire.general[3].title }}</h3>
          <v-radio-group v-model="event.duration" inline>
            <v-radio
              v-for="d in getQuestionOptions(3)"
              :key="d.value"
              :label="d.label"
              :value="d.value"
            />
          </v-radio-group>
        </div>
      </div>

      <!-- PAGE 2 -->
      <div v-if="currentPage === 2">
        <h2 class="text-h5 font-weight-bold mb-4">Détails de votre événement 🎉</h2>

        <v-radio-group v-model="event.organized_for" class="mb-4">
          <v-radio
            v-for="orga in getQuestionOptions(4)"
            :key="orga.value"
            :label="orga.label"
            :value="orga.value"
          />
        </v-radio-group>

        <v-text-field v-model="event.theme" label="Thème" class="mb-4" />
        <v-number-input v-model="event.people" label="Nombre d'invités" class="mb-4" />

        <v-radio-group v-model="isBudgetGlobale" class="mb-2">
          <v-radio label="Par personne" :value="false" />
          <v-radio label="Global" :value="true" />
        </v-radio-group>

        <v-number-input v-model="event.budget" label="Budget" variant="outlined" />
      </div>

      <!-- PAGE 3 -->
      <div v-if="currentPage === 3">
        <div
          style="background: rgb(var(--v-theme-mimosa))"
          class="my-6 pa-6 rounded-lg d-flex justify-center"
        >
          <p class="font-weight-medium mb-0">
            Si plusieurs prestataires vous plaisent, il vous suffit d’ajouter un nouveau service
          </p>
        </div>

        <div
          v-for="(service, i) in event.eventServices"
          :key="i"
          class="mb-6 pa-6 bg-white rounded-xl shadow-sm"
        >
          <div class="d-flex justify-space-between align-center mb-3">
            <h3 class="font-weight-bold">Prestataires</h3>
            <Icon
              v-if="selectedServices.length > 1"
              icon="solar:trash-bin-trash-line-duotone"
              height="24"
              class="cursor-pointer"
              @click="removeService(i)"
            />
          </div>

          <v-select
            v-model="service.sectorName"
            :items="sectorFiltered"
            item-title="label"
            item-value="value"
            placeholder="Secteur"
            @update:modelValue="updateServiceSector(i, service.sectorName)"
          />

          <div
            v-for="(question, index) in getFilteredQuestionsForService(service.sectorName)"
            :key="index"
            class="mt-4"
          >
            <h4 class="mb-2">{{ question.question }}</h4>

            <div v-if="question.isService">
              <v-btn
                v-for="answer in question.answers"
                :key="answer.uuid"
                color="rgb(var(--v-theme-mimosa))"
                :style="
                  service.serviceUuid === answer.uuid
                    ? { color: 'white' }
                    : { color: 'rgb(var(v-theme-darkbg))' }
                "
                :variant="service.serviceUuid === answer.uuid ? 'flat' : 'outlined'"
                class="ma-1"
                @click="selectServiceForIndex(i, answer.uuid)"
              >
                {{ answer.name }}
              </v-btn>
            </div>

            <div v-else>
              <v-chip
                v-for="answer in question.answers"
                :key="answer.uuid"
                :variant="service.keywordsUuid.includes(answer.uuid) ? 'flat' : 'outlined'"
                class="ma-1"
                @click="toggleKeywordForService(i, answer.uuid)"
              >
                {{ answer.value }}
              </v-chip>
            </div>
          </div>
        </div>
      </div>

      <!-- NAVIGATION -->
      <v-row class="w-100 d-flex justify-md-space-between">
        <v-col cols="12" v-if="currentPage === 3">
          <v-btn variant="outlined" class="w-100" @click="addNewServiceForm">
            Ajouter un prestataire
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" v-if="currentPage > 1">
          <div class="d-flex justify-space-between w-100">
            <v-btn variant="outlined" class="w-100" @click="currentPage--"> Précédent </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="4" v-if="currentPage < 3">
          <v-btn
            variant="flat"
            style="background: rgb(var(--v-theme-darkbg))"
            class="text-white w-100"
            @click="nextPage"
          >
            Suivant
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" v-if="currentPage === 3">
          <v-btn
            style="background: rgb(var(--v-theme-peach))"
            class="text-white w-100"
            @click="handleSubmit"
          >
            Créer mon évènement
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import questionnaire from '@/data/questionnaire-client-refonte.json';
import { Icon } from '@iconify/vue';
import type { AxiosError } from 'axios';
import { UseEvent } from '~/composables/event/UseEvent';
import { useEventForm } from '~/composables/event/UseEventForm';
import { useEventsStore } from '~/stores/events';

const open = defineModel<boolean>('open-customer-form');
const { submitEvent: createEvent } = UseEvent();
const eventStore = useEventsStore();
const { event } = storeToRefs(eventStore);
const { resetForm } = eventStore;

const {
  currentPage,
  nextPage,

  // fields
  today,
  isBudgetGlobale,
  budgetInput,
  dateStart,
  dateEnd,

  // services
  budgetCalculation,
  addNewServiceForm,
  removeService,
  updateServiceSector,
  selectServiceForIndex,
  toggleKeywordForService,
  getQuestionOptions,
  getFilteredQuestionsForService,
  sectorFiltered,
} = useEventForm();

const { addSuccess } = useToaster();
const { clientUuid } = storeToRefs(useUserStore());

const handleSubmit = async () => {
  try {
    const newEvent = {
      ...event.value,
      date: [dateStart.value, dateEnd.value],
      people: Number(event.value.people),
      budget: budgetCalculation.value,
      organisatorUuid: clientUuid.value,
      status: 'pending',
      services: selectedServices.value.map((service) => ({
        sectorName: service.selectedSector,
        serviceUuid: service.selectedServiceId,
        keywordsUuid: service.selectedKeywords,
      })),
      formule: event.value.formule || 'gratuit',
    };
    await createEvent(newEvent);

    addSuccess('Évènement mis à jour avec succès !');
    open.value = false;
  } catch (err) {
    useDisplayErrorMessage(err as AxiosError);
  }
};

onMounted(() => {
  resetForm();
});
</script>

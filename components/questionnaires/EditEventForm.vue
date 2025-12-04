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
        <h2 class="text-h5 font-weight-bold mb-4">Modifier votre évènement</h2>

        <v-text-field v-model="type_event" label="Nom de votre évènement" variant="outlined" />

        <h3 class="text-h6 mb-2">Quel type d'évènement ?</h3>
        <div class="d-flex flex-wrap gap-2 mb-6">
          <v-chip
            v-for="type in getQuestionOptions(0)"
            :key="type.value"
            :color="name === type.value ? '#293b57' : 'default'"
            :variant="name === type.value ? 'flat' : 'outlined'"
            size="large"
            class="rounded-xl"
            @click="name = type.value"
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
          v-model="location"
          label="Localisation"
          variant="outlined"
        />

        <div class="mt-6">
          <h3 class="text-h6 mb-2">{{ questionnaire.general[2].title }}</h3>
          <v-radio-group v-model="group_type" inline>
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
          <v-radio-group v-model="duration" inline>
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

        <v-radio-group v-model="organized_for" class="mb-4">
          <v-radio
            v-for="orga in getQuestionOptions(4)"
            :key="orga.value"
            :label="orga.label"
            :value="orga.value"
          />
        </v-radio-group>

        <v-text-field v-model="theme" label="Thème" class="mb-4" />
        <v-number-input v-model="people" label="Nombre d'invités" class="mb-4" />

        <v-radio-group v-model="isBudgetGlobale" class="mb-2">
          <v-radio label="Par personne" :value="false" />
          <v-radio label="Global" :value="true" />
        </v-radio-group>

        <v-number-input v-model="budgetInput" label="Budget" variant="outlined" />
      </div>

      <!-- PAGE 3 -->
      <div v-if="currentPage === 3">
        <v-alert v-if="isLocked" color="warning" class="my-6">
          ⚠️ Certains services sont verrouillés car déjà utilisés dans des propositions.
        </v-alert>

        <div
          v-for="(service, i) in selectedServices"
          :key="i"
          class="mb-6 pa-6 bg-white rounded-xl shadow-sm"
        >
          <div class="d-flex justify-space-between align-center mb-3">
            <h3 class="font-weight-bold">Prestataires</h3>
            <Icon
              v-if="selectedServices.length > 1 && !isLocked"
              icon="solar:trash-bin-trash-line-duotone"
              height="24"
              class="cursor-pointer"
              @click="removeService(i)"
            />
          </div>

          <v-select
            v-model="service.selectedSector"
            :items="sectorFiltered"
            item-title="label"
            item-value="value"
            placeholder="Secteur"
            @update:modelValue="updateServiceSector(i, service.selectedSector)"
          />

          <div
            v-for="(question, index) in getFilteredQuestionsForService(service.selectedSector)"
            :key="index"
            class="mt-4"
          >
            <h4 class="mb-2">{{ question.question }}</h4>

            <div v-if="question.isService">
              <v-btn
                v-for="answer in question.answers"
                :key="answer.uuid"
                :variant="service.selectedServiceId === answer.uuid ? 'flat' : 'outlined'"
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
                :variant="service.selectedKeywords.includes(answer.uuid) ? 'flat' : 'outlined'"
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
          <v-btn variant="outlined" class="w-100" @click="addNewService">
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
            Mettre à jour mon évènement
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import questionnaire from '@/data/questionnaire-client-refonte.json';
import { Icon } from '@iconify/vue';
import { UseEvent } from '~/composables/event/UseEvent';
import { useEventForm } from '~/composables/event/UseEventForm';
import { useSector } from '~/composables/sector/UseSector';
import { useEventService } from '~/services/UseEventService';
import { useProfessionalProposition } from '~/services/UseProfessionalProposition';

const props = defineProps<{ event: any }>();

const open = defineModel<boolean>('open-customer-form');
const { getEventsInstance } = useEventService();
const { getListPropositionByEventService } = useProfessionalProposition();
const { updateEvent } = UseEvent();
const { getListSector } = useSector();
const { servicesFiltered, sectors } = storeToRefs(useSectorStore());

const fullEvent = ref();
const {
  currentPage,
  nextPage,

  // fields
  type_event,
  name,
  location,
  duration,
  group_type,
  theme,
  organized_for,
  people,
  today,
  isBudgetGlobale,
  budgetInput,
  dateStart,
  dateEnd,

  // services
  selectedServices,
  addNewService,
  removeService,
  updateServiceSector,
  selectServiceForIndex,
  toggleKeywordForService,
  getQuestionOptions,
  getFilteredQuestionsForService,
  sectorFiltered,

  // computed
  customerResponse,
} = useEventForm();

const { addSuccess } = useToaster();

//
// 🔄 PRELOAD — charger props.event dans ton composable
//
watch(
  () => props.event.uuid,
  async () => {
    console.log(props.event, 'event prop');

    if (!props.event?.uuid) return;

    const responses = await getEventsInstance(props.event.uuid);
    fullEvent.value = responses;

    const normalizedAnswer = responses.$attributes;

    type_event.value = normalizedAnswer.type_event ?? '';
    name.value = normalizedAnswer.name ?? '';
    location.value = normalizedAnswer.location ?? '';
    duration.value = normalizedAnswer.duration ?? '';
    group_type.value = normalizedAnswer.group_type ?? '';
    theme.value = normalizedAnswer.theme ?? '';
    organized_for.value = normalizedAnswer.organized_for ?? '';
    people.value = Number(normalizedAnswer.people) || 0;
    budgetInput.value = normalizedAnswer.budget ?? 0;
    [dateStart.value, dateEnd.value] = normalizedAnswer.date ?? ['', ''];

    if (responses.$preloaded?.eventServices?.length) {
      selectedServices.value = responses.$preloaded.eventServices.map((srv) => {
        const service = servicesFiltered.value.find((s) => s.uuid === srv.serviceUuid);
        const sector = sectors.value.find((sect) => sect.uuid === service?.sectorUuid);
        return {
          selectedSector: sector?.name ?? undefined,
          selectedServiceId: srv.serviceUuid,
          selectedKeywords:
            srv.keywordsUuid?.map((k) => (typeof k === 'string' ? k : k.uuid)) || [],
        };
      });
    }
  }
);

//
// 🔐 LOCK LOGIC — si un service est déjà utilisé ou traité
//
// const isLocked = computed(async () => {
//   const event = fullEvent.value;
//   console.log(event, 'isLocked');

//   if (!event) return false;

//   const services = event.$preloaded?.eventServices || [];

//   const propositions = await Promise.all(
//     services.map((service) => getListPropositionByEventService(service.uuid))
//   );

//   // Règle 1 : un service n'est pas pending → locked
//   const serviceLocked = services.some((s) => s.status !== 'pending');

//   // Règle 2 : une proposition existe et n'est pas cancelled → locked
//   const propositionLocked = propositions.some((p) => p.status !== 'cancelled');

//   return serviceLocked || propositionLocked;
// });

//
// ✔️ UPDATE
//
const handleSubmit = async () => {
  if (!props.event || !fullEvent.value) return;

  const locked = isLocked.value;

  const finalPayload = {
    // Identité absolue
    uuid: fullEvent.value.$attributes.uuid,
    organisatorUuid: fullEvent.value.$attributes.organisatorUuid,

    // Champs éditables
    type_event: type_event.value,
    name: name.value,
    date: [dateStart.value, dateEnd.value],
    location: location.value,
    duration: duration.value,
    group_type: group_type.value,
    theme: theme.value,
    organized_for: organized_for.value,
    people: people.value,
    budget: isBudgetGlobale.value ? budgetInput.value : budgetInput.value * people.value,

    // Services : logique identique au backend
    services: locked
      ? []
      : selectedServices.value.map((s) => ({
          serviceUuid: s.selectedServiceId,
          keywordsUuid: s.selectedKeywords,
        })),
  };

  await updateEvent(finalPayload.uuid, finalPayload);

  addSuccess('Évènement mis à jour avec succès !');
  open.value = false;
};

onMounted(async () => {
  await getListSector();
});
</script>

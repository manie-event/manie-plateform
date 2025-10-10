<template>
  <v-card elevation="10">
    <v-card-text class="position-relative current-events__container">
      <div class="d-flex justify-flex-start d-block align-center">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">
            Evènements en cours ( {{ events.length }} )
          </h5>
        </div>
      </div>
      <div>
        <div class="current-events__cards" v-if="events.length > 0">
          <div
            v-for="event in paginatedEvents"
            class="current-events__card"
            :key="event.uuid"
            @mouseenter="hoveredEvent = event.uuid"
            @mouseleave="hoveredEvent = null"
          >
            <div>
              <h4>{{ event.name }}</h4>
              <h5>{{ event.date }}</h5>
            </div>
            <v-btn
              v-if="hoveredEvent === event.uuid"
              color="primary"
              class="current-events__see-more"
              @click="openDialog(event.uuid)"
              >Voir plus de détail +
            </v-btn>
          </div>
          <EventDetails
            v-if="isEventDetailsOpen"
            :event="selectedEvent"
            v-model="isEventDetailsOpen"
            :answers="formAnswers"
          ></EventDetails>
        </div>
        <div v-else class="d-flex flex-column align-center justify-center mb-6">
          <Img :src="emptyCart" width="100" height="100" class="mb-6"></Img>
          <div class="text-center">
            <h4 class="text-h4 font-weight-semibold">Aucun évènement en cours</h4>
            <p class="text-subtitle-2">
              Vous n'avez pas encore d'évènement en cours. Créez un évènement pour commencer à
              recevoir des demandes de services.
            </p>
          </div>
        </div>
        <v-pagination
          v-if="totalPages > 1 && events.length > 0"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="12"
          class="mt-4 current-events__pagination"
          density="compact"
        ></v-pagination>
      </div>
    </v-card-text>
  </v-card>
  <Teleport to="body">
    <CustomerForm v-if="isDialogOpen" v-model:open-customer-form="isDialogOpen" />
  </Teleport>
</template>

<script setup lang="ts">
import emptyCart from '@/public/images/svgs/empty-cart.svg';
import { eventsStore } from '@/stores/events';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type { eventModel } from '~/models/events/eventModel';
import type { QuestionnaireClient } from '~/models/questionnaire/QuestionnaireClientModel';
import { useEventService } from '~/services/UseEventService';
import EventDetails from './EventDetails.vue';

const { events } = storeToRefs(eventsStore());
const { getEventsPerOrganisator, getEventsInstance } = useEventService();

const isEventDetailsOpen = ref(false);
const isDialogOpen = ref(false);
const hoveredEvent = ref<string | null>(null);
const currentPage = ref(1);
const itemsPerPage = 3;

const selectedEvent = ref<eventModel | null>(null);
const selectedEventUuid = ref('');
const formAnswers = ref<QuestionnaireClient | null>(null);

const totalPages = computed(() => {
  return Math.ceil(events.value.length / itemsPerPage);
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;

  const end = start + itemsPerPage;

  return events.value.slice(start, end);
});

const openDialog = async (eventUuid: string) => {
  const findSelectedEvent = events.value.find((event) => event.uuid === eventUuid) || null;
  selectedEvent.value = findSelectedEvent;
  selectedEventUuid.value = eventUuid;
  if (findSelectedEvent) {
    const responses = await getEventsInstance(findSelectedEvent.uuid);
    formAnswers.value = responses;
  }
  isEventDetailsOpen.value = true;
  // isDialogOpen.value = true;
};

const getServiceClass = (serviceUuid: string) => {
  switch (serviceUuid) {
    case '1007ecfb-913a-4e71-9252-1877c462d080':
      return 'food-truck-bg';
    case '6c4974e6-409b-4277-997a-7aa2cd919502':
      return 'domaine-bg';
    case '266da727-570b-4613-9ebf-02556a556080':
      return 'bg-light-yellow';
  }
};

onMounted(async () => {
  await getEventsPerOrganisator();
});
</script>

<style lang="scss" scoped>
.current-events {
  &__container {
    position: relative;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }
  &__cards {
    display: flex;
    gap: 2rem;
    width: 100%;
  }
  &__card {
    position: relative;
    width: 30%;
    padding: 1rem 1.5rem;
    display: flex;
    border-radius: 8px;
    align-items: center;
    justify-content: flex-start;
    min-height: 150px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    &.food-truck-bg {
      background: url('/public/images/backgrounds/test.jpg');
      background-size: cover;
      background-position: center;
    }
    &.domaine-bg {
      background: url('/public/images/backgrounds/school.png');
      background-size: cover;
      background-position: center;
    }
    &.bg-light-yellow {
      background: url('/public/images/backgrounds/profilebg.jpg');
      background-size: cover;
      background-position: center;
    }

    :deep(.v-pagination) {
      font-size: 0.5rem;
    }
    :deep(.v-pagination__item) {
      min-width: 32px;
      height: 32px;
      font-size: 0.75rem;
    }
  }
  &__see-more {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    opacity: 0;

    &:hover {
      transition: all 0.3s ease;
      opacity: 1;
    }
  }
}
</style>

<template>
  <v-card elevation="10" class="current-events">
    <v-card-text class="position-relative current-events__container pb-3">
      <div class="d-flex justify-flex-start d-block align-center">
        <div>
          <h5 class="v-card-title">Evènements en cours ( {{ events.length }} )</h5>
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
            <div style="width: 100%; height: 100%">
              <div
                :class="getServiceClass(event.name)"
                class="current-events__event-service-bg"
              ></div>
              <h4>{{ event.name }}</h4>
              <span v-if="Array.isArray(event.date)" style="font-size: 0.7rem"
                >{{ formatDate(event.date)[0] }} - {{ formatDate(event.date)[1] }}</span
              >
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
          v-model="currentPage"
          :length="totalPages"
          color="#5d79a4"
          :activeColor="'var(--manie-primary)'"
          :total-visible="12"
          class="mt-4"
          density="compact"
          size="small"
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
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
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
const itemsPerPage = 2;

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

const getDate = computed(() => {});

const getServiceClass = (serviceUuid: string) => {
  switch (serviceUuid) {
    case 'pacs':
      return 'food-truck-bg';
    case 'mariage':
      return 'domaine-bg';
    case 'baby_shower':
      return 'bg-light-yellow';
  }
};

onMounted(async () => {
  await getEventsPerOrganisator();
});
</script>

<style lang="scss" scoped>
.current-events {
  background: rgb(var(--v-theme-background));
  &__container {
    position: relative;
    height: 270px;
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
    width: 50%;
    padding: 0.5rem;
    display: flex;
    border-radius: 8px;
    align-items: center;
    background: rgb(var(--v-theme-containerBg));
    box-shadow: 5px 5px 15px 5px rgb(var(--v-theme-textSecondary));
    justify-content: flex-start;
    height: 120px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  &__event-service-bg {
    background: red;
    width: 100%;
    height: 80%;

    &.food-truck-bg {
      background: url('/public/images/backgrounds/test.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      height: 70%;
    }
    &.domaine-bg {
      background: url('/public/images/backgrounds/school.png');
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      height: 70%;
    }
    &.bg-light-yellow {
      background: url('/public/images/backgrounds/profilebg.jpg');
      background-size: cover;
      background-position: center;
      border-radius: 10px;
      height: 70%;
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

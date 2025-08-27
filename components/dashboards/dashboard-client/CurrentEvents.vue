<template>
  <v-card elevation="10" class="roun-">
    <v-card-text class="position-relative current-events__container">
      <div class="d-flex justify-space-between d-block align-center">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">Evènements en cours</h5>
        </div>
      </div>
      <div>
        <div class="mt-10 mb-sm-12 mb-8 current-events__cards" v-if="mockEventArray.length > 0">
          <div v-for="event in paginatedEvents" class="current-events__card">
            <div>
              <h4>{{ event.titre }}</h4>
              <h5>{{ event.description }}</h5>
              <v-chip
                :color="event.status === 'cancelled' ? 'error' : 'success'"
                variant="flat"
                size="small"
                >{{ event.status == 'cancelled' ? 'rejetée' : 'acceptée' }}</v-chip
              >
            </div>
            <v-btn color="primary" @click="openDialog(event.eventUuid)">Ajouter un secteur</v-btn>
          </div>
        </div>
        <v-pagination
          v-if="totalPages >= 1"
          v-model="currentPage"
          :length="totalPages"
          :total-visible="5"
          class="mt-4 current-events__pagination"
        ></v-pagination>
      </div>
    </v-card-text>
  </v-card>
  <Teleport to="body">
    <AddEventService v-if="isDialogOpen" v-model="selectedEvent" />
  </Teleport>
</template>

<script setup lang="ts">
import AddEventService from '@/components/dashboards/dashboard-client/AddEventService.vue';

const isDialogOpen = ref(false);
const currentPage = ref(1);
const itemsPerPage = 3;
const selectedEvent = ref();

const totalPages = computed(() => {
  return Math.ceil(mockEventArray.length / itemsPerPage);
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return mockEventArray.slice(start, end);
});

const mockEventArray = [
  {
    titre: 'event1',
    description: 'test1',
    photoEvent: '',
    eventUuid: '001',
    status: 'completed',
  },
  {
    titre: 'event2',
    description: 'test2',
    photoEvent: '',
    eventUuid: '002',
    status: 'completed',
  },
  {
    titre: 'event3',
    description: 'test3',
    photoEvent: '',
    eventUuid: '003',
    status: 'cancelled',
  },
  {
    titre: 'event4',
    description: 'test3',
    photoEvent: '',
    eventUuid: '004',
    status: 'cancelled',
  },
  {
    titre: 'event5',
    description: 'test3',
    photoEvent: '',
    eventUuid: '005',
    status: 'cancelled',
  },
];

const openDialog = (eventUuid: string) => {
  const findSelectedEvent = mockEventArray.find((event) => event.eventUuid === eventUuid);

  selectedEvent.value = findSelectedEvent;
  isDialogOpen.value = true;
};
</script>

<style lang="scss" scoped>
.current-events {
  &__container {
    position: relative;
    min-height: 300px;
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }
  &__card {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    :deep(.v-pagination) {
      font-size: 0.5rem;
    }
    :deep(.v-pagination__item) {
      min-width: 32px;
      height: 32px;
      font-size: 0.75rem;
    }
  }
}
</style>

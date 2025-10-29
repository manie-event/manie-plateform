<template>
  <VCard elevation="10" class="project-leap">
    <v-card-text class="d-flex flex-column justify-space-between pb-0">
      <div class="d-flex justify-flex-start d-block align-center mb-4">
        <h5 class="v-card-title">Progression de vos events</h5>
      </div>

      <!-- Liste paginée -->
      <div v-for="event in paginatedEvents" :key="event.uuid">
        <div class="progress-section">
          <div class="progress-info">
            <span>{{ event.eventTitleCroped }}</span>
            <span class="progress-percentage">{{ event.progressPercentage }}%</span>
          </div>

          <v-progress-linear
            :model-value="event.progressPercentage"
            :color="getProgressColor(event.progressPercentage)"
            height="5"
            rounded
          />
        </div>
      </div>

      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        color="#5d79a4"
        :active-color="'var(--manie-primary)'"
        :total-visible="12"
        density="compact"
        size="small"
      ></v-pagination>
    </v-card-text>
  </VCard>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const { events } = storeToRefs(eventsStore());
const { professionalResponseProposition } = storeToRefs(usePropositionStore());

const itemsPerPage = 2;
const currentPage = ref(1);

const getProgressColor = (percentage: number) => {
  if (percentage === 100) return 'success';
  if (percentage >= 50) return 'info';
  if (percentage > 0) return 'warning';
  return 'grey';
};

const eventsLeap = computed(() => {
  return events.value.map((event) => {
    const uniqueEventServices = event.eventServices.reduce((acc, current) => {
      const existing = acc.find((es) => es.serviceUuid === current.serviceUuid);
      if (!existing) acc.push(current);
      else if (current.status === 'completed' && existing.status !== 'completed') {
        const index = acc.indexOf(existing);
        acc[index] = current;
      }
      return acc;
    }, []);

    const eventTitleCroped = event.name.length > 20 ? event.name.slice(0, 20) + '...' : event.name;

    const totalServices = uniqueEventServices.length;
    const eventPropositions = professionalResponseProposition.value.filter(
      (p) => p.uuid === event.eventServices[0].eventUuid
    );

    const completedPropositions = eventPropositions.filter((p) => p.status === 'completed').length;

    const progressPercentage =
      totalServices > 0 ? Math.round((completedPropositions / totalServices) * 100) : 0;

    return {
      ...event,
      eventServices: uniqueEventServices,
      eventTitleCroped,
      totalServices,
      completedPropositions,
      progressPercentage,
    };
  });
});

const totalPages = computed(() => Math.ceil(eventsLeap.value.length / itemsPerPage));

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return eventsLeap.value.slice(start, end);
});
</script>

<style lang="scss" scoped>
.project-leap {
  background: rgb(var(--v-theme-background));
  min-height: 270px;
  padding-bottom: 1rem;
  display: flex;
  &__pagination {
    .v-pagination {
      button {
        background: transparent;
        color: #5d79a4;
        transition: all 0.3s ease;

        &.v-pagination__item--is-active {
          background-color: var(--manie-primary) !important;
          color: white !important;
          font-weight: 600;
        }
      }
    }
  }
}

.progress-section {
  margin: 16px 0;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: rgb(var(--v-theme-textPrimary));
}

.progress-percentage {
  font-weight: 600;
  color: rgb(var(--v-theme-textPrimary));
}

.text-caption {
  font-size: 13px;
  color: rgb(var(--v-theme-textPrimary));
}
</style>

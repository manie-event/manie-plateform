<template>
  <VCard elevation="10" class="project-leap">
    <v-card-text>
      <div class="d-flex justify-flex-start d-block align-center">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">Progression de vos events</h5>
        </div>
      </div>
      <div v-for="event in eventsLeap" :key="event.uuid">
        <!-- Barre de progression -->
        <div class="progress-section">
          <div class="progress-info">
            <span>{{ event.eventTitleCroped }}</span>
            <span class="progress-percentage">{{ event.progressPercentage }}%</span>
          </div>

          <div class="d-flex align-center justify-space-between">
            <v-progress-linear
              :model-value="event.progressPercentage"
              :color="getProgressColor(event.progressPercentage)"
              height="5"
              rounded
            />
          </div>
        </div>
      </div>
    </v-card-text>
  </VCard>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const { events } = storeToRefs(eventsStore());

const getProgressColor = (percentage) => {
  if (percentage === 100) return 'success';
  if (percentage >= 50) return 'info';
  if (percentage > 0) return 'warning';
  return 'grey';
};

const eventsLeap = computed(() => {
  return events.value.map((event) => {
    const uniqueEventServices = event.eventServices.reduce((acc, current) => {
      const existing = acc.find((es) => es.serviceUuid === current.serviceUuid);

      if (!existing) {
        acc.push(current);
      } else if (current.status === 'completed' && existing.status !== 'completed') {
        const index = acc.indexOf(existing);
        acc[index] = current;
      }

      return acc;
    }, []);

    // Calculer la progression
    const eventTitleCroped = event.name.length > 20 ? event.name.slice(0, 20) + '...' : event.name;
    const totalServices = uniqueEventServices.length;
    const completedServices = uniqueEventServices.filter((es) => es.status === 'completed').length;
    const progressPercentage =
      totalServices > 0 ? Math.round((completedServices / totalServices) * 100) : 0;

    return {
      ...event,
      eventServices: uniqueEventServices,
      eventTitleCroped,
      totalServices,
      completedServices,
      progressPercentage,
    };
  });
});
</script>

<style lang="scss" scoped>
.project-leap {
  height: 250px;
}

.event-card {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.progress-section {
  margin: 16px 0;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
}

.progress-percentage {
  font-weight: 600;
  color: #333;
}

.services-list {
  margin-top: 16px;
}

.service-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.service-item:last-child {
  border-bottom: none;
}
</style>

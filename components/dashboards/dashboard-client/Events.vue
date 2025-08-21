<template>
  <div>
    <button @click="openModal = !openModal" class="events__add-button">+</button>
    {{ openModal }}
    <!-- <client-questionnaire v-if="openModal" v-model:open-modal="openModal"></client-questionnaire> -->
    <DynamicFormDialog
      v-if="openModal"
      v-model:open-modal="openModal"
      :sections="sections"
      v-model="answers"
      @submit="onSubmit"
    />
  </div>
</template>

<script setup lang="ts">
import ClientQuestionnaire from '@/data/questionnaire-client.json';
import { ref } from 'vue';
import DynamicFormDialog from '~/components/questionnaires/DynamicFormDialog.vue';
import { useEventService } from '~/services/UseEventService';

const eventService = useEventService();

const organisatorUuid = localStorage.getItem('client-uuid');
const sections = ClientQuestionnaire.sections;
const openModal = ref(false);
const answers = ref<Record<string, any>>({});
const { createEventService } = eventService;

const onSubmit = (payload: Record<string, any>) => {
  const formatDateRange = (dates: string[] | string): string => {
    // Si c'est déjà une string (format range), on la retourne
    if (typeof dates === 'string') {
      console.log('ici');

      return dates;
    }

    // Si c'est un tableau de dates
    if (Array.isArray(dates)) {
      if (dates.length === 1) {
        console.log('dates.length === 1');

        // Un seul jour : [2025-08-30,2025-08-30]
        return `[${dates[0]},${dates[0]}]`;
      } else if (dates.length >= 2) {
        console.log('dates.length === 2');
        // Plusieurs jours : [premiere_date,derniere_date]
        return `[${dates[0]},${dates[dates.length - 1]}]`;
      }
    }
  };

  const newEvent = {
    ...payload,
    organisatorUuid: organisatorUuid,
  };
  createEventService(newEvent);
};
</script>
<style lang="scss" scoped>
.events {
  &__add-button {
    border: 2px solid black;
    padding: 3rem 5rem;
    border-radius: 5%;
    color: black;
    font-size: 2rem;
    font-weight: 900;
  }
}
</style>

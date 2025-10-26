<template>
  <v-card elevation="10">
    <v-card-text class="position-relative events__container">
      <div class="d-flex justify-space-between">
        <div class="mb-6">
          <h5 class="v-card-title">Créez un évenènement</h5>
        </div>
      </div>

      <button @click="openModal = !openModal" class="events__add-button">+</button>
      <!-- <client-questionnaire v-if="openModal" v-model:open-modal="openModal"></client-questionnaire> -->
      <!-- <DynamicFormDialog
        v-if="openModal"
        v-model:open-modal="openModal"
        :sections="sections"
        v-model="answers"
        @submit="onSubmit"
      /> -->
      <CustomerForm v-if="openModal" v-model:open-customer-form="openModal" />
    </v-card-text>
  </v-card>
  <!-- <Teleport to="body"> <PricingChoice v-model:isModalOpen="openModal" /> </Teleport> -->
</template>

<script setup lang="ts">
import ClientQuestionnaire from '@/data/questionnaire-client.json';
import { ref } from 'vue';
import CustomerForm from '~/components/questionnaires/CustomerForm.vue';
import type {
  EventCreatePayload,
  SectionSchema,
} from '~/models/questionnaire/QuestionnaireClientModel';
import { useEventService } from '~/services/UseEventService';

const eventService = useEventService();

const sections = ClientQuestionnaire.sections as SectionSchema[];
const openModal = ref(false);
const answers = ref<Record<string, any>>({});
const { createEventService } = eventService;

const onSubmit = (payload: EventCreatePayload) => {
  createEventService(payload);
};
</script>
<style lang="scss" scoped>
.events {
  &__container {
    position: relative;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }
  &__add-button {
    color: rgb(0, 0, 0);
    font-weight: 900;
    font-size: 1.2rem;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid black;
    transition: all 0.4s ease-in;
    &:hover {
      background: black;
      color: rgb(255, 255, 255);
      transition: all 0.4s ease-out;
    }
  }
}
</style>

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
const openModal = ref(false);

// Source des sections (depuis votre module)
const sections = ClientQuestionnaire.sections;
console.log(sections);

const answers = ref<Record<string, any>>({});
function onSubmit(payload: Record<string, any>) {
  console.log(payload, 'C FINI BAAATARD ? ');
}
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

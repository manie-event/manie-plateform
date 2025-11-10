<template>
  <div class="date-counter">
    <div class="pa-0">
      <div class="d-flex flex-column justify-content-center">
        <h5 class="text-subtitle-1 mb-2">Votre compte à rebours</h5>
        <div class="date-counter__container p-6">
          <p class="text-subtitle-1 text-grey100 mb-4 p-6">
            Il vous reste : <br />
            <span class="text-h5 font-weight-bold w-auto">{{ dateCounterValue }} jours</span> <br />
            avant le début de votre événement.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { dateCounter } from '@/utils/date-utils';

const props = defineProps<{
  eventDate: string;
}>();

const dateCounterValue = computed(() => dateCounter(props.eventDate));
</script>
<style lang="scss" scoped>
.date-counter {
  height: 230px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgb(var(--v-theme-darkBg));
  padding: 1rem;
  background: rgb(var(--v-theme-containerBg));

  &__container {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>

<template>
  <v-row class="d-flex">
    <v-col v-for="item in statistiques" :key="item.title" class="d-flex">
      <v-card elevation="10" color="primary">
        <v-card-text class="pl-5 pr-7">
          <img :src="item.shape" alt="shape" class="shape" />
          <Icon :icon="'solar:' + item.icon" width="30" height="30" class="mb-6" />
          <h5 class="text-h4 font-weight-semibold mb-2 text-white">
            {{ item.num
            }}<span
              class="text-subtitle-2 pl-1"
              :class="{
                'text-green-500': weeklyVariation.diff >= 0,
                'text-red-500': weeklyVariation.diff < 0,
              }"
              >{{ item.percent }}</span
            >
          </h5>
          <p class="text-subtitle-1 opacity-50 font-weight-medium">{{ item.title }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import shape2 from '/images/svgs/danger-shap.svg';
import shape1 from '/images/svgs/warning-shap.svg'; // Evenement sélectionnés All time

// Evenement sélectionnés All time
// Evenement signés all time
// CA all time

const { serviceEventProposition, professionalServices } = storeToRefs(usePropositionStore());
const { professionnalServices } = storeToRefs(useUserStore());

const totalSelectedEvent = computed(() => {
  // Pour chaque service, trouver les propositions d'événements associées
  const filteredPropositions = serviceEventProposition.value.filter((sep) =>
    professionalServices.value.some((ps) => ps.uuid === sep.professionalServiceUuid)
  );

  return filteredPropositions;
});

const totalEventSigned = computed(() => {
  return totalSelectedEvent.value.filter((tse) => tse.proposition.status === 'completed');
});

const getWeekNumber = (date: Date) => {
  const firstJan = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstJan.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstJan.getDay() + 1) / 7);
};

const countByWeek = computed(() => {
  const counts: Record<string, number> = {};
  for (const sep of serviceEventProposition.value) {
    const eventDate = new Date(sep.date[0]); // ou sep.createdAt
    const week = `${eventDate.getFullYear()}-W${getWeekNumber(eventDate)}`;
    counts[week] = (counts[week] || 0) + 1;
  }
  return counts;
});

const weekKeys = computed(() => Object.keys(countByWeek.value).sort());
const currentWeekKey = computed(() => weekKeys.value.at(-1));
const previousWeekKey = computed(() => weekKeys.value.at(-2));

const currentWeekCount = computed(() => countByWeek.value[currentWeekKey.value] || 0);
const previousWeekCount = computed(() => countByWeek.value[previousWeekKey.value] || 0);

const weeklyVariation = computed(() => {
  const diff = currentWeekCount.value - previousWeekCount.value;
  const percent = previousWeekCount.value ? ((diff / previousWeekCount.value) * 100).toFixed(1) : 0;
  return {
    diff,
    percent: `${diff >= 0 ? '+' : ''}${percent}%`,
  };
});

const statistiques = computed(() => [
  {
    num: totalSelectedEvent.value.length,
    title: 'Total Presta proposée(s)',
    icon: 'ruble-linear',
    percent: weeklyVariation.value.percent,
    shape: shape1,
  },
  {
    num: totalEventSigned.value.length,
    title: 'Total Presta signée(s)',
    icon: 'ruble-linear',
    percent: weeklyVariation.value.percent,
    shape: shape2,
  },
]);
</script>
<style scoped>
.shape {
  position: absolute;
  right: 0;
  top: 0px;
}
</style>

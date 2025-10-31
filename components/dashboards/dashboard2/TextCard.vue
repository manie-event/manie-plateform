<template>
  <v-row class="d-flex">
    <v-col v-for="item in statistiques" :key="item.title" class="d-flex">
      <v-card elevation="10" color="primary">
        <v-card-text class="pl-5 pr-7">
          <img :src="item.shape" alt="shape" class="shape" />
          <Icon :icon="'solar:' + item.icon" width="30" height="30" class="mb-6" />
          <h3 class="text-h3 font-weight-semibold mb-2 text-white">
            {{ item.num }}
            <span
              class="text-subtitle-2 pl-1"
              :class="{
                'text-green-500': item.diff >= 0,
                'text-red-500': item.diff < 0,
              }"
            >
              {{ item.percent }}
            </span>
          </h3>
          <p class="text-subtitle-1 opacity-50 font-weight-medium">{{ item.title }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const { serviceEventProposition, professionalServices } = storeToRefs(usePropositionStore());

// Fonction pour obtenir la clé mois-année (format: "2025-10")
const getMonthKey = (date: Date | string): string => {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};

// Filtrer les propositions associées aux services du professionnel
const totalSelectedEvent = computed(() => {
  return serviceEventProposition.value
    .filter((sep) =>
      professionalServices.value.some((ps) => ps.uuid === sep.professionalServiceUuid)
    )
    .filter((ps) => ps.proposition.professionalMessage);
});

// Filtrer les propositions signées (status = 'completed')
const totalEventSigned = computed(() => {
  return totalSelectedEvent.value.filter((sep) => sep.proposition?.status === 'completed');
});

// // Compter les propositions par mois (toutes les propositions)
// const countPropositionsByMonth = computed(() => {
//   const counts: Record<string, number> = {};

//   for (const sep of totalSelectedEvent.value) {
//     // Utiliser la première date du tableau
//     const eventDate = sep.date?.[0];
//     if (!eventDate) continue;

//     const monthKey = getMonthKey(eventDate);
//     counts[monthKey] = (counts[monthKey] || 0) + 1;
//   }

//   return counts;
// });

// // Compter les propositions SIGNÉES par mois
// const countSignedByMonth = computed(() => {
//   const counts: Record<string, number> = {};

//   for (const sep of totalEventSigned.value) {
//     const eventDate = sep.date?.[0];
//     if (!eventDate) continue;

//     const monthKey = getMonthKey(eventDate);
//     counts[monthKey] = (counts[monthKey] || 0) + 1;
//   }

//   return counts;
// });

// // Obtenir les clés de mois triées
// const monthKeys = computed(() => {
//   const allKeys = new Set([
//     ...Object.keys(countPropositionsByMonth.value),
//     ...Object.keys(countSignedByMonth.value),
//   ]);
//   return Array.from(allKeys).sort();
// });

// // Mois actuel et précédent
// const currentMonthKey = computed(() => monthKeys.value.at(-1) || '');
// const previousMonthKey = computed(() => monthKeys.value.at(-2) || '');

// // Statistiques pour les PROPOSITIONS
// const propositionsStats = computed(() => {
//   const currentCount = countPropositionsByMonth.value[currentMonthKey.value] || 0;
//   const previousCount = countPropositionsByMonth.value[previousMonthKey.value] || 0;
//   const diff = currentCount - previousCount;

//   let percent: string;
//   if (previousCount === 0 && currentCount > 0) {
//     // Si mois précédent = 0, on calcule +100% par unité ajoutée
//     percent = `+${currentCount * 100}%`;
//   } else if (previousCount === 0 && currentCount === 0) {
//     percent = '0%';
//   } else {
//     const percentValue = ((diff / previousCount) * 100).toFixed(1);
//     percent = `${diff >= 0 ? '+' : ''}${percentValue}%`;
//   }

//   return {
//     currentMonth: currentMonthKey.value,
//     previousMonth: previousMonthKey.value,
//     currentCount,
//     previousCount,
//     diff,
//     percent,
//     variation: diff >= 0 ? 'hausse' : 'baisse',
//   };
// });

// // Statistiques pour les propositions SIGNÉES
// const signedStats = computed(() => {
//   const currentCount = countSignedByMonth.value[currentMonthKey.value] || 0;
//   const previousCount = countSignedByMonth.value[previousMonthKey.value] || 0;
//   const diff = currentCount - previousCount;

//   let percent: string;
//   if (previousCount === 0 && currentCount > 0) {
//     // Si mois précédent = 0, on calcule +100% par unité ajoutée
//     percent = `+${currentCount * 100}%`;
//   } else if (previousCount === 0 && currentCount === 0) {
//     percent = '0%';
//   } else {
//     const percentValue = ((diff / previousCount) * 100).toFixed(1);
//     percent = `${diff >= 0 ? '+' : ''}${percentValue}%`;
//   }

//   return {
//     currentMonth: currentMonthKey.value,
//     previousMonth: previousMonthKey.value,
//     currentCount,
//     previousCount,
//     diff,
//     percent,
//     variation: diff >= 0 ? 'hausse' : 'baisse',
//   };
// });

// // Taux de conversion (signées / proposées)
// const conversionRate = computed(() => {
//   const currentProposed = countPropositionsByMonth.value[currentMonthKey.value] || 0;
//   const currentSigned = countSignedByMonth.value[currentMonthKey.value] || 0;
//   const previousProposed = countPropositionsByMonth.value[previousMonthKey.value] || 0;
//   const previousSigned = countSignedByMonth.value[previousMonthKey.value] || 0;

//   const currentRate = currentProposed ? ((currentSigned / currentProposed) * 100).toFixed(1) : '0';
//   const previousRate = previousProposed
//     ? ((previousSigned / previousProposed) * 100).toFixed(1)
//     : '0';

//   return {
//     currentRate: `${currentRate}%`,
//     previousRate: `${previousRate}%`,
//     diff: (parseFloat(currentRate) - parseFloat(previousRate)).toFixed(1),
//   };
// });

// Tableau de statistiques pour l'affichage
const statistiques = computed(() => [
  {
    num: totalSelectedEvent.value.length,
    title: 'Presta proposée(s)',
    icon: 'ruble-linear',
    // percent: totalSelectedEvent.value.percent,
    // diff: totalSelectedEvent.value.diff,
  },
  {
    num: totalEventSigned.value.length,
    title: 'Presta signée(s)',
    icon: 'ruble-linear',
    // percent: signedStats.value.percent,
    // diff: signedStats.value.diff,
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

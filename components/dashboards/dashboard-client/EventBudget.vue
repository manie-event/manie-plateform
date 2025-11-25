<template>
  <div elevation="10" class="event-budget">
    <div class="position-relative">
      <div class="d-flex justify-space-between d-block align-center event-budget__header">
        <div>
          <h5 class="text-subtitle-1 mb-1 font-weight-semibold">Votre gestion budget</h5>
        </div>
        <div class="d-flex justify-end align-center gap-6">
          <div class="text-right mr-6">
            <v-btn
              @click="openExpenseModal = true"
              style="background: rgb(var(--v-theme-acier)); color: white; text-decoration: none"
              >+</v-btn
            >
          </div>
          <div class="text-right">
            <v-btn
              @click="removeExpenseModal = true"
              color="error"
              variant="tonal"
              class="position-relative"
            >
              <Icon icon="solar:trash-bin-trash-line-duotone" width="18" height="18" />
            </v-btn>
          </div>
        </div>
      </div>
      <div class="chart-container relative my-6">
        <ClientOnly>
          <apexchart
            type="donut"
            class="paymentchart"
            height="110"
            :options="chartOptions"
            :series="chartOptions.series"
          />
        </ClientOnly>
      </div>
      <span class="event-budget__info">
        <i>{{ budgetSavings }}</i>
      </span>
    </div>
  </div>

  <v-dialog v-model="openExpenseModal" max-width="420" transition="dialog-bottom-transition">
    <v-card class="rounded-xl">
      <v-card-title class="text-h6 font-weight-bold py-4 px-6"> Nouvelle dépense </v-card-title>

      <v-card-text class="pt-6 pb-4 px-6">
        <p class="text-body-2 mb-4 text-medium-emphasis">
          Ajoutez chaque dépense effectuée pour garder un œil précis sur votre budget.
        </p>

        <v-form validate-on="submit lazy" class="space-y-4">
          <v-text-field
            v-model="prestataire"
            label="Prestataire"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-account"
            color="primary"
          ></v-text-field>

          <v-text-field
            v-model="prix"
            label="Montant (€)"
            type="number"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-cash"
            color="primary"
          ></v-text-field>

          <v-btn
            class="mt-4 text-none"
            block
            color="#293b57"
            variant="flat"
            size="large"
            @click="addDepense"
          >
            Ajouter la dépense
          </v-btn>
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-end pb-4 pr-4">
        <v-btn variant="text" color="grey" @click="openExpenseModal = false"> Annuler </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="removeExpenseModal" max-width="420">
    <v-card class="rounded-xl">
      <v-card-title class="text-h6 font-weight-bold py-4 px-6">
        🗑️ Supprimer une dépense
      </v-card-title>

      <v-card-text class="pt-6 pb-4 px-6">
        <v-form class="space-y-4">
          <!-- on propose les labels existants pour éviter les typos -->
          <v-autocomplete
            v-model="removeExpenseTitle"
            :items="labels"
            label="Titre de la dépense"
            variant="outlined"
            density="comfortable"
            color="error"
            clearable
          />

          <v-btn
            class="mt-4 text-none"
            block
            color="error"
            variant="flat"
            size="large"
            :disabled="!removeExpenseTitle"
            @click="removeDepenseByTitle()"
          >
            Supprimer
          </v-btn>
        </v-form>
      </v-card-text>

      <v-card-actions class="justify-end pb-4 pr-4">
        <v-btn variant="text" color="grey" @click="removeExpenseModal = false">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, ref, watch } from 'vue';
import type { eventModel } from '~/models/events/eventModel';
/* Chart */
const props = defineProps<{
  currentEvent: eventModel;
}>();
const openExpenseModal = ref(false);
const removeExpenseModal = ref(false);
const removeExpenseTitle = ref<string | null>(null);
const prestataire = ref('');
const prix = ref('');

const series = ref<number[]>([]);
const labels = ref<string[]>([]);

const storageKey = computed(() => `event-expenses-${props.currentEvent.uuid}`);

const resetRemoveForm = () => {
  removeExpenseTitle.value = null;
  removeExpenseModal.value = false;
};

const removeDepenseByTitle = () => {
  const title = removeExpenseTitle.value;
  if (!title) return;

  const indexes = labels.value.map((lbl, i) => (lbl === title ? i : -1)).filter((i) => i !== -1);

  if (indexes.length === 0) {
    resetRemoveForm();
    return;
  }

  const idx = indexes[0];
  labels.value.splice(idx, 1);
  series.value.splice(idx, 1);

  // reset sélection en cours si besoin
  selectedIndex.value = null;
  resetRemoveForm();
};

const addDepense = () => {
  const expensePourcentage = Math.max(
    0,
    Math.min(100, (Number(prix.value) / props.currentEvent.budget) * 100)
  );

  if (selectedIndex.value !== null) {
    // 🧩 Cas modification
    series.value[selectedIndex.value] = expensePourcentage;
    labels.value[selectedIndex.value] = prestataire.value;
  } else {
    // 🆕 Cas ajout
    series.value.push(expensePourcentage);
    labels.value.push(prestataire.value);
  }

  // reset du form
  prestataire.value = '';
  prix.value = '';
  selectedIndex.value = null;
  openExpenseModal.value = false;
};

const budgetSavings = computed(() => {
  const totalExpense = series.value.reduce((acc, val) => acc + val, 0);
  const totalExpenseInEuro = props.currentEvent.budget * (totalExpense / 100);

  if (totalExpense > 100) {
    return `Vous avez dépassé le budget de ${Math.ceil(totalExpense - 100)} % soit ${Math.ceil(totalExpenseInEuro)}`;
  } else {
    return `Vous avez dépensé ${Math.ceil(totalExpense)} % de votre budget soit ${Math.ceil(totalExpenseInEuro)} €`;
  }
});

const selectedIndex = ref<number | null>(null);

const chartOptions = computed(() => {
  const hasData = series.value.some((v) => v > 0);
  const displaySeries = hasData ? series.value : [0.01];
  const displayLabels = hasData ? labels.value : ['Aucune dépense'];

  return {
    series: displaySeries,
    labels: displayLabels,
    chart: {
      height: 120,
      type: 'donut',
      fontFamily: `inherit`,
      foreColor: '#adb0bb',
      events: {
        dataPointSelection: function (_event: any, _chartContext: any, config: any) {
          // index du segment cliqué
          const index = config.dataPointIndex;
          if (index >= 0 && hasData) {
            selectedIndex.value = index;
            prestataire.value = labels.value[index];
            prix.value = ((series.value[index] / 100) * props.currentEvent.budget).toFixed(2);
            openExpenseModal.value = true;
          }
        },
      },
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: { size: '75%' },
      },
    },
    stroke: { show: false },
    dataLabels: { enabled: false },
    legend: { show: false },
    colors: hasData ? ['#5d79a4', '#e34632', '#f39454', '#fabe4a', '#293b57'] : ['#e0e0e0'],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
      enabled: hasData,
      y: {
        formatter: (value) => `${Math.round(value)}%`,
      },
    },
  };
});

watch(
  [series, labels],
  () => {
    const dataToSave = JSON.stringify({
      series: series.value,
      labels: labels.value,
    });
    localStorage.setItem(storageKey.value, dataToSave);
  },
  { deep: true }
);

watch(
  () => props.currentEvent.uuid,
  (newUuid) => {
    if (!newUuid) return;

    const saved = localStorage.getItem(`event-expenses-${newUuid}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      series.value = parsed.series || [];
      labels.value = parsed.labels || [];
    } else {
      series.value = [];
      labels.value = [];
    }
  },
  { immediate: true }
);
</script>
<style lang="scss" scoped>
.event-budget {
  height: 230px;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgb(var(--v-theme-darkBg));
  padding: 1rem;
  background: rgb(var(--v-theme-containerBg));

  &__info {
    font-size: 0.85rem;
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 960px) {
  .event-budget {
    height: unset;
    &__header {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

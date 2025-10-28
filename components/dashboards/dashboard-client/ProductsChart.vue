<template>
  <v-card elevation="10" class="roun-">
    <v-card-text class="position-relative">
      <div class="d-flex justify-space-between d-block align-center">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">Products</h5>
        </div>
        <div class="text-right">
          <v-btn @click="openExpenseModal = true" color="primary">+</v-btn>
        </div>
      </div>
      <div class="my-7">
        <ClientOnly
          ><apexchart
            type="donut"
            class="paymentchart"
            height="150"
            :options="chartOptions"
            :series="chartOptions.series"
          >
          </apexchart
        ></ClientOnly>
      </div>
      <p>
        <i>{{ budgetSavings }}</i>
      </p>
    </v-card-text>
  </v-card>

  <v-dialog v-model="openExpenseModal" max-width="420" transition="dialog-bottom-transition">
    <v-card class="rounded-xl">
      <v-card-title
        class="text-h6 font-weight-bold py-4 px-6"
        style="background: linear-gradient(90deg, #5d79a4, #293b57); color: white"
      >
        💸 Nouvelle dépense
      </v-card-title>

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
            color="primary"
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { eventModel } from '~/models/events/eventModel';
/* Chart */
const props = defineProps<{
  event: eventModel;
}>();
const openExpenseModal = ref(false);
const prestataire = ref('');
const prix = ref('');
// 🔥 Données dynamiques pour le graphe
const series = ref<number[]>([]);
const labels = ref<string[]>([]);

// Identifiant unique de stockage par event
const storageKey = computed(() => `event-expenses-${props.event.uuid}`);

// 🧠 Charger les données sauvegardées
onMounted(() => {
  const savedData = localStorage.getItem(storageKey.value);
  if (savedData) {
    const parsed = JSON.parse(savedData);
    series.value = parsed.series || [];
    labels.value = parsed.labels || [];
  }
});

// 🔥 Sauvegarde automatique à chaque modification
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

const addDepense = () => {
  const expensePourcentage = (Number(prix.value) / props.event.budget) * 100;

  // on met à jour les refs directement
  series.value.push(expensePourcentage);
  labels.value.push(prestataire.value);

  // reset du formulaire
  prestataire.value = '';
  prix.value = '';
  openExpenseModal.value = false;
};

const budgetSavings = computed(() => {
  const totalExpense = series.value.reduce((acc, val) => acc + val, 0);
  const totalExpenseInEuro = props.event.budget * (totalExpense / 100);
  console.log(totalExpense);

  if (totalExpense > 100) {
    return `Vous avez dépassé le budget de ${totalExpense - 100} % soit ${totalExpenseInEuro}`;
  } else {
    return `Vous avez dépensé ${totalExpense} % de votre budget soit ${totalExpenseInEuro} €`;
  }
});

// 🧠 Les options du graphique dépendent de series & labels
const chartOptions = computed(() => ({
  series: series.value,
  labels: labels.value,
  chart: {
    height: 170,
    type: 'donut',
    fontFamily: `inherit`,
    foreColor: '#adb0bb',
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      donut: {
        size: '75%',
      },
    },
  },
  stroke: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  colors: ['#5d79a4', '#e34632', '#f39454', '#fabe4a', '#293b57'],

  tooltip: {
    theme: 'dark',
    fillSeriesColor: false,
  },
}));
</script>

<script setup lang="ts">
import BaseEmptyState from '@/components/common/BaseEmptyState.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
const { setPropositions } = usePropositionStore();
const { propositionsSelected } = storeToRefs(usePropositionStore());

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'warning';
    case 'reviewing':
      return 'primary';
    case 'completed':
      return 'success';
    case 'cancelled':
      return 'error';
    default:
      return 'grey';
  }
};

const getStatusName = (status: string) => {
  switch (status) {
    case 'pending':
      return 'En attente';
    case 'reviewing':
      return 'En cours d’examen';
    case 'completed':
      return 'Accepté';
    case 'cancelled':
      return 'Refusé';
  }
};

const getDate = (date: string[]) => formatDate(date);

onMounted(() => {
  // setPropositions({
  //   serviceUuid: '0a4a35ef-f705-405f-972f-cfd143f69a71',
  //   keywordsUuid: [
  //     '4c188e62-61ea-49ef-8257-8e06c5d4988a',
  //     '44a6b945-edbc-4316-8a11-cf3e275dc20d',
  //     'e8453a9b-4912-428e-8433-5566d253cb3d',
  //     '9f9f76e3-ca45-4ac0-bab4-bdec9268b1b6',
  //   ],
  //   budget: 2500,
  //   location: 'auvergne-rhone-alpes',
  //   date: ['2025-09-01', '2025-10-06'],
  //   people: '50',
  //   name: 'r',
  //   theme: null,
  //   duration: null,
  //   organized_for: null,
  //   group_type: null,
  //   professionalServiceUuid: 'f5fc318b-c803-4aba-98d9-f39aedf8b512',
  //   proposition: {
  //     uuid: '0bd4bb88-e9dd-44a7-bb6b-38247217d835',
  //     status: 'pending',
  //     professionalMessage: 'test',
  //     tokens: 1,
  //   },
  // });
  console.log('propositionsSelected', propositionsSelected.value);
});
</script>
<template>
  <VCard elevation="10" class="mb-16">
    <v-card-text>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h5 class="text-h5 mb-1 font-weight-semibold">Vos propositions en cours</h5>
        </div>
      </div>
      <div class="month-table" v-if="propositionsSelected.length > 0">
        <v-table class="mt-5 mb-0">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Service vendu
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Date de la prestation
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Localisation
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap">
                  Status de la demande
                </th>
                <th class="text-subtitle-1 font-weight-semibold text-grey200 text-no-wrap"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in propositionsSelected" :key="item.id" class="month-item">
                <td>
                  <div class="d-flex align-center">
                    <v-avatar size="50">
                      <img :src="item.location" alt="user" width="50" />
                    </v-avatar>
                    <div class="mx-4">
                      <h4 class="text-subtitle-1 font-weight-bold text-no-wrap text-grey200">
                        {{ item.name }}
                      </h4>
                      <h6 class="text-subtitle-1 text-no-wrap font-weight-medium mt-1 text-grey200">
                        {{ item.people }}
                      </h6>
                    </div>
                  </div>
                </td>
                <td>
                  <h5 class="text-subtitle-1 font-weight-medium text-no-wrap text-grey200">
                    Du <b>{{ getDate(item.date)[0] }}</b> au <b>{{ getDate(item.date)[1] }}</b>
                  </h5>
                </td>
                <td>
                  <h4 class="text-subtitle-1 text-no-wrap font-weight-medium text-grey200">
                    {{ item.location.toUpperCase() }}
                  </h4>
                </td>
                <td>
                  <v-chip
                    :class="'text-subtitle-1 font-weight-medium bg-light'"
                    variant="outlined"
                    size="x-small"
                    :color="getStatusColor(item.proposition.status)"
                    >{{ getStatusName(item.proposition.status) }}</v-chip
                  >
                </td>
                <td>
                  <v-btn color="primary">voir plus+</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </div>
      <div v-else class="position-relative">
        <v-col cols="12" class="mt-6">
          <BaseEmptyState
            :style="{
              position: 'relative',
            }"
          >
            <template #image>
              <img :src="EmptyState" alt="Empty State" />
            </template>
            <template #description>
              <p class="text-subtitle-1">
                Veuillez vous positionner sur au moins une proposition pour accéder à cette section
              </p>
            </template>
          </BaseEmptyState>
        </v-col>
      </div>
    </v-card-text>
  </VCard>
</template>

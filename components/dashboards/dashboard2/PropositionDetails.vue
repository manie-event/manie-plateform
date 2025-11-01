<template>
  <v-dialog v-model="openPropositionDetail" max-width="800">
    <div>
      <v-card>
        <div class="d-flex flex-column proposition__card">
          <div :style="getBackgroundStyle(selectedProposition.name)" alt="" />
          <div class="d-flex">
            <v-card-text class="w-50">
              <p><b>Type d'évènement:</b> {{ selectedProposition.name }}</p>
              <p>
                <b>Type de prestation:</b>
                {{ getPropositionServiceValue(selectedProposition.professionalServiceUuid) }}
              </p>

              <p><b>Nombre de convives:</b> {{ selectedProposition.people }} personnes</p>
              <p><b>Dans quel département:</b> {{ selectedProposition.location }}</p>
              <p>
                <b>Du </b>{{ formatDate(selectedProposition.date)[0] }} <b>au</b>
                {{ formatDate(selectedProposition.date)[1] }}
              </p>
              <p><b>Le budget:</b> {{ selectedProposition.budget }}€</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                :style="{
                  backgroundColor: 'rgb(var(--v-theme-darkbg))',
                  color: 'rgb(var(--v-theme-background))',
                }"
                @click="openPropositionDetail = false"
                >Fermer</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </div>
  </v-dialog>
</template>
<script setup lang="ts">
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import { getEventBackground } from '~/utils/card-utils';

const props = defineProps<{
  selectedProposition: EventModelForProposition;
}>();

const { professionalServices } = storeToRefs(usePropositionStore());

const openPropositionDetail = defineModel('openPropositionDetail', { default: false });

const getBackgroundStyle = (eventName: string) => {
  const imageUrl = getEventBackground(eventName as any);
  console.log('Resolved image URL:', imageUrl);

  return {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '8px',
    width: '96%',
    margin: '15px',
    height: '700px',
  };
};

const getPropositionServiceValue = (serviceUuid: string) => {
  return professionalServices.value.find((service) => service.uuid === serviceUuid)?.name;
};
</script>
<style lang="scss" scoped>
.proposition {
  &__card {
    max-height: 500px;
  }
}
</style>

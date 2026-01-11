<template>
  <v-card elevation="10">
    <v-card-text class="position-relative pb-5" style="min-height: 208px">
      <h5 class="text-h6 mb-1 font-weight-semibold">
        {{
          professionalUser?.name
            ? capitalizeFirst(professionalUser?.name)
            : capitalizeFirst(proName!)
        }}, content de vous voir ici,
      </h5>
      <div class="text-subtitle-1 text-grey100 pb-1">Un coup d'oeil sur les annonces du jour ?</div>
      <v-btn
        color="rgb(var(--v-theme-darkbg))"
        style="color: rgb(var(--v-theme-background))"
        class="mt-4 mb-2 px-7"
        rounded="pill"
        size="large"
        @click="openMarketModal = true"
      >
        Découvrir les annonces
      </v-btn>
      <!-- <img :src="PhotoAModifier" class="bg-img-1 mt-sm-0 mt-sm-n10" /> -->
    </v-card-text>
  </v-card>
  <Teleport to="body">
    <ProfessionalMarketPlace
      v-model:open-proposition-pro="openMarketModal"
      :propositionFiltered="propositionFiltered"
    />
  </Teleport>
</template>
<script setup lang="ts">
import { capitalizeFirst } from '@/utils/text-utils';
import type { EventModelForProposition } from '~/models/events/eventModelForProposition';
import ProfessionalMarketPlace from './ProfessionalMarketPlace.vue';

const { professionalUser, proName } = storeToRefs(useProfilStore());
const { serviceEventProposition } = storeToRefs(usePropositionStore());

const openMarketModal = ref(false);
const propositionFiltered = ref<EventModelForProposition[]>([]);

const isPropositionStillAvailable = () => {
  propositionFiltered.value = serviceEventProposition.value
    .filter((proposition) => !proposition.proposition.professionalMessage)
    .filter((proposition) => isEventDone(proposition.date[0]));
  return propositionFiltered.value;
};

onMounted(async () => {
  isPropositionStillAvailable();
});
</script>

<style scoped>
.overlay-title {
  position: relative;
  z-index: 1;
}
.bg-img-1 {
  position: absolute;
  bottom: 0;
  right: -30px;
}
@media screen and (max-width: 600px) {
  .bg-img-1 {
    position: unset;
  }
}
</style>

<template>
  <v-card elevation="10" class="overflow-visible">
    <v-card-text class="position-relative pb-5">
      <h5 class="text-h5 mb-1 font-weight-semibold">
        {{ `${username ? username : professionalUser?.name}, content de vous voir ici,` }}
      </h5>
      <div class="text-subtitle-1 text-grey100 pb-1">Un coup d'oeil sur les annonces du jour ?</div>
      <v-btn
        color="primary"
        class="mt-4 mb-2 px-7"
        rounded="pill"
        size="large"
        @click="openMarketModal = true"
      >
        {{ openMarketModal }}
        visit now
      </v-btn>
    </v-card-text>
    <img src="/images/backgrounds/school.png" class="bg-img-1 mt-sm-0 mt-sm-n10" />
  </v-card>
  <Teleport to="body">
    <ProfessionalMarketPlace v-model:open-proposition-pro="openMarketModal" />
  </Teleport>
</template>
<script setup lang="ts">
import ProfessionalMarketPlace from '@/components/dashboards/dashboard2/ProfessionalMarketPlace.vue';
import { useEventServiceProposition } from '@/composables/event-service-propositions/UseEventServiceProposition';

const { user, professionalUser } = storeToRefs(useUserStore());
const { getServicePropositionForProfessional } = useEventServiceProposition();
const username = localStorage.getItem('username');

const openMarketModal = ref(false);

onMounted(async () => {
  getServicePropositionForProfessional();
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

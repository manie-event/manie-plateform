<script setup lang="ts">
import EventDashboardContainer from '@/components/dashboards/dashboard-client/EventDashboardContainer.vue';
import Event from '@/components/dashboards/dashboard-client/Events.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import BaseEmptyState from '~/components/common/BaseEmptyState.vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import { useProfessionalService } from '~/services/UseProfessionalService';
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore();
const { getClientProfil } = useClientProfil();
const { getProfessionalService } = useProfessionalService();
const { isProfileCreated } = userStore;
</script>

<template>
  <v-row class="dashboard-client" v-if="isProfileCreated">
    <v-row>
      <v-col cols="12">
        <Event />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <EventDashboardContainer />
      </v-col>
    </v-row>
  </v-row>

  <v-row v-else>
    <v-col cols="12">
      <BaseEmptyState>
        <template #image>
          <img :src="EmptyState" alt="Empty State" />
        </template>
        <template #description>
          <h2 class="text-h5">Bienvenue sur Manie</h2>
          <p class="text-subtitle-1">
            Veuillez compléter votre profil client pour accéder à toutes les fonctionnalités
          </p>
          <v-btn>
            <NuxtLink to="/apps/userprofile/two">Créer mon profil Client</NuxtLink>
          </v-btn>
        </template>
      </BaseEmptyState>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.dashboard-client {
  max-width: 1480px;
  position: relative;
  margin: 2rem auto;
  padding: 10px 15px;
}
</style>

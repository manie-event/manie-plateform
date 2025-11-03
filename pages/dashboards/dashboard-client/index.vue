<script setup lang="ts">
import CurrentEvents from '@/components/dashboards/dashboard-client/CurrentEvents.vue';
import Events from '@/components/dashboards/dashboard-client/Events.vue';
import ProjectLeap from '@/components/dashboards/dashboard-client/ProjectLeap.vue';
import PropositionsPresta from '@/components/dashboards/dashboard-client/PropositionsPresta.vue';
import EmptyState from '@/public/images/empty-state/profil-vide.png';
import { onMounted } from 'vue';
import BaseEmptyState from '~/components/common/BaseEmptyState.vue';
import { useClientProfil } from '~/composables/client-user/UseClientProfil';
import { useProfessionalService } from '~/services/UseProfessionalService';
import { useKeywordsStore } from '~/stores/keywordsStore';
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const { getClientProfil } = useClientProfil();
const { getProfessionalService } = useProfessionalService();
const { isProfileCreated } = userStore;

// ✅ Nouveau store unifié pour secteurs et mots-clés
const keywordsStore = useKeywordsStore();
const { getAllSectors, getKeywords } = keywordsStore;

onMounted(async () => {
  console.log('Dashboard mounted');
  console.log(isProfileCreated, 'ISPROFILECREATED');

  try {
    // Chargement des services et infos pro
    await getProfessionalService();

    // Chargement global des secteurs et mots-clés
    await Promise.all([getAllSectors(), getKeywords()]);
  } catch (error) {
    console.error('Erreur lors du chargement du dashboard:', error);
  }
});

watchEffect(() => {
  // on lit directement la valeur réactive
  if (isProfileCreated) {
    console.log('🟢 Profil créé, chargement des services…');

    // exécuter les appels asynchrones sans bloquer la réactivité
    (async () => {
      try {
        await getProfessionalService();
        await Promise.all([getAllSectors(), getKeywords()]);
      } catch (err) {
        console.error('Erreur lors du chargement des données du profil :', err);
      }
    })();
  } else {
    console.log('🔴 Profil non créé — affichage du empty state');
  }
});
</script>

<template>
  <v-card v-if="isProfileCreated">
    <v-row class="dashboard-client">
      <v-col cols="12">
        <v-row>
          <v-col cols="2">
            <Events />
          </v-col>
          <v-col cols="6">
            <div style="display: flex; flex-direction: column">
              <CurrentEvents />
            </div>
          </v-col>
          <v-col cols="4">
            <ProjectLeap />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12" lg="12">
        <PropositionsPresta />
      </v-col>
    </v-row>
  </v-card>

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
  max-width: 1280px;
  margin: 2rem auto;
  background-color: transparent;
  padding: 10px 15px;
}
</style>

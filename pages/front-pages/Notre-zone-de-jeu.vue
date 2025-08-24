<template>
  <div class="notre-histoire__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="notreTerrainDeJeu"
          alt=""
          class="notre-histoire__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="LogoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
    <div class="notre-histoire__descriptif">
      <h1>Notre Terrain De Jeu</h1>
      <h4>
        Nous mettons à l’honneur notre belle région Auvergne Rhône-Alpes et les prestataires qui y
        sont installés ! Un mariage au cœur des montagnes ou au bord d’un lac, un séjour en famille
        dans un domaine viticole, une fête champêtre en pleine nature ou une soirée en ville : tout
        est possible !
      </h4>

      <div class="notre-histoire__sous-titre">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(panel, index) in notreTerrain.departements"
            :key="index"
            :title="`${panel.titre} - ${panel.code}`"
            :text="panel.description"
          >
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import notreTerrain from '@/data/terrain-de-jeu.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import notreTerrainDeJeu from '@/public/images/side-picture/katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg';

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.notre-histoire {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__bg-image {
    position: relative;
  }
  &__descriptif {
    width: 50vw;
    padding: 4rem;
    h1 {
      margin-bottom: 1rem;
    }
  }
  &__sous-titre {
    margin-top: 50px;
    p {
      margin: 1rem 0;
    }
  }
}
.manie-logo {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 80px;
}
</style>

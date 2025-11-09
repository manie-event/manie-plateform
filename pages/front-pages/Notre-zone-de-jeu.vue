<template>
  <div class="notre-zone-de-jeu__container">
    <div>
      <img
        :src="notreTerrainDeJeu"
        alt=""
        class="notre-zone-de-jeu__bg-image"
        style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
      />
      <img :src="LogoManie" alt="" class="manie-logo" />
    </div>
    <div class="notre-zone-de-jeu__content">
      <h1>Notre Terrain de Jeu</h1>
      <h4>
        Nous mettons à l’honneur notre belle région Auvergne Rhône-Alpes et les prestataires qui y
        sont installés ! Un mariage au cœur des montagnes ou au bord d’un lac, un séjour en famille
        dans un domaine viticole, une fête champêtre en pleine nature ou une soirée en ville : tout
        est possible !
      </h4>
      <!-- Liste des départements -->
      <v-expansion-panels class="mt-6">
        <v-expansion-panel v-for="(panel, index) in notreTerrain.departements" :key="index">
          <v-expansion-panel-title> {{ panel.titre }} - {{ panel.code }} </v-expansion-panel-title>
          <v-expansion-panel-text> <div v-html="panel.description"></div> </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script setup lang="ts">
import notreTerrain from '@/data/terrain-de-jeu.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import notreTerrainDeJeu from '@/public/images/side-picture/ra-carte.png';

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.notre-zone-de-jeu {
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 90vw;
    margin: 0 auto;
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

@media screen and (max-width: 960px) {
  .notre-zone-de-jeu {
    &__container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      width: 90vw;
      margin: 0 auto;
    }
    &__bg-image {
      position: relative;
      display: none;
    }
    &__descriptif {
      width: 50vw;
      padding: 4rem;
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>

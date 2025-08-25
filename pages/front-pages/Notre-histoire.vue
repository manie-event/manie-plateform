<template>
  <div class="notre-histoire__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="notreHistoire"
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
      <h1>Notre Histoire</h1>
      <h3>
        Je m’appelle Léonore et j’ai toujours eu un faible pour les moments qui rassemblent. Les
        éclats de rire autour d’une table, l’odeur du plat familial, la petite émotion avant que
        tout commence…
      </h3>
      <div class="notre-histoire__sous-titre">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(panel, index) in histoireData"
            :key="index"
            :title="panel.titre"
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
import histoireData from '@/data/notre-histoire.json';
import LogoManie from '@/public/images/logos/logo-manie-bleu-ciel.svg';
import notreHistoire from '@/public/images/side-picture/notre-histoire.jpg';

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
  top: 20px;
  left: 20px;
  width: 150px;
}
</style>

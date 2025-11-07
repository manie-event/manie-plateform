<template>
  <div class="nos-engagements__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="nosEngagements"
          alt=""
          class="nos-engagements__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="LogoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
    <div class="nos-engagements__descriptif">
      <h1>Valeurs et engagements</h1>

      <v-expansion-panels class="mt-6">
        <v-expansion-panel v-for="(panel, index) in engagementsData" :key="index">
          <v-expansion-panel-title> {{ panel.titre }} </v-expansion-panel-title>
          <v-expansion-panel-text> <div v-html="panel.description"></div> </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import engagementsData from '@/data/nos-engagements.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import nosEngagements from '@/public/images/side-picture/kit-formerly-convertkit-tkXJoA_sn78-unsplash.jpg';
definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.nos-engagements {
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
  width: 90px;
}
</style>

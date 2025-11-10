<template>
  <div class="notre-histoire__container">
    <base-side-picture class="notre-histoire__bg-image-container">
      <template #bg-image>
        <img
          :src="notreHistoire"
          alt=""
          class="notre-histoire__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo> <LogoManie alt="" class="manie-logo" /> </template>
    </base-side-picture>
    <div class="notre-histoire__descriptif">
      <h1>NOTRE HISTOIRE ?</h1>
      <div class="notre-histoire__sous-titre">
        <v-expansion-panels>
          <v-expansion-panel v-for="(panel, index) in histoireData" :key="index">
            <v-expansion-panel-title> {{ panel.titre }} </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div v-html="panel.description"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <NuxtLink class="nuxt-link mt-6" to="/auth/login">Ca me plait !</NuxtLink>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

@media screen and (max-width: 960px) {
  .notre-histoire {
    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
    }
    &__bg-image-container {
      display: none;
    }
    &__descriptif {
      width: 100vw;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>

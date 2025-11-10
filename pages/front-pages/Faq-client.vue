<template>
  <v-row class="faq-client">
    <v-col cols="6" class="faq-client__image-container">
      <base-side-picture>
        <template #bg-image>
          <img
            :src="SidePicture"
            alt=""
            class="faq-client__bg-image"
            style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px; z-index: 3"
          />
        </template>
        <template #logo>
          <LogoManie alt="" class="manie-logo" />
        </template>
      </base-side-picture>
    </v-col>
    <v-col class="faq-client__descriptif">
      <h1>FAQ CLIENT</h1>

      <v-expansion-panels>
        <v-expansion-panel v-for="(panel, index) in FaqClient" :key="index">
          <v-expansion-panel-title>
            {{ panel.titre }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div v-html="panel.description"></div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <NuxtLink class="nuxt-link" to="/auth/login">Ca me plait !</NuxtLink>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import FaqClient from '@/data/faq-client.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import SidePicture from '@/public/images/side-picture/faq-client.jpg';

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.faq-client {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__bg-image {
    position: relative;
  }
  &__descriptif {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 49vw;
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
.nuxt-link {
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.manie-logo {
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 999;
}
@media screen and (max-width: 960px) {
  .faq-client {
    margin: 0 !important;
    display: flex;
    flex-direction: column;
    &__image-container {
      display: none;
    }
    &__descriptif {
      width: 100vw;
      padding: 1rem;
    }
  }
}
</style>

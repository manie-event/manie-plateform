<template>
  <div class="faq-client__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="SidePicture"
          alt=""
          class="faq-client__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="LogoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
    <div class="faq-client__descriptif">
      <h1>FAQ Client</h1>

      <div class="faq-client__sous-titre">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(panel, index) in FaqClient"
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
import FaqClient from '@/data/faq-client.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import SidePicture from '@/public/images/side-picture/tai-ngo-N79dTlEtq8A-unsplash.jpg';

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

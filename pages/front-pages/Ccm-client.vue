<template>
  <div class="ccm-client__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="SidePicture"
          alt=""
          class="ccm-client__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="LogoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
    <div class="ccm-client__descriptif">
      <h1>Comment ça fonctionne pour les Prestataire</h1>

      <div class="ccm-client__sous-titre">
        <v-expansion-panels>
          <v-expansion-panel v-for="(panel, index) in CcmClient" :key="index" :title="panel.titre">
            <v-expansion-panel-text>
              <div v-html="panel.description"></div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-btn color="primary" :href="'/auth/Register'" class="ccm-client__btn">Je me lance !</v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import CcmClient from '@/data/ccm-client.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import SidePicture from '@/public/images/side-picture/luka-sonado-77kzE4r-oM0-unsplash.jpg';

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.ccm-client {
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
    align-items: center;
    h1 {
      margin-bottom: 1rem;
    }
  }
  &__btn {
    width: 100%;
    margin-top: 2rem;
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

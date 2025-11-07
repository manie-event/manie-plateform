<template>
  <v-row>
    <v-col cols="6">
      <base-side-picture>
        <template #bg-image>
          <img
            :src="SidePicture"
            alt=""
            class="faq-prestataire__bg-image"
            style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
          />
        </template>
        <template #logo>
          <LogoManie alt="" class="manie-logo" />
        </template>
      </base-side-picture>
    </v-col>
    <v-col cols="6">
      <div class="faq-prestataire__descriptif">
        <h1>FAQ PRESTATAIRE</h1>

        <div class="faq-prestataire__sous-titre">
          <v-expansion-panels>
            <v-expansion-panel
              v-for="(panel, index) in FaqPresta"
              :key="index"
              :title="panel.titre"
            >
              <v-expansion-panel-text>
                <div v-html="panel.description"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import FaqPresta from '@/data/faq-prestataire.json';
import LogoManie from '@/public/images/logos/logo-manie-creme.svg';
import SidePicture from '@/public/images/side-picture/faq-presta.jpg';

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.faq-prestataire {
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
}
</style>

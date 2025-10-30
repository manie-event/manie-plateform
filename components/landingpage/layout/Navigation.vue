<script setup lang="ts">
import { demosMegamenu, FrontPageMenu } from '@/_mockApis/landingpage/lpPage';
import { ref } from 'vue';
// Create a hover state object keyed by unique identifiers
const hoverStates = ref<Record<string, boolean>>(
  demosMegamenu.reduce(
    (acc, demo) => {
      acc[demo.img] = false;
      return acc;
    },
    {} as Record<string, boolean>
  )
);

// Update hover state based on the unique key
const setHoverState = (key: string, value: boolean) => {
  hoverStates.value[key] = value;
};
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- mega menu DD -->
  <!-- ---------------------------------------------- -->
  <v-menu open-on-hover :close-on-content-click="false" class="position-relative">
    <template v-slot:activator="{ props }">
      <div class="d-flex align-center">
        <NuxtLink class="nuxt-link" v-bind="props">A propos </NuxtLink>
        <i class="ddIcon me-3 z-index-1 d-flex align-center"> </i>
      </div>
    </template>
    <v-sheet
      max-width="100%"
      width="1150"
      height="100%"
      elevation="10"
      rounded="md"
      class="pa-8 mx-auto mt-6"
    >
      <!-- <h5 class="text-h5">Different Front Pages</h5>
      <p class="text-subtitle-1 font-weight-medium textSecondary mt-1">Included with the package</p> -->
      <div class="v-row my-5 top-7">
        <v-col v-for="demo in FrontPageMenu.slice(0, 5)" :key="demo.img">
          <v-sheet class="text-center position-relative">
            <div class="overflow-hidden rounded-md border">
              <v-card
                class="mx-auto"
                rounded="0"
                @mouseenter="setHoverState(demo.img, true)"
                @mouseleave="setHoverState(demo.img, false)"
              >
                <img :src="demo.img" :alt="demo.img" class="w-100" />
                <v-overlay
                  :model-value="hoverStates[demo.img]"
                  class="align-center justify-center nav-links"
                  scrim="rgba(55, 114, 255, 0.5)"
                  contained
                >
                  <NuxtLink class="nuxt-link" size="small" rounded="pill" flat :href="demo.link"
                    >En savoir +</NuxtLink
                  >
                </v-overlay>
              </v-card>
            </div>
          </v-sheet>
          <p class="text-body-1 font-weight-medium text-center mt-1">
            {{ demo.name }}
          </p>
        </v-col>
      </div>
    </v-sheet>
  </v-menu>

  <NuxtLink class="nuxt-link" to="/front-pages/pricing">Formules</NuxtLink>
  <NuxtLink class="nuxt-link" to="/front-pages/Contact-us">Contact</NuxtLink>
</template>

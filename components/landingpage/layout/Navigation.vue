<template>
  <!-- Menu A propos -->
  <v-menu
    v-model="aboutMenu"
    :open-on-hover="!isMobile"
    :open-on-content-click="true"
    class="position-relative"
    offset-y
  >
    <template #activator="{ props }">
      <div class="d-flex align-center">
        <!-- ⚙️ En mobile : clic ouvre/ferme -->
        <NuxtLink class="nuxt-link" v-bind="props" @click.prevent="aboutMenu = !aboutMenu">
          À propos
        </NuxtLink>
        <i class="ddIcon me-3 z-index-1 d-flex align-center"></i>
      </div>
    </template>

    <v-sheet max-width="100%" width="1150" elevation="10" rounded="md" class="pa-8 mx-auto mt-6">
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
                <img
                  :src="demo.img"
                  :alt="demo.img"
                  class="w-100"
                  style="height: 170px; object-fit: cover"
                />
                <v-overlay
                  :model-value="hoverStates[demo.img]"
                  class="align-center justify-center nav-links"
                  scrim="rgba(55, 114, 255, 0.5)"
                  contained
                >
                  <NuxtLink class="nuxt-link" size="small" rounded="pill" flat :href="demo.link">
                    En savoir +
                  </NuxtLink>
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

  <!-- Liens restants -->
  <NuxtLink class="nuxt-link mr-lg-0" to="/front-pages/pricing">Formules</NuxtLink>
  <NuxtLink class="nuxt-link mr-lg-0" to="/front-pages/Contact-us">Contact</NuxtLink>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { demosMegamenu, FrontPageMenu } from '@/_mockApis/landingpage/lpPage';

const hoverStates = ref<Record<string, boolean>>(
  demosMegamenu.reduce(
    (acc, demo) => {
      acc[demo.img] = false;
      return acc;
    },
    {} as Record<string, boolean>
  )
);

// contrôle d’ouverture du menu
const aboutMenu = ref(false);
const isMobile = ref(window.innerWidth < 960);

const setHoverState = (key: string, value: boolean) => {
  hoverStates.value[key] = value;
};

const handleResize = () => (isMobile.value = window.innerWidth < 960);
onMounted(() => window.addEventListener('resize', handleResize));
onBeforeUnmount(() => window.removeEventListener('resize', handleResize));
</script>

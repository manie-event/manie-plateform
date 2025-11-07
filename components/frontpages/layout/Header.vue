<script setup lang="ts">
import Logo from '@/public/images/logos/logo-manie-bleu-ciel.svg';
import { useCustomizerStore } from '@/stores/customizer';
import { ref } from 'vue';
import Navigations from './Navigation.vue';
/*Mobile Sidebar*/
/*import tabler icons*/
const appsdrawer = ref(false);
const customizer = useCustomizerStore();
</script>
<template>
  <div>
    <div class="v-container">
      <!-- -----------------------------------------------
                    Start Header
                    ----------------------------------------------- -->
      <!-- Logo -->
      <div>
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>

      <!-- Desktop view Navigation -->
      <div class="navigation mx-auto d-lg-flex d-none">
        <Navigations />
      </div>
      <div class="d-flex ms-xl-0 ms-auto">
        <v-btn
          class="me-lg-0 me-3 d-md-flex d-none text-white px-6 transform-none custom-hover-primary bg-primary"
          rounded="pill"
          size="large"
          flat
          href="/auth/login"
          target="_blank"
          ><span class="text-white">Log in</span></v-btn
        >
        <v-btn variant="text" class="hidden-lg-and-up" icon @click.stop="appsdrawer = !appsdrawer">
          <Menu2Icon size="22" stroke-width="1.5" />
        </v-btn>
      </div>
      <!-- -----------------------------------------------
                    End Header
                    ----------------------------------------------- -->
    </div>

    <!----sidebar menu drawer start----->
    <v-navigation-drawer class="lp-drawer" v-model="appsdrawer" location="left" temporary>
      <Navigations />
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px !important;
}
</style>

<script setup lang="ts">
import LogoManie from '@/public/images/logos/logo-manie-bleu-ciel.svg';
import { useCustomizerStore } from '@/stores/customizer';
import { ref } from 'vue';
// import RtlLogo from '@/layouts/full/logo/RtlLogo.vue';
import Navigations from '@/components/landingpage/layout/Navigation.vue';
/*Mobile Sidebar*/
import MobileSidebar from '@/components/landingpage/layout/MobileSidebar.vue';
/*import tabler icons*/
import { Menu2Icon } from 'vue-tabler-icons';
const appsdrawer = ref(false);
const customizer = useCustomizerStore();

const whiteBgOnScroll = ref(false);
const handleScroll = () => {
  whiteBgOnScroll.value = window.scrollY > 80;
  console.log(whiteBgOnScroll.value);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div>
    <div>
      <!-- -----------------------------------------------
                            Start Header
                            ----------------------------------------------- -->
      <v-app-bar height="80" class="lp-header original-position position-relative" flat>
        <v-container class="maxWidth py-sm-4 py-0">
          <v-toolbar
            class="d-flex align-center"
            :class="whiteBgOnScroll ? 'header-scrolled' : 'original-position'"
          >
            <div>
              <Img :src="LogoManie" width="150" />
            </div>
            <!-- Desktop view Navigation -->
            <div class="navigation d-lg-flex d-none ga-3">
              <Navigations />
            </div>
            <!-- Login  -->
            <v-btn
              class="custom-hover-primary bg-primary d-lg-flex d-none px-8 align-center login-shadow"
              rounded="pill"
              to="/auth/login"
              ><span class="text-white">Se connecter</span></v-btn
            >
            <!-- Mobile Toggle Button -->
            <v-btn
              variant="text"
              class="hidden-lg-and-up"
              icon
              @click.stop="appsdrawer = !appsdrawer"
            >
              <Menu2Icon size="22" stroke-width="1.5" />
            </v-btn>
          </v-toolbar>
        </v-container>
      </v-app-bar>
      <!-- -----------------------------------------------
                            End Header
                            ----------------------------------------------- -->
    </div>

    <!----sidebar menu drawer start----->
    <v-navigation-drawer class="lp-drawer" v-model="appsdrawer" location="left" temporary>
      <MobileSidebar />
    </v-navigation-drawer>
  </div>
</template>
<style lang="scss" scoped>
.original-position {
  position: relative;
  margin: 10px 0;
  background: transparent;
  width: 100vw;
  z-index: 1000;
}
.header-scrolled {
  background-color: #ffffff !important;
  background-size: 100% 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>

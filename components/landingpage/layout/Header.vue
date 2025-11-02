<script setup lang="ts">
import LogoManie from '@/public/images/svgs/logo-manie-nav.svg';
import { ref } from 'vue';
// import RtlLogo from '@/layouts/full/logo/RtlLogo.vue';
import Navigations from '@/components/landingpage/layout/Navigation.vue';
/*import tabler icons*/

const appsdrawer = ref(false);
const { clientProfile, professionalUser, isProfileCreated } = storeToRefs(useUserStore());
</script>
<template>
  <div>
    <div class="original-position">
      <!-- -----------------------------------------------
                            Start Header
                            ----------------------------------------------- -->
      <div>
        <NuxtLink to="/">
          <LogoManie width="100" class="mt-3" />
        </NuxtLink>
      </div>
      <!-- Desktop view Navigation -->
      <div class="d-lg-flex d-none ga-3">
        <Navigations />
      </div>
      <!-- Login  -->
      <v-btn
        v-if="!isProfileCreated"
        class="custom-hover-primary header__btn d-lg-flex d-none px-8 align-center login-shadow"
        rounded="pill"
        to="/auth/login"
        ><span class="text-white">Se connecter</span></v-btn
      >
      <v-btn
        v-else-if="isProfileCreated && clientProfile"
        class="custom-hover-primary header__btn d-lg-flex d-none px-8 align-center login-shadow"
        rounded="pill"
        to="/dashboards/dashboard-client"
        ><span class="text-white">Mon tableau de bord</span></v-btn
      >
      <v-btn
        v-else-if="isProfileCreated && professionalUser"
        class="custom-hover-primary header__btn d-lg-flex d-none px-8 align-center login-shadow"
        rounded="pill"
        to="/dashboards/dashboard2"
        ><span class="text-white">Mon tableau de bord</span></v-btn
      >
      <!-- Mobile Toggle Button -->
      <v-btn variant="text" class="hidden-lg-and-up" icon @click.stop="appsdrawer = !appsdrawer">
        <Menu2Icon size="22" stroke-width="1.5" />
      </v-btn>
      <!-- -----------------------------------------------
                            End Header
                            ----------------------------------------------- -->
    </div>

    <!----sidebar menu drawer start----->
    <v-navigation-drawer v-model="appsdrawer" location="left" temporary>
      <MobileSidebar />
    </v-navigation-drawer>
  </div>
</template>
<style lang="scss" scoped>
.original-position {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-color);
  width: 100vw;
  z-index: 10;
  padding: 0 2vw;
}

.header__btn {
  background: var(--manie-primary);
}
</style>

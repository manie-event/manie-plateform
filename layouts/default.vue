<script setup lang="ts">
import { useCustomizerStore } from '@/stores/customizer';
// 🧠 Valeur réactive pour le titre
const title = ref('Manie');

// 🧰 Store Pinia (aucun souci, il est toujours dispo ici)
const customizer = useCustomizerStore();

// 🏷️ Gestion du head SEO
useHead({
  title: title.value,
  meta: [{ name: 'description', content: 'Manie - Facilite vos événements' }],
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - Manie Dashboard` : 'Manie - Facilite vos événements',
});
</script>

<template>
  <!-----RTL LAYOUT------->
  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <v-app :theme="customizer.actTheme" :class="customizer.actTheme">
      <!---Customizer location left side--->
      <ClientOnly>
        <!-- <LcFullVerticalSidebar v-if="!customizer.setHorizontalLayout" /> -->
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
        </div>
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
        </div>
        <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
      </ClientOnly>
      <v-main>
        <div class="rtl-lyt">
          <v-container fluid class="px-sm-5 px-4">
            <div class="">
              <div :class="customizer.boxed ? 'maxWidth' : ''">
                <NuxtPage />
                <v-btn
                  class="customizer-btn"
                  size="large"
                  icon
                  variant="flat"
                  color="primary"
                  @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)"
                >
                  <SettingsIcon />
                </v-btn>
              </div>
            </div>
          </v-container>
        </div>
      </v-main>
    </v-app>
  </v-locale-provider>

  <!-----LTR LAYOUT------->
  <v-locale-provider v-else>
    <v-app :theme="customizer.actTheme" :class="customizer.actTheme">
      <!---Customizer location right side--->
      <ClientOnly>
        <LcFullVerticalSidebar v-if="!customizer.setHorizontalLayout" />
        <div>
          <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
        </div>
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
        </div>
        <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
      </ClientOnly>
      <v-main>
        <div>
          <v-container class="dashboard-position">
            <div class="">
              <div :class="customizer.boxed ? 'maxWidth' : ''">
                <NuxtPage />
              </div>
            </div>
          </v-container>
        </div>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
<style lang="scss" scoped>
.dashboard-position {
  display: flex;
  width: 100vw;
  justify-content: center;
  top: -40px;
  position: relative;
  align-items: center;
}
</style>

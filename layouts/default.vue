<script setup lang="ts">
import { useCustomizerStore } from "@/stores/customizer";
import { pl, zhHans } from "vuetify/locale";
const customizer = useCustomizerStore();
const title = ref(
  "Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template"
);
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Admin Dashboard Template`
      : "Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template";
  },
});
</script>

<template>
  <!-----RTL LAYOUT------->
  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <v-app
      :theme="customizer.actTheme"
      :class="[
        customizer.actTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.setBorderCard ? 'cardBordered' : '',
      ]"
    >
      <!---Customizer location left side--->
      <ClientOnly>
        <v-navigation-drawer
          app
          temporary
          elevation="10"
          location="left"
          v-model="customizer.Customizer_drawer"
          width="320"
          class="left-customizer"
        >
          <LcFullCustomizer />
        </v-navigation-drawer>
        <LcFullVerticalSidebar v-if="!customizer.setHorizontalLayout" />
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
        </div>
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
        </div>
        <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
      </ClientOnly>
      <v-main>
        <div class="rtl-lyt mb-3 hr-layout">
          <v-container
            fluid
            class="page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
          >
            <div class="">
              <div :class="customizer.boxed ? 'maxWidth' : ''">
                <NuxtPage />
                <v-btn
                  class="customizer-btn"
                  size="large"
                  icon
                  variant="flat"
                  color="primary"
                  @click.stop="
                    customizer.SET_CUSTOMIZER_DRAWER(
                      !customizer.Customizer_drawer
                    )
                  "
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
    <v-app
      :theme="customizer.actTheme"
      :class="[
        customizer.actTheme,
        customizer.mini_sidebar ? 'mini-sidebar' : '',
        customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
        customizer.setBorderCard ? 'cardBordered' : '',
      ]"
    >
      <!---Customizer location right side--->
      <ClientOnly>
        <v-navigation-drawer
          app
          temporary
          elevation="10"
          location="right"
          v-model="customizer.Customizer_drawer"
          width="320"
        >
          <LcFullCustomizer />
        </v-navigation-drawer>
        <LcFullVerticalSidebar v-if="!customizer.setHorizontalLayout" />
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullVerticalHeader v-if="!customizer.setHorizontalLayout" />
        </div>
        <div :class="customizer.boxed ? 'maxWidth' : 'full-header'">
          <LcFullHorizontalHeader v-if="customizer.setHorizontalLayout" />
        </div>
        <LcFullHorizontalSidebar v-if="customizer.setHorizontalLayout" />
      </ClientOnly>
      <v-main>
        <div class="mb-3 hr-layout">
          <v-container
            fluid
            class="page-wrapper bg-background px-sm-5 px-4 pt-12 rounded-xl"
          >
            <div class="">
              <div :class="customizer.boxed ? 'maxWidth' : ''">
                <NuxtPage />
                <v-btn
                  class="customizer-btn"
                  size="large"
                  icon
                  variant="flat"
                  color="primary"
                  @click.stop="
                    customizer.SET_CUSTOMIZER_DRAWER(
                      !customizer.Customizer_drawer
                    )
                  "
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
</template>

<script setup lang="ts">
import { useCustomizerStore } from '@/stores/customizer';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { UserCategory } from '~/models/enums/userCategoryEnums';

const title = ref('Manie');

const customizer = useCustomizerStore();
const { getProfessionalProfileDetails } = useProfessionalProfile();
const { user } = storeToRefs(useUserStore());

useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Admin Dashboard Template`
      : 'Spikeadmin - Nuxt3 Typescript based Admin Dashboard Template';
  },
});

onMounted(async () => {
  if (user.value?.category === UserCategory.PRESTA) {
    await getProfessionalProfileDetails();
  }
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
        <div class="rtl-lyt hr-layout">
          <v-container fluid class="page-wrapper px-sm-5 px-4 rounded-xl">
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
          <v-container fluid class="page-wrapper px-sm-5 px-4 rounded-xl">
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

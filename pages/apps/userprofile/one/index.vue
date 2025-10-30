<script setup lang="ts">
// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBannerOne.vue';
import IntroCard from '@/components/apps/user-profile/profile-one/IntroCard.vue';
</script>

<template>
  <ProfileBanner />
  <div class="mx-sm-4">
    <v-row class="mt-4">
      <v-col cols="12" lg="4" md="4">
        <IntroCard />
      </v-col>
    </v-row>
  </div>
</template>

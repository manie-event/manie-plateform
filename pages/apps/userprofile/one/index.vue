<script setup lang="ts">
// components
import ProfileBanner from '@/components/apps/user-profile/ProfileBannerOne.vue';
import IntroCard from '@/components/apps/user-profile/profile-one/IntroCard.vue';
import TeamsCard from '@/components/apps/user-profile/profile-one/TeamsCard.vue';
</script>

<template>
  <ProfileBanner />
  <div class="mx-sm-4">
    <v-row class="mt-4">
      <v-col cols="12" lg="4" md="4">
        <IntroCard />
        <TeamsCard />
      </v-col>
      <!-- <v-col cols="12" lg="8" md="8">
        <NumberCards />
        <AddPost />
        <PostListing />
      </v-col> -->
    </v-row>
  </div>
</template>

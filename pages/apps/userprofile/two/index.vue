<script setup lang="ts">
// components
import IntroCard from '@/components/apps/user-profile/IntroCard.vue';
import PhotosCard from '@/components/apps/user-profile/PhotosCard.vue';
import PostListing from '@/components/apps/user-profile/PostListing.vue';
import ProfileBanner from '@/components/apps/user-profile/ProfileBanner.vue';
</script>

<template>
  <ProfileBanner />
  <v-row class="mt-4">
    <v-col cols="12" lg="4" md="4">
      <IntroCard />
      <PhotosCard />
    </v-col>
    <v-col cols="12" lg="8" md="8">
      <AddPost />
      <PostListing />
    </v-col>
  </v-row>
</template>

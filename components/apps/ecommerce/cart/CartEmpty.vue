<script setup lang="ts">
// assets
import imageEmpty from '@/public/images/backgrounds/flutter.png';
//import imageDarkEmpty from '/images/e-commerce/empty-dark.svg';
</script>

<template>
  <v-row class="justify-center">
    <v-col class="text-center" lg="6">
      <v-img :src="imageEmpty" alt="cover" width="300px" class="mx-auto mt-5 mb-5" />
      <h5 class="text-h5">Vous n'avez pas d'achat en cours</h5>
    </v-col>
  </v-row>
</template>

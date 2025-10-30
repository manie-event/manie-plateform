<script setup lang="ts">
import {
  default as img1,
  default as img2,
  default as img3,
  default as img4,
  default as img5,
} from '@/public/images/backgrounds/flutter.png';
import { ref } from 'vue';

import {
  default as img10,
  default as img11,
  default as img12,
  default as img13,
  default as img14,
  default as img15,
  default as img6,
  default as img7,
  default as img8,
  default as img9,
} from '@/public/images/backgrounds/flutter.png';

const tab = ref(null);
const tab1 = ref([
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img1 },
]);
const tab2 = ref([
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
  { img: img10 },
  { img: img11 },
]);
const tab3 = ref([
  { img: img12 },
  { img: img13 },
  { img: img14 },
  { img: img10 },
  { img: img15 },
  { img: img11 },
]);
</script>
<template>
  <v-card elevation="0">
    <v-tabs v-model="tab" color="primary" align-tabs="end">
      <v-tab value="1">Landscape</v-tab>
      <v-tab value="2">Products</v-tab>
      <v-tab value="3">Abstract</v-tab>
    </v-tabs>

    <v-card-text class="rounded-md pa-0 mt-6">
      <v-window v-model="tab">
        <v-window-item value="1">
          <v-row>
            <v-col v-for="item in tab1" :key="item.img" cols="12" md="4" sm="6">
              <v-img :src="item.img" alt="tab" cover class="w-100" height="250"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="2">
          <v-row>
            <v-col v-for="item in tab2" :key="item.img" cols="12" md="4" sm="6">
              <v-img :src="item.img" alt="tab" cover class="w-100" height="250"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="3">
          <v-row>
            <v-col v-for="item in tab3" :key="item.img" cols="12" md="4" sm="6">
              <v-img :src="item.img" alt="tab" cover class="w-100" height="250"></v-img>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

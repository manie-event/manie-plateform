<script setup lang="ts">
import { ref } from 'vue';
import img1 from '/images/blog/blog-img1.jpg';
import img2 from '/images/blog/blog-img2.jpg';
import img3 from '/images/blog/blog-img3.jpg';
import img4 from '/images/blog/blog-img4.jpg';
import img5 from '/images/blog/blog-img5.jpg';

import img6 from '/images/products/s3.jpg';
import img7 from '/images/products/s4.jpg';
import img8 from '/images/products/s5.jpg';
import img9 from '/images/products/s6.jpg';
import img10 from '/images/products/s7.jpg';
import img11 from '/images/products/s8.jpg';
import img12 from '/images/products/s9.jpg';
import img13 from '/images/products/s10.jpg';
import img14 from '/images/products/s11.jpg';
import img15 from '/images/products/s12.jpg';

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
    <v-tabs v-model="tab" color="primary" align-tabs="center">
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

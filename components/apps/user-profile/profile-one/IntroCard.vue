<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="10" class="bg-surface">
        <v-card-item>
          <div class="d-flex">
            <div>
              <h4 class="text-h5">A mon propos</h4>
              <p class="my-5 text-subtitle-1 lh-md font-weight-medium">
                {{ professionalUser?.name }}
              </p>
            </div>
            <v-divider class="mb-4"></v-divider>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useProfilStore } from '~/stores/profilStore';
const { professionalUser } = storeToRefs(useProfilStore());
</script>
<style lang="scss" scoped>
v-card-item {
  display: flex;
}
</style>

<template>
  <v-dialog v-model="professionalProfile" max-width="600">
    <v-card max-width="600">
      <v-card-text>
        <div>
          <Img :src="props.pprofile.picture" height="200" class="pp-couverture"></Img>
        </div>
        {{ props.pprofile }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="professionalProfile = false">Fermer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import type { ProfessionalProfile } from '~/models/user/UserModel';

const props = defineProps<{
  pprofile: ProfessionalProfile;
}>();
const professionalProfile = defineModel<boolean>('professionalProfile', { default: false });
</script>
<style lang="scss" scoped>
.pp {
  &-couverture {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 16px;
  }
}
</style>

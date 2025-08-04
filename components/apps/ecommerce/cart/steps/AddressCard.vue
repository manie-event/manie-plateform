<script setup lang="ts">
const props = defineProps({
  nom: String,
  prenom: String,
  adresse: String,
  codePostal: String,
  ville: String,
  pays: String,
});

const fullName = computed(() => {
  return `${props.prenom} ${props.nom}`;
});
</script>
<template>
  <v-card variant="outlined">
    <v-card-text>
      <div class="d-flex align-center gap-2">
        <h6 class="text-h6">{{ fullName }}</h6>
      </div>
      <div class="mt-4 mb-6 text-body1">
        <p class="text-subtitle-2 lh-md">{{ adresse }}, {{ ville }}, {{ pays }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

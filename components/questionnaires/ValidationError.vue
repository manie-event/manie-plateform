<template>
  <div v-if="errors.length" class="mt-3">
    <v-alert type="error" variant="tonal" density="comfortable">
      <div class="text-body-2">Merci de compléter les champs requis:</div>
      <ul class="mt-2 mb-0 pl-4">
        <li v-for="err in errors" :key="err">{{ err }}</li>
      </ul>
    </v-alert>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  errors: string[];
}>();
</script>

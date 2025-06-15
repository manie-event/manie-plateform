<script setup lang="ts">
import ClientTabs from '@/components/frontpages/Homepage/ClientTabs.vue';
import ProfessionnalTabs from '@/components/frontpages/Homepage/ProfessionalTabs.vue';
import { ref } from 'vue';

const isParticulier = ref(true);
</script>

<template>
  <div class="pt-16 mt-16">
    <v-card class="user-type-switch pa-2 mb-6">
      <v-btn
        :class="{
          'active-particulier': isParticulier,
          'inactive-btn': !isParticulier,
        }"
        @click="isParticulier = true"
        rounded="pill"
        variant="flat"
        size="medium"
        class="px-6 py-3 transition-btn"
      >
        <v-icon start size="16" class="mr-3">mdi-account</v-icon>
        Je suis un particulier
      </v-btn>
      <v-btn
        :class="{
          'active-professionnel': !isParticulier,
          'inactive-btn': isParticulier,
        }"
        @click="isParticulier = false"
        rounded="pill"
        variant="flat"
        size="medium"
        class="px-6 py-3 transition-btn"
      >
        <v-icon start size="16" class="mr-3">mdi-briefcase</v-icon>
        Je suis un professionnel
      </v-btn>
    </v-card>

    <ClientTabs v-if="isParticulier" />
    <ProfessionnalTabs v-else />
  </div>
</template>

<style lang="scss" scoped>
.user-type-switch {
  display: flex;
  gap: 16px;
  width: fit-content;
  margin: 0 auto;
  font-size: 1rem;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.transition-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  min-width: 180px;
}

.active-particulier {
  font-size: 0.8rem;
  background: linear-gradient(135deg, #1976d2, #2196f3) !important;
  color: white !important;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4) !important;

  .v-icon {
    color: white !important;
  }
}

.active-professionnel {
  font-size: 0.8rem;
  background: linear-gradient(135deg, #388e3c, #4caf50) !important;
  color: white !important;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(56, 142, 60, 0.4) !important;

  .v-icon {
    color: white !important;
  }
}

.inactive-btn {
  font-size: 0.8rem;
  background: transparent !important;
  color: rgb(var(--v-theme-on-surface)) !important;
  opacity: 0.7;

  &:hover {
    background: rgba(var(--v-theme-on-surface), 0.04) !important;
    opacity: 1;
  }
}

.transition-colors {
  transition: color 0.3s ease;
}

.segmented-toggle {
  width: 100%;

  .v-btn {
    flex: 1;
  }
}

// Animation au survol
.v-btn:hover {
  transform: translateY(-1px);
}

.active-particulier:hover,
.active-professionnel:hover {
  transform: scale(1.05) translateY(-1px);
}
</style>

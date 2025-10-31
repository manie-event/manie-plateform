<template>
  <v-dialog class="modal-dialog" v-model="model" :fullscreen="fullscreen" :transition="transition">
    <v-card class="modal-card">
      <!-- Slot titre -->
      <v-card-title v-if="$slots.title" class="modal-title">
        <slot name="title" />
      </v-card-title>

      <!-- Slot contenu -->
      <v-card-text class="modal-content">
        <slot name="content" />
      </v-card-text>

      <!-- Slot actions -->
      <v-card-actions v-if="$slots.actions" class="modal-actions">
        <slot name="actions" />
      </v-card-actions>

      <!-- Bouton de fermeture -->
      <v-btn class="modal-close-button" @click="model = false">
        <Icon
          icon="ci:close-sm"
          width="24"
          height="24"
          color="rgb(var(--v-theme-background))"
        ></Icon>
      </v-btn>
    </v-card>
  </v-dialog>

  <v-overlay v-if="showOverlay" :value="model" class="modal-overlay">
    <div class="overlay-content">
      <slot name="overlay-content" />
    </div>
  </v-overlay>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const model = defineModel<boolean>();

const props = withDefaults(
  defineProps<{
    fullscreen?: boolean;
    transition?: string;
    showOverlay?: boolean;
    showCloseButton?: boolean;
  }>(),
  {
    fullscreen: false,
    transition: 'dialog-bottom-transition',
    showOverlay: true,
    showCloseButton: true,
  }
);
</script>

<style scoped lang="scss">
.modal-dialog {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 50%;
  max-width: 1280px;
  height: 90%;
}
.modal-close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 45px;
  height: 45px;
  border-radius: 15px;
  z-index: 999;
  background: rgb(var(--v-theme-darkbg));
}
</style>

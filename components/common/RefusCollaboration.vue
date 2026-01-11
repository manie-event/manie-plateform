<template>
  <v-dialog v-model="openRefusModal" max-width="800">
    <v-card max-width="800" class="pa-12">
      <header>
        <slot name="title"></slot>
      </header>
      <main>
        <slot name="text"></slot>
      </main>
      <footer>
        <slot name="actions"></slot>
      </footer>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
const openRefusModal = defineModel<boolean>('openRefusModal', { default: false });
</script>

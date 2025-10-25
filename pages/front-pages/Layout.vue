<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
</script>
<template>
  <div class="front-wraper">
    <!-- <AnnounceBar /> -->
    <!-- <Header /> -->
    <main>
      <slot></slot>
      <!-- This slot will be replaced with page-specific content -->
    </main>
  </div>
</template>

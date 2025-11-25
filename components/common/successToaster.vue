<template>
  <TransitionGroup name="fade" tag="div" class="alerts-wrapper" v-if="sucessToaster">
    <v-alert class="success-card" :text="sucessToaster">
      <div class="progress-bar" />
    </v-alert>
  </TransitionGroup>
</template>
<script setup lang="ts">
const { sucessToaster } = useToaster();
</script>
<style>
.alerts-wrapper {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.success-card {
  background: rgb(var(--v-theme-success));
  color: rgb(var(--v-theme-containerBg));
}

.alert-card {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: rgb(255, 255, 255);
  animation: progressShrink 5s linear forwards;
}

@keyframes progressShrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

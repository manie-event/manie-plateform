<template>
  <v-dialog v-model="isOpen" max-width="800px" persistent>
    <v-card max-width="800px">
      <v-card-title class="d-flex justify-space-between align-center pa-3">
        <span></span>
        <v-btn icon variant="text" @click="closeModal">
          <Icon icon="mdi:close" />
        </v-btn>
      </v-card-title>

      <v-card-text>
        <div class="cropper-wrapper">
          <Cropper
            ref="cropperRef"
            :src="imageSrc"
            :stencil-props="{
              aspectRatio: 16 / 9,
            }"
            class="cropper"
          />
        </div>

        <div class="mt-4 d-flex align-center gap-2">
          <Icon icon="mdi:information-outline" class="text-primary" />
          <span class="text-caption"> Glissez l'image pour ajuster la position verticale </span>
        </div>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-spacer />
        <v-btn variant="outlined" @click="closeModal"> Annuler </v-btn>
        <v-btn
          style="background-color: rgb(var(--v-theme-darkbg))"
          class="text-white"
          @click="saveCroppedImage"
          :loading="isSaving"
        >
          Sauvegarder
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref, watch } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

const props = defineProps<{
  modelValue: boolean;
  imageSrc: string | null;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  save: [blob: Blob];
}>();

const isOpen = ref(props.modelValue);
const cropperRef = ref<InstanceType<typeof Cropper> | null>(null);
const isSaving = ref(false);

watch(
  () => props.modelValue,
  (newVal) => {
    isOpen.value = newVal;
  }
);

watch(isOpen, (newVal) => {
  emit('update:modelValue', newVal);
});

const closeModal = () => {
  isOpen.value = false;
};

const saveCroppedImage = async () => {
  if (!cropperRef.value) return;

  isSaving.value = true;
  try {
    const { canvas } = cropperRef.value.getResult();

    // Convertir le canvas en blob
    if (canvas) {
      canvas.toBlob(
        (blob: Blob | null) => {
          if (blob) {
            emit('save', blob);
            closeModal();
          }
        },
        'image/jpeg',
        0.9
      );
    }
  } catch (error) {
    console.error('Erreur lors du recadrage:', error);
  } finally {
    isSaving.value = false;
  }
};
</script>

<style scoped>
.cropper-wrapper {
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
}

.cropper {
  height: 100%;
  width: 100%;
}
</style>

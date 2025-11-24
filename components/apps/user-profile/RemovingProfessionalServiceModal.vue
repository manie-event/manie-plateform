<template>
  <v-dialog v-model="openServiceModal" max-width="600">
    <v-card max-width="600" class="pa-4">
      <v-card-text class="d-flex flex-column justify-center align-center gap-4">
        <h3 class="h6">Êtes-vous vraiment sûr de vouloir supprimer ce service ?</h3>
        <v-row class="d-flex justify-md-space-between gap-2">
          <v-cols col="12" md="5">
            <v-btn
              @click="openServiceModal = false"
              class="w-100"
              style="
                border: 1px solid rgb(var(--v-theme-darkbg));
                color: rgb(var(--v-theme-darkbg));
              "
              >J'ai changé d'avis</v-btn
            >
          </v-cols>
          <v-cols col="12" md="5">
            <v-btn
              @click="confirmDelete"
              class="text-white w-100"
              style="background: rgb(var(--v-theme-darkbg))"
              >Je confirme</v-btn
            >
          </v-cols>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';

const props = defineProps<{
  serviceUuid: string;
}>();

const emit = defineEmits<{
  (e: 'close-modal-on-removing-service'): void;
}>();

const openServiceModal = defineModel<boolean>('openServiceModal', { default: false });

const { removeServiceFromProfessionalProfile } = useProfessionalProfile();

const confirmDelete = async () => {
  await removeServiceFromProfessionalProfile(props.serviceUuid);
  openServiceModal.value = false;
  emit('close-modal-on-removing-service');
};
</script>

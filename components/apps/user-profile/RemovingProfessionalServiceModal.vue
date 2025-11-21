<template>
  <v-dialog v-model="openServiceModal">
    <v-card>
      <v-card-text>
        <h3 class="h6">Êtes-vous vraiment sûr de vouloir supprimer ce service ?</h3>
        <div>
          <v-btn
            @click="openServiceModal = false"
            style="border: 1px solid rgb(var(--v-theme-darkbg)); color: rgb(var(--v-theme-darkbg))"
            >J'ai changé d'avis</v-btn
          >
          <v-btn
            @click="confirmDelete"
            class="text-white"
            style="background: rgb(var(--v-theme-darkbg))"
            >Je confirme</v-btn
          >
        </div>
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
  console.log(props.serviceUuid, 'props.serviceUuid');

  await removeServiceFromProfessionalProfile(props.serviceUuid);
  openServiceModal.value = false;
  emit('close-modal-on-removing-service');
};
</script>

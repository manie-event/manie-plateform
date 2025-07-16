<template>
  <BaseModal v-model="openModal" fullscreen transition="dialog-bottom-transition">
    <template #title>Modifier le profil</template>

    <template #content>
      <v-text-field label="Nom" v-model="profile.name" />
      <v-textarea label="Votre inspiration du moment" v-model="profile.phraseInspirante" />
      <v-textarea label="Votre presentation" v-model="profile.phraseDePresentation" />
      <v-text-field label="votre téléphone" v-model="profile.phone" />
      <v-text-field label="Votre email" v-model="profile.email" />
      <v-text-field label="Votre lieu de rencontre" v-model="profile.adresse" />
      <v-text-field label="Votre background (études, diplômes...)" v-model="profile.diplome" />
      <v-text-field
        label="Dans quelle.s langue.s souhaitez vous communiquer ?"
        v-model="profile.langues"
      />
    </template>

    <template #actions>
      <v-spacer />
      <v-btn @click="openModal = false">Annuler</v-btn>
      <v-btn color="primary" @click="saveProfile()">Enregistrer</v-btn>
    </template>
  </BaseModal>
</template>
<script setup lang="ts">
import BaseModal from '@/components/common/BaseModal.vue';
import { ref } from 'vue';
import type { User } from '~/models/user/UserModel';

const { updateProfile } = useUserProfile();
const openModal = defineModel<boolean>('openModal');

const profile = ref<User>({
  username: '',
  name: '',
  phraseInspirante: '',
  phraseDePresentation: '',
  email: '',
  category: 'professional',
  phone: '',
  adresse: '',
  diplome: '',
  langues: '',
});

const saveProfile = () => {
  updateProfile(profile.value);
  openModal.value = false;
};
</script>

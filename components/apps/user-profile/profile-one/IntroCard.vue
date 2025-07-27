<template>
  <v-row>
    <v-col cols="12">
      <v-card elevation="10" class="bg-surface">
        <v-card-item>
          <!-- <div class="d-flex"> -->
          {{ professionalUser }}
          <div>
            <h4 class="text-h5">A mon propos</h4>
            <p class="my-5 text-subtitle-1 lh-md font-weight-medium">
              {{ user?.phraseDePresentation ?? 'Aucune phrase de présentation définie' }}
            </p>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <h4 class="text-h5 mb-4">Contact</h4>
            <div class="d-flex align-center mb-5" v-if="user.phone">
              <v-avatar size="40" class="bg-lighterror">
                <PhoneIcon size="20" stroke-width="1.5" class="text-error" />
              </v-avatar>
              <div class="ml-3">
                <h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1">
                  Numéro de téléphone
                </h5>
                <p class="text-subtitle-1 font-weight-medium text-grey100">
                  {{ user?.phone ?? 'Définir votre numéro de téléphone' }}
                </p>
              </div>
            </div>
            <div class="d-flex align-center mb-5" v-if="user?.email">
              <v-avatar size="40" class="bg-lightsuccess">
                <MailIcon size="20" stroke-width="1.5" class="text-success" />
              </v-avatar>
              <div class="ml-3">
                <h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1">Email</h5>
                <p class="text-subtitle-1 font-weight-medium text-grey100">
                  {{ user?.email ?? 'Définir votre adresse mail' }}
                </p>
              </div>
            </div>
          </div>
          <v-divider class="mb-4"></v-divider>
          <div>
            <h4 class="text-h5 mb-4" v-if="user.adresse || user.diplome || user.langues">
              Vos infos complémentaires
            </h4>
            <div class="d-flex align-center mb-5" v-if="user?.adresse">
              <v-avatar size="40" class="bg-lightwarning">
                <MapPinIcon size="20" stroke-width="1.5" class="text-warning" />
              </v-avatar>
              <div class="ml-3">
                <h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1">
                  Votre adresse
                </h5>
                <p class="text-subtitle-1 font-weight-medium text-grey100">
                  {{ user?.adresse ?? 'Définir une adresse' }}
                </p>
              </div>
            </div>
            <div class="d-flex align-center mb-5" v-if="user?.diplome">
              <v-avatar size="40" class="bg-lightsuccess">
                <SchoolIcon size="20" stroke-width="1.5" class="text-success" />
              </v-avatar>
              <div class="ml-3">
                <h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1">
                  Votre Parcours
                </h5>
                <p class="text-subtitle-1 font-weight-medium text-grey100">
                  {{ user?.diplome ?? 'Définir votre parcours' }}
                </p>
              </div>
            </div>
            <div class="d-flex align-center" v-if="user?.langues">
              <v-avatar size="40" class="bg-lightindigo">
                <LanguageIcon size="20" stroke-width="1.5" class="text-indigo" />
              </v-avatar>
              <div class="ml-3">
                <h5 class="text-subtitle-1 font-weight-semibold text-grey200 mb-1">Vos Langues</h5>
                <p class="text-subtitle-1 font-weight-medium text-grey100">
                  {{ user?.langues ?? 'Définir les langues dans lesquelles vous voulez être' }}
                </p>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { LanguageIcon, MailIcon, MapPinIcon, PhoneIcon, SchoolIcon } from 'vue-tabler-icons';
const { professionalUser } = storeToRefs(useUserStore());
const { getUserProfile } = useUserProfile();

onMounted(() => {
  getUserProfile();
});
</script>
<style lang="scss" scoped>
v-card-item {
  display: flex;
}
</style>

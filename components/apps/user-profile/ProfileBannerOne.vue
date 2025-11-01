<template>
  <section class="profile-header">
    <div class="profile-header__cover">
      <img
        :src="professionalUser?.picture || '/images/backgrounds/profilebg-2.jpg'"
        alt="Bannière du profil"
        class="profile-header__image"
      />
      <button @click="triggerClickFileInput" class="profile-header__edit">
        <Icon icon="solar:camera-outline" width="20" height="20" />
      </button>
      <input type="file" ref="fileInput" @change="changeBannerPhoto" accept="image/*" hidden />
    </div>

    <v-card elevation="8" class="profile-header__card">
      <div class="profile-header__content">
        <div class="profile-header__identity">
          <v-avatar size="100" class="profile-header__avatar">
            <img v-if="professionalUser?.avatar" :src="professionalUser.avatar" alt="Avatar" />
            <span v-else>{{ initials }}</span>
          </v-avatar>

          <div class="profile-header__info">
            <h2 class="profile-header__name">
              {{ professionalUser?.name || user?.username }}
              <v-chip color="primary" variant="outlined" size="x-small">Prestataire</v-chip>
            </h2>
            <p class="profile-header__phone">
              {{ professionalUser?.telephone || 'Définissez votre téléphone' }}
            </p>
          </div>
        </div>

        <div class="profile-header__actions">
          <v-btn
            v-if="!isProfileCreated"
            color="primary"
            class="profile-header__btn"
            @click="openModal = true"
          >
            Créer mon profil
          </v-btn>

          <template v-else>
            <v-btn color="primary" class="profile-header__btn" @click="openModal = true">
              Modifier le profil
            </v-btn>
            <v-btn color="success" class="profile-header__btn" @click="openServiceModal = true">
              Ajouter un secteur d'activité
            </v-btn>
          </template>
        </div>
      </div>
    </v-card>

    <Teleport to="body">
      <EditerProfessionalProfile v-model:openModal="openModal" />
      <services-prestataire class="mt-6" v-model:pageActuelle="openServiceModal" />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import EditerProfessionalProfile from '@/components/apps/user-profile/EditProfessionalProfil.vue';
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import ServicesPrestataire from '~/components/questionnaires/ServicesPrestataire.vue';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useUserStore } from '~/stores/userStore';

const { professionalUser, user, isProfileCreated } = storeToRefs(useUserStore());
const { changeProfessionalBannerPicture, getProfessionalProfileDetails } = useProfessionalProfile();

const openModal = ref(false);
const openServiceModal = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const initials = ref('');

const triggerClickFileInput = () => fileInput.value?.click();
const changeBannerPhoto = async (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (!input.files?.length) return;
  const picture = input.files[0];
  await changeProfessionalBannerPicture(picture);
};

const getInitials = (name?: string) =>
  name ? name.trim().charAt(0).toUpperCase() : user.value?.username?.charAt(0).toUpperCase();

onMounted(async () => {
  await getProfessionalProfileDetails();
  initials.value = professionalUser.value
    ? getInitials(professionalUser.value.name)
    : getInitials(user.value?.username);
});
</script>

<style scoped lang="scss">
.profile-header {
  width: 80vw;
  &__cover {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  &__image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    filter: brightness(0.9);
  }

  &__edit {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: white;
      transform: scale(1.05);
    }
  }

  &__card {
    margin-top: -70px;
    border-radius: 16px;
    backdrop-filter: blur(8px);
  }

  &__content {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__identity {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__avatar {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  &__name {
    margin: 0;
    font-weight: 700;
  }

  &__phone {
    font-size: 0.95rem;
    color: #777;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  &__btn {
    border-radius: 12px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
}
</style>

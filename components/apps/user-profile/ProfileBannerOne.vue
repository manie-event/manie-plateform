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
      <NuxtLink to="/dashboards/dashboard2" color="primary" class="profile-header__redirect-btn">
        Retour au tableau de bord
      </NuxtLink>
    </div>

    <v-card elevation="8" class="profile-header__card">
      <div class="profile-header__content">
        <div class="profile-header__identity">
          <v-avatar size="100" class="profile-header__avatar">
            <!-- <img v-if="professionalUser?.avatar" :src="professionalUser.avatar" alt="Avatar" /> -->
            <span>{{ initials }}</span>
          </v-avatar>

          <div class="profile-header__info">
            <div class="d-flex flex-row gap-2">
              <div v-for="service in getServiceValues">
                <v-chip color="primary" variant="outlined" size="x-small">{{ service }}</v-chip>
              </div>
            </div>
            <h2 class="profile-header__name">
              {{ professionalUser?.name || user?.username }}
            </h2>
            <div class="d-flex align-center">
              <Icon icon="ci:phone" height="18" width="18" class="mr-1" />
              <p class="profile-header__phone">
                {{ professionalUser?.telephone || 'Définissez votre téléphone' }}
              </p>
            </div>
            <!-- <div class="d-flex align-center">
              <Icon icon="ci:mail" height="18" width="18" class="mr-1" />
              <p class="profile-header__phone">
                {{ professionalUser?.email || 'Définissez votre email' }}
              </p>
            </div> -->
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
import { NuxtLink } from '#components';
import EditerProfessionalProfile from '@/components/apps/user-profile/EditProfessionalProfil.vue';
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue';
import ServicesPrestataire from '~/components/questionnaires/ServicesPrestataire.vue';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useUserStore } from '~/stores/userStore';

const { professionalUser, user, isProfileCreated, initials } = storeToRefs(useUserStore());
const { changeProfessionalBannerPicture, getProfessionalProfileDetails, getProfessionalProfile } =
  useProfessionalProfile();

const openModal = ref(false);
const openServiceModal = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

const triggerClickFileInput = () => fileInput.value?.click();
const changeBannerPhoto = async (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (!input.files?.length) return;
  const picture = input.files[0];
  await changeProfessionalBannerPicture(picture);
};

const getServiceValues = computed(
  () => professionalUser.value?.professionalServices?.map((s) => s.name) ?? []
);

onMounted(async () => {
  const name = professionalUser.value?.name || user.value?.username || '';
  await getProfessionalProfile();
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
  &__redirect-btn {
    top: 20px;
    right: 20px;
    position: absolute;
    z-index: 9;
    background: rgb(var(--v-theme-background));
    color: rgb(var(--v-theme-primary));
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    padding: 9px 20px;
    text-decoration: none;
    border-radius: 5px;
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
@media screen and (max-width: 900px) {
  .profile-header {
    width: 90vw;
    margin: 0 auto;

    &__actions {
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>

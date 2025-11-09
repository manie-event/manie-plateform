<template>
  <v-card elevation="5" class="profile-banner">
    <img :src="profileBg" alt="profile background" />
    <v-row>
      <v-col cols="12" md="5" order="2" order-md="1" class="profile-banner__card">
        <div class="info-section">
          <div class="contact-info">
            <h6>
              <Icon icon="ci:paper-plane" height="20" />
              {{ clientProfile?.email ?? 'Veuillez renseigner un email' }}
            </h6>
            <h6>
              <Icon icon="ci:phone" height="20" />
              <span style="text-align: center">{{
                clientProfile?.phoneNumber ?? 'Veuillez renseigner un téléphone'
              }}</span>
            </h6>
          </div>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="3"
        order="1"
        order-md="2"
        class="profile-banner__card"
        style="position: relative; top: -55px"
      >
        <div class="user-details">
          <div class="avatar-border">
            <v-avatar size="100" class="userImage">
              <h3>{{ initials }}</h3>
            </v-avatar>
          </div>
          <h5>{{ clientProfile?.username || user?.username }}</h5>
          <span>Chercheur de bonheur</span>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="4"
        order="3"
        style="display: flex; align-items: center; justify-content: center"
      >
        <div class="actions">
          <v-btn color="primary" @click="openEditProfilModal()" class="pa-3"
            >Éditer votre profil</v-btn
          >
          <NuxtLink to="/dashboards/dashboard-client">
            <v-btn color="success" class="pa-3">Revenir au dashboard</v-btn>
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-card>
  <Teleport to="body">
    <EditClientProfil v-model:openModal="openModal" />
    <ModalRedirection :redirection="'dashboard-client'" v-model="isProfilUpdate" />
  </Teleport>
</template>
<script setup lang="ts">
import profileBg from '@/public/images/backgrounds/profilebg.jpg';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore';
import EditClientProfil from './EditClientProfil.vue';
import ModalRedirection from './ModalRedirection.vue';

const { isProfilUpdate, clientProfile, user, initials } = storeToRefs(useUserStore());

const openModal = ref(false);
const openEditProfilModal = () => {
  openModal.value = !openModal.value;
};
</script>

<style lang="scss">
.profile-banner {
  position: relative;
  background: rgb(var(--v-theme-surface));
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
  margin-bottom: 2rem;
  width: 80vw;
  padding-bottom: 60px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }

  img {
    object-fit: cover;
    height: 180px;
    width: 100%;
    filter: brightness(0.8);
  }
  &__card {
    display: flex;
    align-items: center;
    @media screen and (max-width: 960px) {
      position: relative;
      top: -30px;
      display: flex;
      justify-content: center;
    }
  }

  .info-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 1.5rem;
    padding: 1rem 2rem;
    height: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-top: -60px;
      text-align: center;
    }
  }

  .avatar-border {
    .userImage {
      border-radius: 50%;
      background: rgb(var(--v-theme-darkbg));
      width: 110px;
      height: 110px;
      border: 3px solid rgb(var(--v-theme-surface));
      overflow: hidden;
    }
    h3 {
      color: rgb(var(--v-theme-background));
      font-size: 2.5rem;
    }
  }

  .user-details {
    text-align: center;
    h5 {
      font-weight: 700;
      font-size: 1.5rem;
      color: rgb(var(--v-theme-darkbg));
      margin-top: 0.75rem;
    }
    span {
      color: rgba(var(--v-theme-on-surface), 0.7);
      font-size: 1rem;
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    h6 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(var(--v-theme-on-surface), 0.8);
      font-size: 0.95rem;
      svg {
        color: rgb(var(--v-theme-primary));
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .v-btn {
      text-transform: none;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.2s ease;
      padding: 0.8rem 1.5rem;

      &--variant-contained {
        background-color: rgb(var(--v-theme-primary)) !important;
      }

      &:hover {
        transform: translateY(-1px);
      }
    }
  }
}
</style>

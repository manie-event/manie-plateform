<template>
  <v-card elevation="5" class="overflow-hidden profile-banner">
    <img :src="profileBg" alt="profile" class="w-100" />
    <div class="mt-1 d-flex justify-center">
      <v-col cols="4" class="d-flex gap-2 align-center flex-column justify-center">
        <h6 class="text-subtitle-1 d-flex align-center gap-2">
          <Icon icon="ci:paper-plane" height="24" width="24"></Icon>{{ clientProfile?.email }}
        </h6>
        <h6 class="text-subtitle-1 d-flex align-center gap-2">
          <Icon icon="ci:phone" height="24" width="24"></Icon> {{ clientProfile?.phoneNumber }}
        </h6>
      </v-col>
      <v-col cols="4" class="d-flex justify-center order-sml-first">
        <div class="text-center top-spacer">
          <div class="avatar-border">
            <v-avatar size="100" class="userImage">
              <img :src="UserImage" width="100" alt="Mathew" />
            </v-avatar>
          </div>
          <h5 class="text-h5 mt-3 font-weight-semibold">
            {{ userName ? userName : clientName }}
          </h5>
          <span class="text-h6 font-weight-regular">Chercheur de bonheur</span>
        </div>
      </v-col>
      <v-col
        cols="4"
        class="d-flex align-center justify-center justify-lg-end order-sm-third text-sm-right text-center"
      >
        <div
          class="d-flex d-column align-center justify-sm-space-between justify-center px-sm-10 py-1 gap-3"
        >
          <v-btn color="primary" size="large" class="pa-3" @click="openEditProfilModal()"
            >Editez votre profil</v-btn
          >
          <NuxtLink to="/dashboards/dashboard-client"
            ><v-btn color="success" size="large" class="pa-3">
              Revenir au dashboard</v-btn
            ></NuxtLink
          >
        </div>
      </v-col>
    </div>
  </v-card>
  <Teleport to="body">
    <EditClientProfil v-model:openModal="openModal" />
    <ModalRedirection :redirection="'dashboard-client'" v-model="isProfilUpdate" />
  </Teleport>
</template>
<script setup lang="ts">
import profileBg from '@/public/images/backgrounds/profilebg.jpg';
import UserImage from '@/public/images/side-picture/charlesdeluvio-rRWiVQzLm7k-unsplash.jpg';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import EditClientProfil from './EditClientProfil.vue';
import ModalRedirection from './ModalRedirection.vue';

const { isProfilUpdate, clientProfile } = storeToRefs(useUserStore());

const openModal = ref(false);
const clientName = localStorage.getItem('client-name');
const userName = localStorage.getItem('username');
const openEditProfilModal = () => {
  openModal.value = !openModal.value;
};
</script>

<style lang="scss">
.profile-banner {
  padding-bottom: 50px;
}
.avatar-border {
  background-image: linear-gradient(rgb(80, 178, 252), rgb(244, 76, 102));
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .userImage {
    border: 4px solid rgb(var(--v-theme-surface));
  }
}

.top-spacer {
  margin-top: -95px;
}

.profiletab .v-slide-group__content {
  justify-content: end;
  .v-btn--variant-text .v-btn__overlay {
    background: transparent;
  }
}
.profiletab {
  .v-tab.v-tab {
    &.v-slide-group-item--active {
      color: rgb(var(--v-theme-primary)) !important;
      .icon {
        color: rgb(var(--v-theme-primary)) !important;
      }
    }
  }
}

@media (max-width: 1023px) {
  .order-sm-second {
    order: 2;
  }
  .order-sml-first {
    order: 1;
  }
  .order-sm-third {
    order: 3;
  }
  .order-sm-last {
    order: 4;
  }
}
</style>

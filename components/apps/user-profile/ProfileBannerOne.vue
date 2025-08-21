<template>
  <div class="position-relative">
    <img :src="bgPicture" alt="profile" class="w-100" />
    <button @click="triggerClickFileInput" class="profile-banner__change-image">+</button>
    <input
      type="file"
      ref="fileInput"
      @change="changeBannerPhoto"
      accept="image/*"
      style="display: none"
    />
  </div>
  <div class="mx-sm-5">
    <v-card elevation="10" class="overflow-hidden mt-sm-n13 mt-n5">
      <v-card-item class="pb-0">
        <v-row class="mt-1 justify-space-between">
          <v-col cols="12" md="6" sm="9" class="pt-0">
            <div class="d-sm-flex align-center justify-sm-start justify-center">
              <div class="text-sm-left text-center">
                <v-avatar size="100" class="userImage position-relative overflow-visible">
                  <img :src="UserImage" width="100" alt="Mathew" class="rounded-circle" />
                  <v-avatar size="26" class="bg-primary position-absolute plus">
                    <PlusIcon size="16" stroke-width="2" />
                  </v-avatar>
                </v-avatar>
              </div>
              <div class="ml-sm-4 text-sm-left text-center">
                <h5 class="text-h3 font-weight-semibold mb-1 my-sm-0 my-2">
                  {{ user?.name ?? 'Définir votre nom complet' }}
                  <v-chip
                    color="primary"
                    class="bg-lightprimary font-weight-semibold ml-2 mt-n1"
                    variant="outlined"
                    size="x-small"
                    >Admin</v-chip
                  >
                </h5>
                <span class="text-h6 font-weight-medium text-grey100">{{
                  user?.phraseInspirante ?? 'Aucune phrase inspirante définie'
                }}</span>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            sm="3"
            class="d-flex align-center justify-center justify-sm-end order-sm-third"
          >
            <div class="d-flex flex-column justify-center align-center gap-4">
              <div>
                <v-btn color="primary" size="large" class="w-100" @click="openEditProfilModal()"
                  >Editez votre profil</v-btn
                >
              </div>
              <div v-if="isProfileCreated">
                <v-btn
                  class="profile-banner-redirection-bouton"
                  size="large"
                  @click="getKeywords('food')"
                  >Revenir à mon dashboard</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" class="profile-one">
            <v-tabs v-model="tab" color="primary" dark class="profiletab">
              <v-tab
                v-for="item in items"
                :key="item.tab"
                :to="item.href"
                class="text-grey100 mr-sm-3"
              >
                <component
                  :is="item.icon"
                  size="20"
                  stroke-width="1.5"
                  class="mr-sm-2 text-h6 text-grey100 icon"
                >
                </component>
                <span class="d-sm-flex d-none">{{ item.tab }}</span>
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </div>
  <Teleport to="body">
    <EditerUserProfile v-model:openModal="openModal" />
  </Teleport>
</template>

<script setup lang="ts">
import { ref, shallowRef, Teleport } from 'vue';
import { IdIcon, Layout2Icon, PlusIcon, UserCircleIcon, UsersIcon } from 'vue-tabler-icons';
import EditerUserProfile from '~/components/apps/user-profile/EditClientProfil.vue';
import { useKeywords } from '~/composables/ProfessionalUser/UseKeywords';
import { useProfessionalProfile } from '../../../composables/ProfessionalUser/UseProfessionalProfile';
import UserImage from '/images/profile/user6.jpg';

const { bgPicture } = storeToRefs(useUserStore());

const tab = ref(null);
const openModal = ref(false);
const fileInput = ref(null);

const { user, isProfileCreated } = storeToRefs(useUserStore());
const { getKeywords } = useKeywords();
const { changeProfessionalBannerPicture } = useProfessionalProfile();

const triggerClickFileInput = () => fileInput.value?.click();
const changeBannerPhoto = async (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (!input.files?.length) return;

  const picture = input.files[0];
  await changeProfessionalBannerPicture(picture);
};

const items = shallowRef([
  { tab: 'My Profile', icon: UserCircleIcon, href: '/apps/userprofile/one' },
  { tab: 'Teams', icon: UsersIcon, href: '/apps/userprofile/one/teams' },
  { tab: 'Projects', icon: Layout2Icon, href: '/apps/userprofile/one/projects' },
  { tab: 'Connection', icon: IdIcon, href: '/apps/userprofile/one/connection' },
]);

const openEditProfilModal = () => {
  openModal.value = !openModal.value;
};
</script>

<style lang="scss" scoped>
.profile-banner {
  &__change-image {
    position: absolute;
    display: flex;
    height: 50px;
    width: 50px;
    top: 10px;
    left: 10px;
    /* background: white; */
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: 900;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    color: white;
    transition: all 0.4s ease-in-out;
    &:hover {
      background: white;
      color: black;
      transition: all 0.4s ease-in-out;
    }
  }
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

.profile-one {
  .profiletab .v-slide-group__content {
    justify-content: start;

    .v-btn--variant-text .v-btn__overlay {
      background: transparent;
    }
  }

  .v-btn {
    &.v-tab-item--selected {
      color: rgb(var(--v-theme-primary)) !important;
      .icon {
        color: rgb(var(--v-theme-primary)) !important;
      }
    }
  }
}

.profiletab {
  .v-btn {
    &.v-tab-item--selected {
      color: rgb(var(--v-theme-primary)) !important;
      .icon {
        color: rgb(var(--v-theme-primary)) !important;
      }
    }
  }
}

.profile-banner-redirection-bouton {
  background: rgb(59, 182, 150);
  color: white;
}

.plus {
  bottom: 0;
  right: 0;
  border: 2px solid #fff;
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

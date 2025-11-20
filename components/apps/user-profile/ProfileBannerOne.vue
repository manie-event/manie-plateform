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
      <NuxtLink to="/dashboards/dashboard2" class="profile-header__redirect-btn">
        Retour au tableau de bord
      </NuxtLink>
    </div>

    <v-card elevation="8" class="profile-header__card">
      <v-row class="w-100 pa-6 m-0">
        <v-col cols="12" md="2">
          <v-avatar size="100" class="profile-header__avatar">
            <span>{{ initials }}</span>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-row gap-2">
            <div v-for="service in getServiceValues" :key="service">
              <div class="d-flex gap-2">
                <v-chip color="primary" variant="outlined" size="x-small">{{ service }}</v-chip>
              </div>
            </div>
          </div>

          <div>
            <h2 class="profile-header__name w-100">
              {{ professionalUser?.name || user?.username }}
            </h2>
            <div class="d-flex align-center">
              <Icon
                icon="ci:phone"
                height="18"
                width="18"
                class="mr-1 profile-header__phone-icone"
              />
              <p class="profile-header__phone">
                {{ professionalUser?.telephone || 'Définissez votre téléphone' }}
              </p>
            </div>
            <div class="d-flex align-center">
              <Icon
                icon="ci:mail"
                height="18"
                width="18"
                class="mr-1 profile-header__phone-icone"
              />
              <p class="profile-header__phone">
                {{ displayedEmail || 'Définissez votre email' }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="w-100 d-flex gap-2 flex-column">
          <v-btn v-if="!isProfileCreated" color="primary" class="w-100" @click="openModal = true">
            Créer mon profil
          </v-btn>

          <template v-else>
            <v-btn
              style="
                border: 1px solid rgb(var(--v-theme-darkbg));
                color: rgb(var(--v-theme-darkbg));
              "
              class="w-100"
              @click="openModal = true"
            >
              Mon profil
            </v-btn>
            <v-btn
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
              class="w-100"
              @click="openModificationModal = true"
            >
              Mon activité
            </v-btn>
            <v-btn
              :disabled="isFirstConnection || serviceProfessional.length === 3"
              color="rgb(var(--v-theme-darkbg))"
              style="color: rgb(var(--v-theme-background))"
              class="w-100"
              @click="openServiceModal = true"
            >
              {{
                isFirstConnection
                  ? 'Nous vérifions votre profil sous 48h'
                  : serviceProfessional.length === 3
                    ? 'Vous détenez le maximum de service possible'
                    : 'Ajouter une activité'
              }}
            </v-btn>
          </template>
        </v-col>
      </v-row>
    </v-card>

    <Teleport to="body">
      <EditerProfessionalProfile v-model:openModal="openModal" />
      <EditPrestataireServices v-model:openModificationModal="openModificationModal" class="mt-6" />
      <CreatePrestataireServices v-model:openCreateServiceModal="openServiceModal" class="mt-6" />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import EditerProfessionalProfile from '@/components/apps/user-profile/EditProfessionalProfil.vue';
import { Icon } from '@iconify/vue';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import EditPrestataireServices from '~/components/questionnaires/EditPrestataireServices.vue';
import CreatePrestataireServices from '~/components/questionnaires/ServicesPrestataire.vue';
import { usePaiementJeton } from '~/composables/professional-user/UsePaiementJeton';
import { useProfessionalProfile } from '~/composables/professional-user/UseProfessionalProfile';
import { useProfessionalService } from '~/services/UseProfessionalService';
import { useUserStore } from '~/stores/userStore';

const { professionalUser, user, isProfileCreated, initials } = storeToRefs(useUserStore());
const { changeProfessionalBannerPicture, getProfessionalProfile } = useProfessionalProfile();
const { getJetonQuantity } = usePaiementJeton();
const { getListProfessionalServiceByProfessional } = useProfessionalService();
const { professionalServices } = storeToRefs(useProfessionalStore());
const { addSuccess } = useToaster();

const openModal = ref(false);
const openServiceModal = ref(false);
const openModificationModal = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);
const isFirstTime = ref(false);
const professionalEmail = ref();
const serviceProfessional = ref([]);
const triggerClickFileInput = () => fileInput.value?.click();
const changeBannerPhoto = async (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (!input.files?.length) return;
  const picture = input.files[0];
  try {
    await changeProfessionalBannerPicture(picture);

    addSuccess('La photo de profil a été mis à jour');
    await getProfessionalProfile();
  } catch (err) {
    console.error('Erreur lors du changement de bannière :', err);
  }
};

const getServiceValues = computed(() => serviceProfessional.value.map((s) => s.name) ?? []);

const displayedEmail = computed(
  () => professionalUser.value?.email || professionalEmail.value || null
);

const isFirstConnection = computed(() =>
  professionalServices.value.some((service) => service.isVerified === false)
);

onMounted(async () => {
  const professional = await getProfessionalProfile();
  professionalEmail.value = professional.email;
  getListProfessionalServiceByProfessional();
  await getJetonQuantity();
});
</script>

<style scoped lang="scss">
.profile-header {
  width: 80vw;
  margin: 0 auto;

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
    background: linear-gradient(135deg, rgb(var(--v-theme-thirdy)), rgb(var(--v-theme-darkbg)));
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }

  &__name {
    margin: 0;
    font-weight: 700;
  }

  &__phone {
    max-width: 100%;
    font-size: 0.95rem;
    color: #777;
    &-icone {
      width: 20px !important;
      min-width: 20px !important;
      height: 20px !important;
      flex-shrink: 0; // empêche le rétrécissement
    }
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
    &__phone {
      max-width: 100%;
      font-size: 0.95rem;
      color: #777;
      &-icone {
        width: 20px !important;
        min-width: 20px !important;
        height: 20px !important;
        flex-shrink: 0; // empêche le rétrécissement
      }
    }
  }
}
</style>

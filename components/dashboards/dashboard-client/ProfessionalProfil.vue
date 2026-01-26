<template>
  <v-dialog v-model="professionalProfile" max-width="650" transition="dialog-bottom-transition">
    <v-card class="pp-card">
      <!-- Image de couverture -->
      <div class="pp-card__image-container">
        <div v-if="props.pprofile.picture">
          <img :src="props.pprofile.picture" alt="Image du prestataire" class="pp-card__image" />
        </div>
        <div v-else>
          <img
            :src="photoDefault"
            alt="Image du prestataire"
            class="pp-card__image"
            style="object-position: bottom"
          />
        </div>
        <v-card-title class="pp-card__title text-white">
          {{ props.pprofile.name }}
        </v-card-title>
      </div>

      <!-- Contenu -->
      <v-card-text class="py-6 px-6">
        <!-- Section principale -->
        <div>
          <span class="pp-label">Description :</span>
          <p class="pp-value">{{ props.pprofile.bio }}</p>
        </div>

        <!-- Infos entreprise -->
        <v-divider class="my-4"></v-divider>
        <div class="pp-info-grid">
          <div>
            <span class="pp-label">Téléphone :</span>
            <p class="pp-value">{{ props.pprofile.telephone }}</p>
          </div>
          <div>
            <span class="pp-label">Email :</span>
            <p class="pp-value">{{ props.pprofile.email }}</p>
          </div>
        </div>

        <!-- Activités -->
        <div v-if="faqList.length">
          <h5 class="text-h6 mb-2">Activités principales</h5>
          <div v-for="faq in faqList" :key="activity">
            <span
              ><b>{{ `${faq.question} :` }}</b></span
            >
            <span>{{ faq.reponse }}</span>
          </div>
          <v-divider class="my-4"></v-divider>
        </div>

        <v-divider class="my-4"></v-divider>
        <div class="pp-info-grid">
          <div>
            <span class="pp-label">Année d'expérience :</span>
            <span>{{ props.pprofile.experience }} an(s)</span>
          </div>
          <div>
            <span class="pp-label">Dépôt de garantie :</span>
            <p class="pp-value">{{ getDepotValue }}</p>
          </div>
          <div v-if="props.pprofile.deposit">
            <span class="pp-label">Montant du dépôt :</span>
            <p class="pp-value">{{ props.pprofile.depositAmount }}% du devis</p>
          </div>
          <div>
            <span class="pp-label">Paiement du dépot:</span>
            <p class="pp-value">{{ getBilingPeriod }}</p>
          </div>
        </div>

        <v-divider class="my-4"></v-divider>

        <!-- Certifications -->
        <div class="pp-info-grid">
          <div v-if="props.pprofile.certification?.length">
            <span class="pp-label">Certifications</span>
            <v-chip-group column>
              <v-chip
                v-for="(cert, index) in props.pprofile.certification"
                :key="index"
                class="ma-1"
                label
              >
                {{ cert }}
              </v-chip>
            </v-chip-group>
          </div>
          <div v-if="props.pprofile.links?.length">
            <h5 class="text-h6 mb-2">Vitrines</h5>
            {{ linksList }}
            <div
              v-for="(link, index) in linksList"
              :key="index"
              class="d-flex align-center gap-2 mb-2"
            >
              <Icon :icon="getSocialIcon(link.type)" height="22" class="text-primary" />
              <a
                :href="link.value"
                target="_blank"
                rel="noopener noreferrer"
                class="pp-value text-decoration-none"
              >
                {{ link.value }}
              </a>
            </div>
          </div>
        </div>
      </v-card-text>

      <!-- Actions -->
      <v-card-actions class="justify-end px-6 pb-5">
        <v-btn variant="tonal" color="grey-darken-1" @click="professionalProfile = false">
          Fermer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import photoDefault from '@/public/images/backgrounds/photoDefaultProposition.png';
import type { ProfessionalProfile } from '~/models/user/UserModel';
const props = defineProps<{
  pprofile: ProfessionalProfile;
}>();

const getSocialIcon = (type: string) => {
  const map: Record<string, string> = {
    Facebook: 'circum:facebook',
    Instagram: 'circum:instagram',
    LinkedIn: 'circum:linkedin',
    Youtube: 'circum:youtube',
    Twitter: 'circum:twitter',
    'Site Web': 'circum:at',
  };

  return map[type] || 'mdi:link-variant';
};

const professionalProfile = defineModel<boolean>('professionalProfile', { default: false });

const getBilingPeriod = computed(() => {
  return props.pprofile.billingPeriod === 'beforeEvent' ? "Avant l'évènement" : "Après l'évènement";
});
const getDepotValue = computed(() => {
  return props.pprofile.deposit ? 'Souhaite un dépôt' : 'Ne souhaite pas de dépôt';
});

// const getEmail = computed(() => {
//   const users = await;
//   return props.pprofile.userUuid.find((item) => item.type === 'email')?.value || 'Non renseigné';
// });

const faqList = computed(() => {
  const raw = props.pprofile.faq;

  if (!raw) return [];

  // Si c’est déjà un tableau
  if (Array.isArray(raw)) return raw;

  // Si c’est un JSON stringifié
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  // Si c’est un objet (genre { question:..., reponse:... })
  if (typeof raw === 'object') return Object.values(raw);

  return [];
});

const linksList = computed(() => {
  const raw = props.pprofile.links;

  if (!raw) return [];
  if (Array.isArray(raw)) return raw;

  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  if (typeof raw === 'object') return Object.values(raw);

  return [];
});
</script>

<style lang="scss" scoped>
.pp-card {
  border-radius: 18px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-surface));
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  &__image-container {
    position: relative;
    width: 100%;
    height: 250px;
    max-height: 250px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    }
  }

  &__image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  &__title {
    position: absolute;
    bottom: 16px;
    left: 24px;
    font-weight: 700;
    font-size: 1.75rem;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
}

.pp-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  .pp-label {
    font-size: 0.8rem;
    color: rgba(var(--v-theme-on-surface), 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pp-value {
    font-weight: 500;
    color: rgb(var(--v-theme-on-surface));
    margin-top: 2px;
  }
}
</style>

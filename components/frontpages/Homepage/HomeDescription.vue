<template>
  <v-row class="home">
    <v-col cols="12" md="6" class="home__container" style="background: rgb(var(--v-theme-thirdy))">
      <h2 class="font-weight-bold text-uppercase text-left">Particuliers</h2>
      <h5 class="text-subtitle1 font-weight-medium">
        En famille, entre amis, ou les deux : célébrez la vie ! Qu’il s’agisse d’honorer l’amour, de
        rassembler vos proches, de marquer une étape importante dans votre carrière ou d’accueillir
        le changement, chaque moment mérite d’être vécu pleinement. Manie, c’est la promesse d’une
        organisation simple, fluide et sans pression, pour que vous puissiez profiter de chaque
        instant et le transformer en un souvenir précieux.
      </h5>
      <NuxtLink class="cta" to="/auth/login"> Je crée mon événement !</NuxtLink>
    </v-col>
    <v-col cols="12" md="6" style="height: calc(100vh - 115px); padding: 0">
      <div style="background: var(--manie-secondary); height: 100%">
        <img :src="homePerso" alt="" class="home__image" />
      </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6" style="height: calc(100vh - 115px); padding: 0">
      <div style="height: 100%">
        <img :src="homePro" alt="" class="home__image" />
      </div>
    </v-col>
    <v-col cols="12" md="6" class="home__container" style="background: #f39454">
      <h2 class="font-weight-bold text-uppercase" style="background: #f39454">Professionnels</h2>
      <h5 class="text-subtitle1 font-weight-medium">
        Entreprises, collectivités et institutions : valorisez vos équipes, vos clients et vos
        partenaires ! Qu’il s’agisse d’un séminaire, d’un lancement, d’une inauguration ou d’un
        simple cocktail, chaque événement mérite d’être impactant et à votre image. Manie, c’est la
        promesse d’une organisation simple, claire et réactive, pour que vous puissiez vous
        concentrer sur l’essentiel : vos invités, vos objectifs, vos réussites.
      </h5>
      <NuxtLink class="cta" to="/auth/login"> Je crée mon événement !</NuxtLink>
    </v-col>
  </v-row>
  <v-row
    class="d-flex justify-center align-center"
    style="background: rgb(var(--v-theme-background))"
  >
    <v-col
      cols="12"
      style="height: 700px; gap: 40px"
      class="d-flex justify-center align-center flex-column"
    >
      <h2 class="font-weight-bold text-uppercase" style="color: rgb(var(--v-theme-darkbg))">
        Prestataires
      </h2>
      <h5 class="text-subtitle1 font-weight-medium w-100" style="color: rgb(var(--v-theme-darkbg))">
        Vous faites partie de la team lieux, food, boissons, musique, audiovisuel, déco, location de
        matériel animation ou logistique ? <b>Bienvenue chez Manie !</b> Rejoins un écosystème local
        de professionnels sélectionnés pour leur talent, leurs valeurs et leur ancrage territorial !
        Unissons nos talents pour faire vibrer l’Auvergne-Rhône-Alpes.
      </h5>
      <NuxtLink class="nuxt-link" style="font-size: 1rem" to="/auth/login">
        Devenir partenaire !</NuxtLink
      >
    </v-col>
  </v-row>
  <Teleport to="body">
    <v-dialog v-model="greenModal" max-width="600">
      <v-card max-width="600">
        <v-card-text
          style="
            background: rgb(var(-v-theme-background));
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 35px;
          "
        >
          <Icon icon="teenyicons:plant-outline" height="40" width="40" color="#125605"></Icon>
          <p>
            L’éco-responsabilité n'est pas un slogan chez Manie, ni un argument marketing. C’est une
            valeur ancrée dans nos choix et nos collaborations. Nos partenaires partagent cette
            exigence, marque de respect et de bon sens. On ne le revendique pas pour se distinguer,
            on le fait, tout simplement. C’est une conviction.
          </p>

          <v-btn @click="greenModal = false" color="#125605">Fermer </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </Teleport>
</template>
<script setup lang="ts">
import homePerso from '@/public/images/backgrounds/home_perso.jpg';
import homePro from '@/public/images/backgrounds/home_pro.png';
import { Icon } from '@iconify/vue';
import { Teleport } from 'vue';

const greenModal = ref(false);

const scrollTriggered = ref(false);
const scrollThreshold = 1200;

const handleScroll = () => {
  if (scrollTriggered.value) return;

  if (window.scrollY >= scrollThreshold) {
    greenModal.value = true;
    scrollTriggered.value = true;
  }
};
onMounted(() => window.addEventListener('scroll', handleScroll));
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll));
</script>
<style lang="scss" scoped>
h2 {
  font-family: var(--big-title);
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(var(--v-theme-background));
  font-size: 3.5rem;
  line-height: 1.1;
  z-index: 99;
}

h5 {
  font-size: 1.1rem;
  font-weight: 400;
  color: rgb(var(--v-theme-background));
  text-align: justify;
  max-width: 45ch; // pour garder une bonne lisibilité
}
.home {
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__container {
    padding: 9vw;
    display: flex;
    font-size: 1.3rem;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    align-items: center;
  }
}
.cta {
  font-family: 'Poppins';
  text-decoration: unset;
  margin-left: 15px;
  font-weight: 600;
  color: rgb(var(--v-theme-lightprimary));
  transition: all 0.4s ease-in;
  padding: 0px 10px;
  border-radius: 15px;
  background: rgb(var(--v-theme-background));
  font-size: 1rem;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background: rgb(var(--v-theme-background));
    padding: 0px 10px;
    border-radius: 15px;
    transition: all 0.4s ease-out;
  }
}
@media screen and (max-width: 900px) {
  h2 {
    font-size: 2rem;
  }
}
</style>

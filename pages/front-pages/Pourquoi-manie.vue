<template>
  <div class="pourquoi-manie__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="notreConstat"
          alt=""
          class="pourquoi-manie__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="LogoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
    <div class="pourquoi-manie__descriptif">
      <h1>Pourquoi “Manie” ?</h1>
      <h4>
        Parce que chaque événement est un moment unique, et qu’on a souvent “la manie” de vouloir
        que tout soit parfait... Ce nom reflète à la fois la passion et le souci du détail qui sont
        le moteur de notre projet.
      </h4>
      <div class="mt-6">
        <p>
          <b>Manier : </b>
        </p>
        <p>votre projet est entre de bonnes mains, vous pouvez nous faire confiance.</p>
        <p class="mt-6">
          <b>Maniable :</b>
        </p>
        <p>une plateforme flexible, intuitive et facile d’utilisation.</p>
        <p class="mt-6">
          <b>Manifeste :</b>
        </p>
        <p>des engagements clairs et transparents.</p>
        <p class="mt-6">
          <b>Many :</b>
        </p>
        <p>
          autant d'offres que de projets, une richesse et une diversité de prestataires et de
          clients.
        </p>
        <p class="mt-6">
          <b>Manny dans "l’Age de Glace" :</b>
        </p>
        <p>celui sur qui on peut compter, qui prend soin des gens qu’il aime.</p>
        <p class="mt-6">
          <b>Manny dans "Scarface" :</b>
        </p>
        <p>un bras droit, fidèle, dévoué et compétent.</p>
        <p class="mt-6">
          <b>Clin d'œil spirituel :</b>
        </p>
        <p>
          chez les indiens, le Grand Manitou est une figure de pouvoir et de bienveillance, qui aura
          une influence sur le futur !
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseSidePicture from '@/components/common/BaseSidePicture.vue';
import LogoManie from '@/public/images/logos/logo-manie-bleu-ciel.svg';
import notreConstat from '@/public/images/side-picture/marcos-paulo-prado-0pOlBhSsF80-unsplash.jpg';

definePageMeta({
  layout: 'blank',
});
</script>
<style lang="scss" scoped>
.pourquoi-manie {
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__bg-image {
    position: relative;
  }
  &__descriptif {
    width: 50vw;
    padding: 4rem;
    h1 {
      margin-bottom: 1rem;
    }
  }
  &__sous-titre {
    margin-top: 50px;
    p {
      margin: 1rem 0;
    }
  }
}
.manie-logo {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 150px;
}
</style>

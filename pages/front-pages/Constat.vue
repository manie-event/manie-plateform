<template>
  <div class="notre-histoire__container">
    <base-side-picture>
      <template #bg-image>
        <img
          :src="notreConstat"
          alt=""
          class="notre-histoire__bg-image"
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px"
        />
      </template>
      <template #logo>
        <img :src="LogoManie" alt="" class="manie-logo" />
      </template>
    </base-side-picture>
    <div class="notre-histoire__descriptif">
      <h1>Notre Constat</h1>
      <h4>
        Le constat est simple : organiser un événement demande du temps, de l’énergie et une bonne
        dose de patience ! Pour les clients organisateurs comme pour les prestataires événementiels,
        le parcours de mise en relation est souvent peu fluide, et pour cause…
      </h4>
      <div class="mt-6">
        <p>
          <b>Organisateurs,</b>
        </p>
        <p>
          Entre les recherches infinies sur internet, les comparaisons qui n’en finissent plus, les
          tableaux Excel dignes d’un analyste de Wall Street et les dizaines de pages raturées, on
          frôle le burn-out organisationnel. Alors, certains tentent leur chance sur des
          plateformes. Des centaines de prestataires… qui ne cochent pas toutes les cases. Entre les
          critères flous, les notes injustifiées et les photos dignes de Pinterest qui datent de
          2014… Bon courage ! Il vous reste une seule option : l’event planner. Le sauveur. Mais
          aussi… le prix d'un rein.
        </p>
        <p class="mt-6">
          <b>Prestataires,</b>
        </p>
        <p>
          Vous passez des heures à répondre à des demandes qui n’aboutissent jamais ; vos prospects
          ne sont pas vraiment intéressés, pas vraiment raccords avec vos offres ou carrément à côté
          de la plaque. Résultat? Beaucoup d’énergie dépensée pour peu de retours! Et les
          plateformes ? Entre les abonnements qui coûtent un bras, les petits écrasés par les gros
          et votre talent relégué en 5e page derrière un DJ qui fait aussi photobooth et crêpier…
          difficile de sortir du lot. Bref : vous avez un savoir-faire, mais pas l’espace pour le
          montrer. Et ça, c’est pas rentable !
        </p>
        <p class="mt-6">
          <b
            >Il est temps de simplifier les choses.Notre défi ? Révolutionner l’expérience
            événementielle !
          </b>
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
.notre-histoire {
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

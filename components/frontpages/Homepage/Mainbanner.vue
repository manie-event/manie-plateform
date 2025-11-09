<template>
  <!-- <div class="main-banner">
    <v-container class="max-width-1218 pt-md-10 pt-6 pb-xl-0 pb-10">
      <v-row class="d-flex justify-center align-center">
        <v-col
          class="text-align-start text-center d-flex flex-column justify-center align-center ga-8 w-33"
        >
          <div class="main-banner__titre-container">
            <h1 class="d-flex justify-center font-weight-medium">
              <span>Manie,</span>
              <span>simplifie</span>
              <span>l'évènementiel.</span>
            </h1>

            <div class="main-banner__picture-container">
              <Img :src="homePage" class="main-banner__party-picture" />
              <v-btn
                class="px-8 transform-none m-btn-full main-banner__cta"
                size="large"
                to="/auth/login"
                >Let's go !</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
  <div class="main-banner">
    <v-container class="max-width-1218 pt-md-10 pt-6 pb-xl-0 pb-10">
      <v-row class="d-flex justify-center align-center">
        <v-col
          class="text-align-start text-center d-flex flex-row justify-center align-center ga-8 w-33"
        >
          <div class="main-banner__titre-container">
            <div class="main-banner__titre-position">
              <h1 class="d-flex justify-center font-weight-medium">
                <p>Manie,</p>
                <p>simplifie</p>
                <p>l'événementiel.<span style="color: #f39454; margin: 0; padding: 0">*</span></p>
              </h1>
              <h2 class="main-banner__title">
                <span style="color: #f39454">* </span>Notre mission : permettre à n'importe qui
                d'organiser n'importe quoi !
              </h2>
            </div>

            <Img :src="bouleDisco" class="main-banner__party-picture" />
            <v-btn
              class="px-8 transform-none m-btn-full main-banner__cta font-weight-bold text-uppercase text-subtitle-1"
              size="large"
              to="/auth/login"
              >Go !</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import bouleDisco from '@/public/images/backgrounds/BOULE PNG.png';
const { $gsap, $ScrollTrigger } = useNuxtApp();

// onMounted(() => {
//   $gsap.to('.main-banner__cta', {
//     top: '80vh',
//     scrollTrigger: {
//       trigger: 'body',
//       start: 'top 20vh',
//       end: 'bottom bottom',
//       scrub: true,
//       markers: true,
//     },
//   });
// });
</script>

<style lang="scss" scoped>
.main-banner {
  position: relative;
  padding-top: 50px;
  background: var(--bg-color);
  height: calc(100vh - 115px);
  overflow: hidden;
  &__title {
    text-align: left;
    font-size: 1.5vw;
    font-family: 'Poppins';
    font-weight: 500;
    margin: 0px auto 0 5px;
    position: relative;
    z-index: 3;
  }

  &__titre-container {
    position: relative;
    h1 {
      color: #293b57;
      flex-direction: column;
      display: flex;
      position: relative;
      z-index: 2;
      width: 90vw;
      align-items: flex-start;
      line-height: 1;
      p {
        // background: purple;
        color: var(--manie-primary);
        font-family: var(--big-title);
        font-weight: 600;
        font-size: 9vw;
        text-align: left;
        padding-right: 10vw;
      }
    }
  }
  &__picture-container {
    position: relative;
    top: -40px;
    height: 700px;
  }
  &__party-picture {
    width: 80vw;
    height: 100vh;
    z-index: -1;
    border-radius: 10px;
    filter: grayscale(0.5);
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
    border-radius: 10px;
    filter: grayscale(0.1);
    position: absolute;
    top: 10vh;
    right: -3vw;
    opacity: 0.1;
  }
  &__cta {
    background: var(--manie-thirdy);
    position: fixed;
    bottom: 20vh;
    right: 10vw;
    font-weight: 600;
    color: white;
    // height: 100px;
    width: 100px;
    height: 100px;
    z-index: 9;
    border-radius: 50% !important;
    ::after {
      content: '';
      position: absolute;
      height: 110px;
      width: 110px;
      top: -5px;
      left: -5px;
      border-radius: 50%;
      border: 3px solid rgb(var(--v-theme-background));
    }
  }
}

@media screen and (max-width: 900px) {
  .main-banner {
    height: 400px;
    width: 103vw;
    &__titre-position {
      position: relative;
      top: 20px;
    }
    &__party-picture {
      height: 50vh;
    }
    h2 {
      font-size: 0.6rem;
    }
    h1 {
      position: relative;
      p {
        font-size: 3rem;
      }
    }
  }
}
</style>

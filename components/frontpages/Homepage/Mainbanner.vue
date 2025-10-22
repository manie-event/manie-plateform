<template>
  <div class="main-banner">
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
        <v-col>
          <div class="main-banner d-lg-block d-none mt-16">
            <img
              src="/images/front-pages/background/main-banner.png"
              alt="banner-right-image"
              class="rtlImg"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <span class="main-banner__gradient-bg"></span>
  </div>
</template>

<script setup lang="ts">
import homePage from '@/public/images/backgrounds/homepage2.png';
</script>

<style lang="scss" scoped>
.main-banner {
  position: relative;
  padding-top: 50px;
  background: var(--bg-color);

  &__titre-container {
    position: relative;
    h1 {
      color: #293b57;
      flex-direction: column;
      position: relative;
      z-index: 2;
      align-items: center;
      // background: red;
      width: 100vw;
      line-height: 1;
      span {
        // background: purple;
        color: var(--manie-primary);
        font-family: var(--big-title);
        font-weight: 600;
        font-size: 9vw;
        width: 100vw;
        text-align: left;
        padding: 0 10vw;
      }
    }
  }
  &__picture-container {
    position: relative;
    top: -40px;
  }
  &__party-picture {
    max-width: 90vw !important;
    margin: 0 auto;

    z-index: 1;
    border-radius: 10px;
    filter: grayscale(0.5);
  }
  &__cta {
    background: var(--manie-thirdy);
    position: absolute;
    top: 8vh;
    right: 8vw;
    font-weight: 600;
    color: white;
    height: 100px;
    width: 100px;
    border-radius: 50% !important;
  }
}
</style>

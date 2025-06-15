<script setup lang="ts"></script>
<template>
  <div class="overflow-hidden bg-background position-relative">
    <v-container class="max-width-1218 pt-md-10 pt-6 pb-xl-0 pb-10 mt-16">
      <v-row class="d-flex justify-center align-center">
        <v-col
          class="text-align-start text-center d-flex flex-column justify-center align-center ga-8"
        >
          <h1 class="text-56 textPrimary font-weight-medium">
            <b>Manie, simplifie l'évènementiel.</b>
          </h1>
          <div class="d-sm-flex align-center text-center justify-md-start justify-center ga-3">
            <div class="d-sm-flex justify-center text-muted">
              <h6 class="text-17 font-weight-medium mt-sm-0 mt-2 w-50 m-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis dolorum
                non fuga molestiae consectetur, voluptatibus aspernatur ipsam!
              </h6>
            </div>
          </div>

          <div class="d-flex justify-md-start justify-center">
            <v-btn
              color="primary"
              rounded="pill"
              class="px-8 transform-none m-btn-full"
              size="large"
              to="/auth/login"
              >Je crée mon évènement !</v-btn
            >
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
<style lang="scss" scoped>
.main-banner {
  position: relative;

  &__gradient-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px;
    background: #f0f5f9;
    background: linear-gradient(180deg, rgba(240, 245, 249, 0) 0%, rgba(255, 255, 255, 1) 100%);
    border-radius: var(--v-border-radius);
    z-index: 999;
  }
}
</style>

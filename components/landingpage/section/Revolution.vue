<template>
  <div class="revotion bg-bglight py-14">
    <v-container class="maxWidth">
      <v-row class="justify-center">
        <v-col cols="12" md="9" class="text-center">
          <h1
            class="text-48 text-grey200 bannerTitle"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Crée ton événement, de A à Z, comme un grand.
          </h1>
          <p
            class="my-6 font-weight-semibold text-grey100 text-h5 mb-12"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Imaginer, connecter, vivre.
          </p>
          <div
            class="mt-6 d-sm-flex gap-3 justify-center"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <v-btn
              :to="token ? '/dashboards/dashboard-client' : '/auth/Login'"
              color="primary"
              rounded="pill"
              class="mt-sm-0 mt-4 lp-btn-shadow m-btn-full btn-custom-lg mb-sm-0 mb-4"
              size="large"
              >Je crée mon évènement !</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="">
      <div class="d-flex flex-row mt-sm-8 mt-5 overflow-hidden">
        <div class="slider-group">
          <img src="/images/landingpage/slider/slider-group.png" />
        </div>
        <div class="slider-group">
          <img src="/images/landingpage/slider/slider-group.png" />
        </div>
        <div class="slider-group">
          <img src="/images/landingpage/slider/slider-group.png" />
        </div>
        <div class="slider-group">
          <img src="/images/landingpage/slider/slider-group.png" />
        </div>
        <div class="slider-group">
          <img src="/images/landingpage/slider/slider-group.png" />
        </div>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
const token = useCookie('token');
</script>

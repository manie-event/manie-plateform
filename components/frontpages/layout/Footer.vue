<script setup lang="ts">
import { footerContact, footerMedia } from '@/_mockApis/front-pages/PagesData';
import LogoLight from '@/public/images/logos/logo-manie-footer.png';
import { Icon } from '@iconify/vue';
import manieFooterDroits from '/images/logos/logo-footer-droits.png';
</script>

<template>
  <div class="bg-bgdark">
    <v-container class="max-width-1218 py-0">
      <div class="space-p-96">
        <v-row>
          <v-col cols="12" lg="3" sm="6">
            <img :src="LogoLight" alt="Logo" class="logo-manie" />
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <div class="footer__double-category">
              <h5 class="text-20">Mentions légales</h5>
              <div class="d-flex flex-column ga-4">
                <div v-for="item in footerContact" :key="item.titre">
                  <h4 class="footer-title">
                    <a :href="item.link"> {{ `${item.titre}: ` }}</a>
                  </h4>
                  <h5>{{ item.description }}</h5>
                </div>
              </div>
              <div>
                <h5 class="text-17 mb-sm-8">Notre FAQ</h5>
                <NuxtLink to="/front-pages/Faq-client"><p>FAQ spécial client</p></NuxtLink>
                <NuxtLink to="/front-pages/Faq-prestataire"
                  ><p>FAQ spécial Prestataire</p></NuxtLink
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="3" sm="6">
            <h5 class="text-17 mb-sm-8 mb-6">Nous contacter</h5>
            <div class="d-flex flex-column ga-4">
              <div v-for="item in footerMedia" :key="item.titre">
                <h4 class="footer-title">
                  {{ `${item.titre}: ` }}
                </h4>
                <h5>{{ item.description }}</h5>
              </div>
            </div>
          </v-col>

          <v-col cols="12" lg="3" sm="6">
            <h5 class="text-17 mb-sm-8 mb-6">Suivez-nous</h5>
            <div class="contact-form__contact">
              <div class="contact-form__reseaux">
                <NuxtLink to="https://www.instagram.com/manie_event/" target="_blank"
                  ><Icon icon="ant-design:instagram-outlined" height="22" width="22"></Icon
                ></NuxtLink>
                <NuxtLink to="https://www.linkedin.com/company/manie-event/" target="_blank"
                  ><Icon icon="ant-design:linkedin-outlined" height="22" width="22"></Icon
                ></NuxtLink>
                <NuxtLink
                  to="https://www.facebook.com/share/167V8whUYT/?mibextid=wwXIfr"
                  target="_blank"
                  ><Icon
                    icon="ant-design:facebook-outlined"
                    color="white"
                    height="22"
                    width="22"
                  ></Icon
                ></NuxtLink>
              </div>
              <p>contact@manie-events.fr</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-divider class="opacity-30"></v-divider>
      <div class="py-sm-10 py-6">
        <div class="d-sm-flex justify-space-between">
          <div class="d-flex ga-2 justify-sm-start justify-center align-center">
            <img :src="manieFooterDroits" width="60" alt="logo" />
          </div>
          <span class="text-white text-15 text-grey100 align-center d-flex"
            >Tous droits réservés à Manie et son équipe.</span
          >
        </div>
      </div>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
  }
}
.footer__double-category {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-title {
  color: #cccc;
  font-weight: medium;
  font-size: 0.8rem;
}
.logo-manie {
  width: 15rem;
}

.contact-form {
  &__contact {
    display: flex;
    flex-direction: column;
  }
  &__reseaux {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    a {
      color: white;
      height: 22px;
      margin: 1rem 0;
      width: 22px;
    }
  }
}
</style>

<script setup lang="ts">
import errorToaster from '@/components/common/errorToaster.vue';
import type { ContactMessage } from '@/models/contact/contactMessage';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const { sendContactForm } = useContactService();

const items = ref(['Question générale', 'Demande de rendez-vous',  'Formules', 'Partenariat et collaboration']);

const message = ref<ContactMessage>({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  subject: 'Question générale',
  message: '',
});
</script>
<template>
  <div class="pt-3 pb-14">
    <v-container class="max-width-1218 ">
      <v-row>
        <v-col cols="12" lg="4">
          <div
            class="contact-form rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative"
          >
            <h4 class="text-18 font-weight-bold mb-4 text-white">On vous écoute !</h4>
            <p class="text-16 font-weight-regular position-relative z-1 text-white">
              Vous avez des questions ou souhaitez en savoir plus sur nos services ? <br />
              N'hésitez pas à nous contacter.
            </p>
            <v-divider class="my-10 opacity-20 text-white"></v-divider>
            <p>
              <b class="text-white"
                >Avant toute chose, avez-vous pensé à regarder si votre question figure dans le FAQ
                ?</b
              >
              <div class="d-flex justify-space-between">
            <v-btn class="contact-form__btn" to="/front-pages/Faq-client">FAQ Client</v-btn>
            <v-btn class="contact-form__btn" to="/front-pages/Faq-prestataire">FAQ Presta</v-btn>
            </div>
            </p>
            <v-divider class="my-10 opacity-20"></v-divider>
            <div class="contact-form__reseaux">
              <NuxtLink to="https://www.instagram.com/manie.event/" target="_blank"
                ><Icon icon="ant-design:instagram-outlined" height="22" width="22"></Icon
              ></NuxtLink>
              <NuxtLink to="https://www.linkedin.com/company/manie-event/" target="_blank"
                ><Icon icon="ant-design:linkedin-outlined" height="22" width="22"></Icon
              ></NuxtLink>
              <NuxtLink
                to="https://www.facebook.com/share/167V8whUYT/?mibextid=wwXIfr"
                target="_blank"
                ><Icon icon="ant-design:facebook-outlined" height="22" width="22"></Icon
              ></NuxtLink>
            </div>
            <div class="mt-4">
              <div class="d-flex">
                <Icon icon="iconamoon:email-light" width="24" height="24" style="color: white; stroke-width: 0.3;"></Icon><p class="text-white ml-3">contact@manie-event.fr</p>
              </div>
              <div class="d-flex">
                <Icon icon="iconamoon:location-pin-light" width="24" height="24" style="color: white; stroke-width: 0.3;"></Icon><p class="text-white ml-3">Rue de Gerland 69007 LYON</p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <v-card elevation="10">
            <v-card-item>
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Prénom * </v-label>
                  <v-text-field
                    hide-details
                    variant="outlined"
                    placeholder="Jean"
                    color="primary"
                    v-model="message.firstName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Nom *</v-label>
                  <v-text-field
                    hide-details
                    variant="outlined"
                    placeholder="Martin"
                    color="primary"
                    v-model="message.lastName"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Numéro de téléphone *</v-label>
                  <v-text-field
                    hide-details
                    variant="outlined"
                    placeholder="xxx xxx xxxx"
                    color="primary"
                    v-model="message.phoneNumber"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">Email *</v-label>
                  <v-text-field
                    hide-details
                    variant="outlined"
                    placeholder="Votre adresse email"
                    color="primary"
                    v-model="message.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-label class="mb-2 font-weight-medium">Je vous contacte au sujet de :</v-label>
                  <v-select
                    :items="items"
                    item-title="state"
                    item-value="abbr"
                    label="Select"
                    return-object
                    single-line
                    variant="outlined"
                    hide-details
                    v-model="message.subject"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-label class="mb-2 font-weight-medium">Message</v-label>
                  <v-textarea
                    placeholder="Bonjour, j'aimerais en savoir plus sur vos services..."
                    auto-grow
                    rows="4"
                    variant="outlined"
                    hide-details
                    v-model="message.message"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" class="text-md-end">
                  <v-btn
                    color="rgb(var(--v-theme-peach))"
                    style="color: rgb(var(--v-theme-background)) "
                    class="px-5"
                    rounded="pill"
                    size="large"
                    flat
                    href=""
                    target="_blank"
                    @click="sendContactForm(message)"
                    >Envoyer</v-btn
                  >
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Teleport to="body">
      <errorToaster />
      <CommonSuccessToaster></CommonSuccessToaster>
    </Teleport>
  </div>
</template>
<style lang="scss" scoped>
.contact-form {
  background: rgb(var(--v-theme-darkbg));
  background: rgb(var(--v-theme-darkbg));
  &__reseaux {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    justify-content: flex-start;
    gap: 0.8rem;
    a {
      color: white;
      height: 22px;
      text-decoration: none;
    }
  }
  &__btn{
  font-weight: bold;
  margin: 20px 0;
  background: transparent;
  border: 1px solid white;
  color: rgb(var(--v-theme-background));
  a {
      text-decoration: none;
      text-decoration: none;
    }
  }
  &__btn{
  font-weight: bold;
  margin: 20px 0;
  background: transparent;
  border: 1px solid white;
  color: rgb(var(--v-theme-background));
  a {
      text-decoration: none;
    }
  }
}
</style>

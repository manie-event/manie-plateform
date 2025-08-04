<script setup lang="ts">
import errorToaster from '@/components/common/errorToaster.vue';
import type { ContactMessage } from '@/models/contact/contactMessage';
import { ref } from 'vue';
import { useContactService } from '~/services/useContactService';

const select = ref();
const items = ref(['Question générale', 'Demande de rendez-vous', 'option 3', 'option 4']);

const { sendContactForm } = useContactService();

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
  <div class="pt-3 bg-background pb-14">
    <v-container class="max-width-1218">
      <v-row>
        <v-col cols="12" lg="4">
          <div
            class="bg-primary rounded-lg pa-7 position-relative overflow-hidden mt-md-0 mt-6 position-relative"
          >
            <img
              src="/images/front-pages/background/contact-icon.png"
              class="position-absolute end-0 top-0 rtlImg"
            />
            <h4 class="text-18 font-weight-bold mb-4">A votre service</h4>
            <p class="text-16 font-weight-regular position-relative z-1">
              Vous avez des questions ou souhaitez en savoir plus sur nos services ? N'hésitez pas à
              nous contacter.
            </p>
            <v-divider class="my-10 opacity-20"></v-divider>
            <h4 class="text-18 font-weight-bold mb-4">
              Basé à Lyon disponible en <br />
              Rhône-Alpes
            </h4>
            <p class="text-16 font-weight-regular">
              Visit us in person or find our contact details to connect with us directly.
            </p>
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
                    color="primary"
                    class="px-5"
                    rounded="pill"
                    size="large"
                    flat
                    href=""
                    target="_blank"
                    @click="sendContactForm(message)"
                    >Envoyez votre message</v-btn
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

<script setup lang="ts">
import { Form } from 'vee-validate';
import { computed, ref } from 'vue';
import type { BillingInfo } from '../../../../../models/cart/billingInfo';

const props = defineProps({
  dialog: Boolean,
});
const emit = defineEmits(['update:dialog']);

const value = computed({
  get() {
    return props.dialog;
  },
  set(value) {
    emit('update:dialog', value);
  },
});
const billingInfo = ref<BillingInfo>({
  codePostal: '',
  ville: '',
  adresse: '',
  pays: '',
  nom: '',
  prenom: '',
});
const inline = ref('home');
const rules: any = ref({
  name: (value: string) => value.length > 2 || 'Veuillez renseigner plus de 2 caractères',
});
</script>

<template>
  <v-dialog v-model="value" max-width="600">
    <v-card>
      <v-card-text>
        <div class="d-flex justify-space-between">
          <h3 class="text-h3">Ajouter votre adresse de facturation</h3>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <Form class="py-3">
          <v-row>
            <v-col cols="12" lg="6">
              <v-radio-group v-model="inline" inline hide-details="auto">
                <v-radio label="Domicile" value="home" color="primary"></v-radio>
                <v-radio label="Travail" value="office" color="secondary"></v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="d-flex justify-space-between w-100 ga-4">
                <v-text-field
                  v-model="billingInfo.nom"
                  :rules="[rules.required, rules.name]"
                  label="Nom"
                  variant="outlined"
                  hide-details="auto"
                  :color="billingInfo.nom.length > 2 ? 'success' : 'primary'"
                ></v-text-field>
                <v-text-field
                  v-model="billingInfo.prenom"
                  :rules="[rules.required, rules.name]"
                  label="Prénom"
                  hide-details="auto"
                  variant="outlined"
                  :color="billingInfo.prenom.length > 2 ? 'success' : 'primary'"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="billingInfo.adresse"
                :rules="[rules.required, rules.name]"
                label="Adresse"
                variant="outlined"
                hide-details="auto"
                :color="billingInfo.adresse.length > 2 ? 'success' : 'primary'"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6">
              <div class="d-flex justify-space-between w-100 ga-4">
                <v-text-field
                  v-model="billingInfo.codePostal"
                  :rules="[rules.required, rules.name]"
                  label="Code Postal"
                  variant="outlined"
                  hide-details="auto"
                  :color="billingInfo.codePostal.length > 2 ? 'success' : 'primary'"
                ></v-text-field>
                <v-text-field
                  v-model="billingInfo.ville"
                  :rules="[rules.required, rules.name]"
                  label="Ville"
                  variant="outlined"
                  hide-details="auto"
                  :color="billingInfo.ville.length > 2 ? 'success' : 'primary'"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" lg="6">
              <v-text-field
                v-model="billingInfo.pays"
                :rules="[rules.required, rules.name]"
                label="Country"
                variant="outlined"
                hide-details="auto"
                :color="billingInfo.pays.length > 2 ? 'success' : 'primary'"
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="12" class="text-right">
              <v-btn color="error" type="submit" class="px-3 rounded-pill mr-2">Annuler</v-btn>
              <v-btn
                color="primary"
                type="submit"
                class="px-3 rounded-pill"
                @click="setBillingInfo(billingInfo)"
                >Ajouter à mes adresses</v-btn
              >
            </v-col>
          </v-row>
        </Form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

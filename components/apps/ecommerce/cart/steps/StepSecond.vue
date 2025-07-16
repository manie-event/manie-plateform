<script setup lang="ts">
import { ref } from 'vue';
import AddAddress from './AddAddress.vue';
import AddressCard from './AddressCard.vue';
import OrderSummary from './OrderSummary.vue';

const store = useCartStore();
const { cart, addresses } = storeToRefs(store);

const dialog = ref(false);
</script>

<template>
  <v-row>
    <div class="d-flex align-center justify-space-between mt-8 w-100 px-3">
      <h4 class="text-h5">Votre adresse de facturation</h4>
      <div class="">
        <v-btn size="small" color="primary" class="ml-auto" @click="dialog = true"
          ><PlusIcon size="16" /> Ajouter une adresse
        </v-btn>
        <AddAddress :dialog="dialog" />
      </div>
    </div>
    <v-col cols="12">
      <v-row>
        <v-col lg="4" md="4" cols="12" v-for="(adresse, index) in addresses" :key="index">
          <AddressCard
          nom: adresse.nom,
          prenom: adresse.prenom,
          adresse: adresse.adresse,
          codePostal: adresse.codePostal,
          ville: adresse.ville,
          pays: adresse.pays
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" lg="8">
      <div class="p-3">
        <OrderSummary />
      </div>
    </v-col>
  </v-row>
</template>

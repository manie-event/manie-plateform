<script setup lang="ts">
import { ref } from 'vue';
// icons
import { UserIcon, BuildingArchIcon, MailIcon, PhoneIcon, Message2Icon } from 'vue-tabler-icons';
</script>
<template>
  <v-row class="align-center mb-3">
    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
      <v-label class="font-weight-medium" for="binm">Name</v-label>
    </v-col>
    <v-col cols="12" sm="9">
      <v-text-field
        color="primary"
        id="binm"
        variant="outlined"
        type="text"
        placeholder="John Deo"
        hide-details
      >
        <template v-slot:prepend-inner>
          <UserIcon stroke-width="1.5" size="22" class="text-medium-emphasis mr-3" />
        </template>
      </v-text-field>
    </v-col>
  </v-row>
  <v-row class="align-center mb-3">
    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
      <v-label class="font-weight-medium" for="bicmp">Company</v-label>
    </v-col>
    <v-col cols="12" sm="9">
      <v-text-field
        color="primary"
        id="bicmp"
        variant="outlined"
        type="text"
        placeholder="ACME Inc."
        hide-details
      >
        <template v-slot:prepend-inner>
          <BuildingArchIcon stroke-width="1.5" size="22" class="text-medium-emphasis mr-3" />
        </template>
      </v-text-field>
    </v-col>
  </v-row>
  <v-row class="align-center mb-3">
    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
      <v-label class="font-weight-medium" for="bieml">Email</v-label>
    </v-col>
    <v-col cols="12" sm="9">
      <v-text-field
        color="primary"
        id="bieml"
        variant="outlined"
        type="email"
        placeholder="john.deo"
        hide-details
      >
        <template v-slot:prepend-inner>
          <MailIcon stroke-width="1.5" size="22" class="text-medium-emphasis mr-3" />
        </template>
      </v-text-field>
    </v-col>
  </v-row>
  <v-row class="align-center mb-3">
    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
      <v-label class="font-weight-medium" for="biph">Phone No</v-label>
    </v-col>
    <v-col cols="12" sm="9">
      <v-text-field
        color="primary"
        id="biph"
        variant="outlined"
        type="text"
        placeholder="412 2150 451"
        hide-details
      >
        <template v-slot:prepend-inner>
          <PhoneIcon stroke-width="1.5" size="22" class="text-medium-emphasis mr-3" />
        </template>
      </v-text-field>
    </v-col>
  </v-row>
  <v-row class="align-center mb-3">
    <v-col cols="12" sm="3" class="pb-sm-3 pb-0">
      <v-label class="font-weight-medium" for="bimsg2">Message</v-label>
    </v-col>
    <v-col cols="12" sm="9">
      <v-textarea
        auto-grow
        variant="outlined"
        placeholder="Hi, Do you  have a moment to talk Jeo ?"
        rows="2"
        color="primary"
        row-height="25"
        shaped
        hide-details
        id="bimsg2"
        type="textarea"
      >
        <template v-slot:prepend-inner>
          <Message2Icon stroke-width="1.5" size="22" class="text-medium-emphasis mr-3" />
        </template>
      </v-textarea>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="9" offset-sm="3">
      <v-btn color="primary" rounded="pill">Send</v-btn>
    </v-col>
  </v-row>
</template>

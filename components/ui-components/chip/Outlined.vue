<script setup lang="ts">
import { ref } from 'vue';
import { MoodSmileIcon, CircleXIcon } from 'vue-tabler-icons';
</script>
<template>
  <div class="d-flex flex-wrap align-center gap-3">
    <v-chip variant="outlined" class="text-body-2">
      <MoodSmileIcon class="mr-2" start size="20" /> Default Filled
    </v-chip>
    <v-chip variant="outlined" class="text-body-2">
      <MoodSmileIcon class="mr-2" start size="20" /> Default Deletable
      <CircleXIcon class="ml-2" start size="20" />
    </v-chip>
    <v-chip variant="outlined" color="primary" class="text-body-2">
      <v-avatar start size="25">
        <img src="/images/profile/user-1.jpg" width="25" />
      </v-avatar>
      Primary Filled
    </v-chip>
    <v-chip variant="outlined" color="primary" class="text-body-2">
      <v-avatar start size="25">
        <img src="/images/profile/user-1.jpg" width="25" />
      </v-avatar>
      Primary Deletable
      <CircleXIcon class="ml-2" start size="20" />
    </v-chip>
    <v-chip variant="outlined" color="secondary" class="text-body-2">
      <MoodSmileIcon class="mr-2" start size="20" /> Secondary Filled
    </v-chip>
    <v-chip variant="outlined" color="secondary" class="text-body-2">
      <MoodSmileIcon class="mr-2" start size="20" /> Secondary Deletable
      <CircleXIcon class="ml-2" start size="20" />
    </v-chip>
    <v-chip variant="outlined" color="success" class="text-body-2">
      <v-avatar start size="25">
        <img src="/images/profile/user-2.jpg" width="25" />
      </v-avatar>
      Default Filled
    </v-chip>
    <v-chip variant="outlined" color="success" class="text-body-2">
      <v-avatar start size="25">
        <img src="/images/profile/user-2.jpg" width="25" />
      </v-avatar>
      Default Deletable
      <CircleXIcon class="ml-2" start size="20" />
    </v-chip>
    <v-chip variant="outlined" color="warning" class="text-body-2">
      <MoodSmileIcon class="mr-2" start size="20" /> Default Filled
    </v-chip>
    <v-chip variant="outlined" color="warning" class="text-body-2">
      <MoodSmileIcon class="mr-2" start size="20" /> Default Deletable
      <CircleXIcon class="ml-2" start size="20" />
    </v-chip>
    <v-chip variant="outlined" color="error" class="text-body-2">
      <v-avatar start size="25">
        <img src="/images/profile/user-5.jpg" width="25" />
      </v-avatar>
      Default Filled
    </v-chip>
    <v-chip variant="outlined" color="error" class="text-body-2">
      <v-avatar start size="25">
        <img src="/images/profile/user-5.jpg" width="25" />
      </v-avatar>
      Default Deletable
      <CircleXIcon class="ml-2" start size="20" />
    </v-chip>
  </div>
</template>

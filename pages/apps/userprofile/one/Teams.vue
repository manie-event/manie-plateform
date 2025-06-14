<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { HeartIcon, UsersIcon, TrashIcon } from 'vue-tabler-icons';

// components
import ProfileBannerOne from '@/components/apps/user-profile/ProfileBannerOne.vue';
import { useFollowersStore } from '@/stores/apps/userprofile/followers';

const store = useFollowersStore();

onMounted(() => {
  store.fetchFollowers();
});

const getfollowers: any = computed(() => {
  return store.followers;
});
const searchValue = ref('');
// dropdown data
const actionDD = ref([
  { title: 'Favorite', icon: HeartIcon },
  { title: 'Edit Friend List', icon: UsersIcon },
  { title: 'Remove', icon: TrashIcon },
]);
const page = ref({ title: 'Social Profile' });

const filteredCards = computed(() => {
  return getfollowers.value.filter((card: any) => {
    return card.name.toLowerCase().includes(searchValue.value.toLowerCase());
  });
});
</script>

<template>
  <ProfileBannerOne />
  <div class="mx-sm-5">
    <v-row class="justify-content-end mt-5">
      <v-col cols="12">
        <div class="d-sm-flex align-center mb-5">
          <h3 class="text-h3 font-weight-semibold">
            Followers
            <v-chip size="x-small" class="ml-2 elevation-0" variant="elevated" color="secondary">{{
              filteredCards.length
            }}</v-chip>
          </h3>
          <v-sheet width="250" class="ml-0 ml-sm-auto mt-3 mt-sm-0">
            <v-text-field
              color="primary"
              hide-details
              variant="outlined"
              placeholder="Search Followers"
              density="compact"
              prepend-inner-icon="mdi-magnify"
              v-model="searchValue"
            >
            </v-text-field>
          </v-sheet>
        </div>

        <v-row>
          <v-col cols="12" md="4" sm="6" v-for="(card, i) in filteredCards" :key="i">
            <v-card elevation="10">
              <v-card-text class="pa-6">
                <div class="d-flex align-center gap-3">
                  <v-avatar size="40">
                    <img :src="card.avatar" :alt="card.avatar" width="40" />
                  </v-avatar>
                  <div class="w-50">
                    <h6 class="text-h5 font-weight-semibold">{{ card.name }}</h6>
                    <span class="text-truncate d-flex align-center gap-2 text-grey100">
                      <mapPinIcon size="14" />
                      <span class="text-truncate w-50">{{ card.location }}</span>
                    </span>
                  </div>
                  <div class="ml-auto">
                    <v-btn v-if="card.follow == 1" variant="outlined" color="primary">
                      Followed</v-btn
                    >
                    <v-btn v-else color="primary"> Follow</v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import {
  AppsIcon,
  CircleDotIcon,
  DragDropIcon,
  FolderIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from 'vue-tabler-icons';
const props = defineProps(['icon']);
const component = props.icon;
// List 1,3 Data
const list1 = shallowRef([
  {
    name: 'Sample Page',
    icon: AppsIcon,
    id: 1,
    link: '/basic/list',
  },
  {
    name: 'Elements',
    icon: CircleDotIcon,
    id: 2,
    link: '',
  },
  {
    name: 'Page Layouts',
    icon: FolderIcon,
    id: 3,
    link: '',
  },
]);
</script>
<template>
  <v-list disabled>
    <v-card variant="outlined" class="py-2">
      <v-list-item
        class="mb-2"
        v-for="(list, i) in list1"
        :value="list"
        rounded="md"
        :key="i"
        color="primary"
      >
        <template v-slot:prepend>
          <component :is="list.icon" size="20" stroke-width="1.5" class="mr-2" />
        </template>
        <v-list-item-title v-text="list.name"></v-list-item-title>
      </v-list-item>
    </v-card>
  </v-list>
</template>

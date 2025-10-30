<script setup lang="ts">
import { useNotesStore } from '@/stores/notesStore';
import { ref } from 'vue';
import type { eventModel } from '~/models/events/eventModel';
import { colorVariation } from '~~/_mockApis/apps/notes/index';

const props = defineProps<{
  event?: eventModel;
}>();

const store = useNotesStore();
const { addNote } = store;

// common components
const dialog = ref(false);
const title = ref('');
const color = ref('primary');

const colorset = (btcolor: any) => {
  return (color.value = btcolor);
};

const handleAddNote = () => {
  addNote(props.event?.uuid || '', {
    id: Date.now(), // ou laissez vide, sera généré automatiquement
    title: title.value,
    content: '',
    color: color.value,
    datef: new Date().toISOString(),
  });

  dialog.value = false;
  title.value = '';
};
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->

  <v-sheet>
    <v-btn color="primary" @click="dialog = true">+</v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-text>
          <h4 class="text-h6 mb-4">Ajoutez un memo</h4>
          <v-textarea outlined name="Note" v-model="title"></v-textarea>
          <h4 class="text-h6 mt-4 mb-4">Séléctionnez une couleur</h4>
          <div class="d-flex gap-3 align-center">
            <v-btn
              icon
              v-for="btcolor in colorVariation"
              :key="btcolor.id"
              size="x-small"
              :color="btcolor.color"
              @click="colorset(btcolor.color)"
            >
              <CheckIcon width="16" v-if="color === btcolor.color" />
            </v-btn>
          </div>

          <div class="pt-6 pb-3 d-flex gap-2">
            <v-btn color="primary" @click="handleAddNote" class="pa-3">Enregistrer</v-btn>
            <v-btn color="error" @click="dialog = false" class="pa-3">Fermer</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

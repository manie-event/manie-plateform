<script setup lang="ts">
import { colorVariation } from '@/_mockApis/components/notes';
import { useNotesStore } from '@/stores/notesStore';
import { ref } from 'vue';
import type { eventModel } from '~/models/events/eventModel';

const props = defineProps<{
  event?: eventModel;
}>();

const store = useNotesStore();
const { addNote } = store;

// Modal
const dialog = ref(false);

// Champs
const title = ref('');
const content = ref('');
const color = ref('primary');

const selectColor = (btcolor: string) => {
  color.value = btcolor;
};

const handleAddNote = () => {
  addNote(props.event?.uuid || '', {
    id: Date.now(),
    title: title.value,
    content: content.value,
    color: color.value,
    datef: new Date().toISOString(),
  });

  // reset
  dialog.value = false;
  title.value = '';
  content.value = '';
  color.value = 'primary';
};
</script>

<template>
  <v-sheet>
    <v-btn
      style="background: rgb(var(--v-theme-thirdy)); color: white; text-decoration: none"
      @click="dialog = true"
    >
      +
    </v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-text>
          <h4 class="text-h6 mb-4">Nouvelle note</h4>

          <!-- Champ titre -->
          <v-text-field label="Titre" variant="outlined" v-model="title" />

          <!-- Champ description -->
          <v-textarea label="Description" variant="outlined" v-model="content" class="mt-4" />

          <h4 class="text-h6 mt-4 mb-4">Sélectionnez une couleur</h4>

          <div class="d-flex gap-3 align-center">
            <v-btn
              icon
              v-for="btcolor in colorVariation"
              :key="btcolor.id"
              size="x-small"
              :color="btcolor.color"
              @click="selectColor(btcolor.color)"
            >
              <CheckIcon width="16" v-if="color === btcolor.color" />
            </v-btn>
          </div>

          <div class="pt-6 pb-3 d-flex gap-2">
            <v-btn color="primary" @click="handleAddNote" class="pa-3"> Enregistrer </v-btn>
            <v-btn color="error" @click="dialog = false" class="pa-3"> Fermer </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>

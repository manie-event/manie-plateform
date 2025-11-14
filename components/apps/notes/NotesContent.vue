<template>
  <v-dialog max-width="600" width="100%" v-model="openContentModal">
    <v-sheet>
      <!-- Si une note est sélectionnée -->
      <v-sheet v-if="selectedNote" class="pa-6">
        <h4 class="text-h6 mb-4">Titre</h4>
        <v-text-field outlined name="Note title" v-model="selectedNote.title"></v-text-field>

        <h4 class="text-h6 mt-4 mb-4">Description</h4>
        <v-textarea outlined name="Note description" v-model="selectedNote.content"></v-textarea>

        <h4 class="text-h6 mt-4 mb-4">Changer la couleur</h4>
        <div class="d-flex gap-3 align-center justify-lg-space-between">
          <div>
            <v-btn
              icon
              v-for="btcolor in colorVariation"
              :key="btcolor.id"
              size="x-small"
              class="mr-3"
              :color="btcolor.color"
              @click="selectedNote.color = btcolor.color"
            >
              <CheckIcon width="16" v-if="selectedNote.color === btcolor.color" />
            </v-btn>
          </div>
          <v-btn
            @click="
              updateAll;
              openContentModal = false;
            "
            >Valider</v-btn
          >
        </div>
      </v-sheet>

      <!-- Si aucune note sélectionnée -->
      <v-sheet v-else class="pa-6">
        <v-alert type="error" title="Oops" text="No note selected. Please select a note."></v-alert>
      </v-sheet>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { colorVariation } from '@/_mockApis/components/notes';
import { useNotesStore } from '@/stores/notesStore';
import { storeToRefs } from 'pinia';
import type { eventModel } from '~/models/events/eventModel';
const store = useNotesStore();
const { selectedNote } = storeToRefs(store);
const { updateNote } = store;

const props = defineProps<{
  event?: eventModel;
}>();

const openContentModal = defineModel<boolean>('openContentModal', { default: false });
// computed bidirectionnelle pour pouvoir modifier la note

const updateAll = () => {
  if (selectedNote.value && props.event?.uuid) {
    updateNote(props.event.uuid, selectedNote.value.id, {
      title: selectedNote.value.title,
      content: selectedNote.value.content,
      color: selectedNote.value.color,
    });
  }
};
</script>

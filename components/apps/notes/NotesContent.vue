<script setup lang="ts">
import { useNotesStore } from '@/stores/notesStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { CheckIcon } from 'vue-tabler-icons';
import { colorVariation } from '~~/_mockApis/apps/notes/index';
const store = useNotesStore();
const { selectedNote } = storeToRefs(store);
const { updateNote } = store;

const openContentModal = defineModel<boolean>('openContentModal', { default: false });
// computed bidirectionnelle pour pouvoir modifier la note
const editableNote = computed({
  get: () => selectedNote.value,
  set: (newNote) => {
    if (newNote) updateNote(newNote);
  },
});
</script>

<template>
  <v-dialog max-width="600" width="100%" v-model="openContentModal">
    <v-sheet>
      <v-sheet class="py-3 pl-6 pr-4 d-flex align-center">
        <h4 class="text-h6 font-weight-semibold">Edit Notes</h4>
      </v-sheet>
      <v-divider></v-divider>

      <!-- Si une note est sélectionnée -->
      <v-sheet v-if="editableNote" class="pa-6">
        <h4 class="text-h6 mb-4">Change Title</h4>
        <v-textarea
          outlined
          name="Note"
          v-model="editableNote.title"
          @blur="updateNote(editableNote)"
        ></v-textarea>

        <h4 class="text-h6 mt-4 mb-4">Change Notes Color</h4>
        <div class="d-flex gap-3 align-center">
          <v-btn
            icon
            v-for="btcolor in colorVariation"
            :key="btcolor.id"
            size="x-small"
            :color="btcolor.color"
            @click="updateNote({ ...editableNote, color: btcolor.color })"
          >
            <CheckIcon width="16" v-if="editableNote.color === btcolor.color" />
          </v-btn>
        </div>
      </v-sheet>

      <!-- Si aucune note sélectionnée -->
      <v-sheet v-else class="pa-6">
        <v-alert
          type="error"
          title="Oops"
          text="No note selected Prout. Please select a note."
        ></v-alert>
      </v-sheet>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import addNote from '@/components/apps/notes/AddNote.vue';
import { useNotesStore } from '@/stores/notesStore';
import { computed, ref, Teleport } from 'vue';
import NotesContent from '~~/components/apps/notes/NotesContent.vue';

const store = useNotesStore();
const { notes, filteredNotes } = storeToRefs(store);
const { selectNote, deleteNote } = store;

const getNotes = computed(() => {
  return notes.value;
});

const openContentModal = ref(false);

const NoteItem = getNotes;

const searchValue = ref('');
</script>

<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <div class="pa-6">
    <div class="d-flex mb-6 align-center justify-lg-space-between">
      <h4 class="text-h6 mb-4 font-weight-semibold">All Notes</h4>
      <addNote />
    </div>
    <!-- <div class="mb-5">
      <v-text-field
        variant="outlined"
        v-model="searchValue"
        append-inner-icon="mdi-magnify"
        placeholder="Search Notes"
        hide-details
        density="compact"
      ></v-text-field>
    </div> -->
    <div class="d-flex gap-4">
      <v-sheet
        :class="'note-sheet pa-6 pb-4 rounded-md cursor-pointer mb-4  bg-light' + note.color"
        v-for="note in filteredNotes"
        :key="note.id"
        @click="
          {
            (selectNote(note.id), (openContentModal = true));
          }
        "
        v-if="filteredNotes.length > 0"
      >
        <h6 :class="'text-h6 text-truncate text-' + note.color">
          {{ note.title }}
        </h6>
        <div class="d-flex mt-3 align-center">
          <small class="text-subtitle-2 opacity-25">{{
            new Date(note.datef).toLocaleDateString()
          }}</small>
          <v-btn icon variant="text" class="ml-auto" size="x-small" @click="deleteNote(note.id)"
            ><v-tooltip activator="parent" location="top">Delete Note</v-tooltip
            ><TrashIcon size="18"
          /></v-btn>
        </div>
      </v-sheet>
    </div>
    <v-sheet v-if="filteredNotes.length === 0" class="pa-6">
      <v-alert type="error" title="Oops" text="No notes found Prout. Please add a note."></v-alert>
    </v-sheet>
  </div>

  <Teleport to="body">
    <NotesContent v-model:open-content-modal="openContentModal" />
  </Teleport>
</template>
<style lang="scss">
.note-sheet {
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.02);
  }
}
</style>

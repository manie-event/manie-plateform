<template>
  <!-- ---------------------------------------------------- -->
  <!-- Table Basic -->
  <!-- ---------------------------------------------------- -->
  <div class="pa-6">
    <div class="d-flex mb-6 align-center justify-lg-space-between">
      <h4 class="text-subtitle-1 mb-4 font-weight-semibold">Carnet de brouillon</h4>
      <addNote :event />
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
        v-for="note in currentEventNotes"
        :key="note.id"
        @click="
          {
            (handleSelectNote(note.id), (openContentModal = true));
          }
        "
        v-if="currentEventNotes.length > 0"
      >
        <h6 :class="'text-h6 text-truncate text-' + note.color">
          {{ note.title }}
        </h6>
        <div class="d-flex mt-3 align-center">
          <small class="text-subtitle-2 opacity-25">{{
            new Date(note.datef).toLocaleDateString()
          }}</small>
          <v-btn
            icon
            variant="text"
            class="ml-auto"
            size="x-small"
            @click.stop="deleteNote(props.event?.uuid!, note.id)"
            ><v-tooltip activator="parent" location="top">Delete Note</v-tooltip
            ><TrashIcon size="18"
          /></v-btn>
        </div>
      </v-sheet>
    </div>
    <v-sheet v-if="currentEventNotes.length === 0" class="pa-6">
      <v-alert type="error">
        <div class="d-flex gap-3">
          <Icon icon="solar:pen-broken" width="24" height="24" />
          <p>Il est temps de créer votre première note</p>
        </div>
      </v-alert>
    </v-sheet>
  </div>

  <Teleport to="body">
    <NotesContent v-model:open-content-modal="openContentModal" :event />
  </Teleport>
</template>
<script setup lang="ts">
import addNote from '@/components/apps/notes/AddNote.vue';
import { useNotesStore } from '@/stores/notesStore';
import { Icon } from '@iconify/vue';
import { computed, ref, Teleport } from 'vue';
import type { eventModel } from '~/models/events/eventModel';
import NotesContent from '~~/components/apps/notes/NotesContent.vue';

const props = defineProps<{
  event?: eventModel;
}>();

const store = useNotesStore();
const { deleteNote, getNotesByEvent, selectNote } = store;

const currentEventNotes = computed(() => getNotesByEvent(props.event?.uuid || ''));

const openContentModal = ref(false);

const handleSelectNote = (noteId: number) => {
  selectNote(props.event?.uuid || '', noteId);
};
</script>
<style lang="scss">
.note-sheet {
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.02);
  }
}
</style>

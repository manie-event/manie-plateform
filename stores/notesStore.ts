import { useLocalStorage } from '@vueuse/core';
import type { Note } from '~/models/notes/notes';

export const useNotesStore = defineStore('notes', () => {
  // LocalStorage persistant pour les notes
  const notes = useLocalStorage<Note[]>('notes', []); // clé en pluriel pour plus de clarté
  const selectedNote = ref<Note | null>(null);
  const searchQuery = ref('');

  const addNote = (note: Note) => {
    // Génération d’un ID unique si besoin
    if (!note.id) note.id = Date.now();
    notes.value.push(note);
  };

  const deleteNote = (noteId: number) => {
    notes.value = notes.value.filter((note) => note.id !== noteId);
    if (selectedNote.value?.id === noteId) {
      selectedNote.value = null;
    }
  };

  const selectNote = (noteId: number) => {
    selectedNote.value = notes.value.find((note) => note.id === noteId) || null;
  };

  const updateNote = (updatedNote: Note) => {
    const index = notes.value.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
      notes.value[index] = { ...updatedNote };
      if (selectedNote.value?.id === updatedNote.id) {
        selectedNote.value = { ...updatedNote };
      }
    }
  };

  const filteredNotes = computed(() => {
    if (!searchQuery.value) return notes.value;
    return notes.value.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    notes,
    selectedNote,
    searchQuery,
    addNote,
    deleteNote,
    selectNote,
    updateNote,
    filteredNotes,
  };
});

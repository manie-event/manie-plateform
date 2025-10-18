import { useLocalStorage } from '@vueuse/core';
import type { Note } from '~/models/notes/notes';

export const useNotesStore = defineStore('notes', () => {
  const notesByEvent = useLocalStorage<EventNotes>('notesByEvent', {});
  const selectedNote = ref<Note | null>(null);
  const selectedEventUuid = ref<string | null>(null);

  const addNote = (eventUuid: string, note: Note) => {
    // Initialiser le tableau pour cet événement s'il n'existe pas
    if (!notesByEvent.value[eventUuid]) {
      notesByEvent.value[eventUuid] = [];
    }

    // Génération d'un ID unique si besoin
    if (!note.id) {
      note.id = Date.now();
    }

    // Ajouter la note au tableau de cet événement
    notesByEvent.value[eventUuid].push(note);
  };

  const getNotesByEvent = (eventUuid: string): Note[] => {
    return notesByEvent.value[eventUuid] || [];
  };

  const selectNote = (eventUuid: string, noteId: number) => {
    if (notesByEvent.value[eventUuid]) {
      const note = notesByEvent.value[eventUuid].find((n) => n.id === noteId);
      if (note) {
        selectedNote.value = note;
        selectedEventUuid.value = eventUuid;
      }
    }
  };

  const deleteNote = (eventUuid: string, noteId: number) => {
    if (notesByEvent.value[eventUuid]) {
      notesByEvent.value[eventUuid] = notesByEvent.value[eventUuid].filter(
        (note) => note.id !== noteId
      );
    }
  };

  const updateNote = (eventUuid: string, noteId: number, updatedNote: Partial<Note>) => {
    const notes = notesByEvent.value[eventUuid];
    if (!notes) return;

    const index = notes.findIndex((n) => n.id === noteId);
    if (index !== -1) {
      const newNote = {
        ...notes[index],
        ...updatedNote,
      };

      notes[index] = newNote;

      // 🪄 Si c’est la note sélectionnée, on la met à jour aussi
      if (selectedNote.value?.id === noteId) {
        selectedNote.value = newNote;
      }
    }
  };

  const clearSelection = () => {
    selectedNote.value = null;
    selectedEventUuid.value = null;
  };

  return {
    notesByEvent,
    selectedNote,
    selectedEventUuid,
    addNote,
    getNotesByEvent,
    deleteNote,
    updateNote,
    selectNote,
    clearSelection,
  };
});

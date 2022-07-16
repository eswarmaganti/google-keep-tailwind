import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { addNotesToDB } from "../api/notes";
const notesStore = (set) => ({
  notes: [],
  addNote: (note) => {
    console.log(JSON.stringify(note));
    fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    set((state) => ({ notes: [note, ...state.notes] }));
  },
  updateNote: (note) =>
    set((state) => ({
      notes: state.notes.map((item) =>
        item.id === note.id ? { ...note } : item
      ),
    })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((item) => item.id !== id),
    })),
});

const useNotesStore = create(devtools(persist(notesStore, { name: "notes" })));

export default useNotesStore;

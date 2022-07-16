import React, { useState, useEffect } from "react";
import AddNotes from "../components/AddNotes";
import NotesList from "../components/NotesList";
import useNotesStore from "../app/notesStore";

const Dashboard = () => {
  //loading the state from zustand
  const notes = useNotesStore((state) => state.notes);

  // local state for holding pinned and unpinned notes
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [unPinnedNotes, setUnPinnedNotes] = useState([]);

  // loading the state while mounting the component
  useEffect(() => {
    const tempPinnedNotes = notes.filter((item) => item.pinned);
    const tempUnPinnedNotes = notes.filter((item) => !item.pinned);
    setPinnedNotes(tempPinnedNotes);
    setUnPinnedNotes(tempUnPinnedNotes);
  }, [notes]);
  return (
    <div>
      <AddNotes />
      <NotesList title="Pinned Notes" notes={pinnedNotes} />
      <NotesList title="Un Pinned Notes" notes={unPinnedNotes} />
    </div>
  );
};

export default Dashboard;

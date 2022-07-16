import React, { useState, useEffect } from "react";
import NotesList from "../components/NotesList";
import useNotesStore from "../app/notesStore";
const Remainders = () => {
  const notes = useNotesStore((state) => state.notes);

  const [remainderNotes, setRemainderNotes] = useState([]);
  useEffect(() => {
    const tempRemainderNotes = notes.filter((item) => item.remainder);
    console.log(tempRemainderNotes);
    setRemainderNotes(tempRemainderNotes);
  }, [notes]);
  return (
    <div>
      <NotesList title="Active Remainders" notes={remainderNotes} />
    </div>
  );
};

export default Remainders;

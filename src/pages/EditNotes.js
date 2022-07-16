import React, { useState, useEffect } from "react";
import UpdateNotes from "../components/UpdateNotes";
import { useParams, Link } from "react-router-dom";
import useNotesStore from "../app/notesStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
const EditNotes = () => {
  const { id } = useParams();
  const notes = useNotesStore((state) => state.notes);
  const [note, setNote] = useState({
    title: "",
    description: "",
    pinned: false,
    remainder: false,
  });
  useEffect(() => {
    const note = notes.filter((note) => note.id === id);
    setNote(note[0]);
  }, [notes]);

  return (
    <div className="py-3">
      <Link to="/">
        <button className="btn btn-sky">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          Back
        </button>
      </Link>
      <h1 className="my-2 text-center font-medium text-xl">Update Notes </h1>
      <UpdateNotes note={note} />
    </div>
  );
};

export default EditNotes;

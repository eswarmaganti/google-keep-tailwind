import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbTack,
  faXmark,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";
import { Link } from "react-router-dom";
import useNotesStore from "../../app/notesStore";

const Notes = ({ note }) => {
  const { id, title, description, pinned, remainder } = note;

  const deleteNote = useNotesStore((state) => state.deleteNote);

  const handleDeleteNotes = () => {
    if (window.confirm("Are you sure, you want to delete this note?")) {
      deleteNote(id);
    }
  };

  return (
    <div className={`note ${pinned ? "bg-neutral-700" : ""} `}>
      <div className="py-2">
        <h4 className="font-medium my-2">{title}</h4>
        <p className="text-sm whitespace-pre">{description}</p>
      </div>

      {note.pinned && (
        <FontAwesomeIcon
          icon={faThumbTack}
          className="absolute -top-2 -right-2 p-2 bg-yellow-400 h-4 w-4 rounded-full text-neutral-800 rotate-45"
        />
      )}
      <div className="actions">
        <Link to={`/edit/notes/${note.id}`} key={note.id}>
          <button className="btn-sm btn-sky">
            <FontAwesomeIcon icon={faPencil} className="h-3 w-3" />
          </button>
        </Link>
        <button className="btn-sm btn-danger" onClick={handleDeleteNotes}>
          <FontAwesomeIcon icon={faXmark} className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default Notes;

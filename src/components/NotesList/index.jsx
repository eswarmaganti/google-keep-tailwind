import React from "react";
import Notes from "../Notes";
import Masonry from "react-masonry-css";

const NotesList = ({ title, notes }) => {
  return (
    <>
      <NotesListSection title={title} notes={notes} />
    </>
  );
};

// component for displaying the notes grid
const NotesListSection = ({ title, notes }) => {
  return (
    <div className="pt-3">
      {notes.length > 0 && <h1 className="text-yellow-400">{title}</h1>}
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid mt-3"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <Notes key={note.id} note={note} />
        ))}
      </Masonry>
    </div>
  );
};

export default NotesList;

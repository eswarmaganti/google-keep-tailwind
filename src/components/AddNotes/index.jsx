import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTimes,
  faFloppyDisk,
  faThumbTack,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Alert from "../utils/Alert";
import useNotesStore from "../../app/notesStore";

const AddNotes = () => {
  //zustand state
  const addNote = useNotesStore((state) => state.addNote);

  // states for notes data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pinned, setPinned] = useState(false);
  const [remainder, setRemainder] = useState(false);

  // state to toggle addnotes
  const [toggleAddNotes, setToggleAddNotes] = useState(false);

  //state for handling form errors
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // state for handling success messages
  const [success, setSuccess] = useState(false);

  const handleAddTitle = (e) => {
    setError(false);
    setErrorMsg("");
    setTitle(e.target.value);
  };
  const handleAddDescription = (e) => {
    setError(false);
    setErrorMsg("");
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || title.length < 3) {
      setError(true);
      setErrorMsg("Invalid Title, please add title (must have min 3 letters)");
      return;
    }
    if (!description || description.length < 3) {
      setError(true);
      setErrorMsg(
        "Invalid Description, please add a description (must have min 3 letters)"
      );
      return;
    }

    // adding a new note to the zustand store
    addNote({ title, description, pinned, remainder });

    // clearing the local state
    setTitle("");
    setDescription("");
    setPinned(false);
    setRemainder(false);

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <div className="addnotescontainer">
      <ToggleButton
        toggleAddNotes={toggleAddNotes}
        setToggleAddNotes={setToggleAddNotes}
      />
      {toggleAddNotes && (
        <form
          className="w-2/4 m-auto p-4 border border-neutral-700 rounded-lg shadow-lg mt-3"
          onSubmit={handleSubmit}
        >
          {error && <Alert type="danger" text={errorMsg} />}
          {success && <Alert type="success" text="Notes saved!!!" />}

          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="add title.."
              value={title}
              onChange={handleAddTitle}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              placeholder="add description.."
              value={description}
              onChange={handleAddDescription}
            ></textarea>
          </div>
          <div className="form-group flex justify-between">
            <button
              type="button"
              className={`btn ${remainder ? "btn-primary" : "btn-inactive"}`}
              onClick={() => setRemainder(!remainder)}
            >
              <FontAwesomeIcon icon={faBell} className="text-xl" />
              add remainder
            </button>
            <button
              type="button"
              className={`btn ${pinned ? "btn-primary" : "btn-inactive"}`}
              onClick={() => setPinned(!pinned)}
            >
              <FontAwesomeIcon icon={faThumbTack} className="text-[1.1rem]" />
              pin notes
            </button>

            {/* ------------- Add Notes Button ---------------*/}
            <button className="btn btn-sky " type="submit">
              <FontAwesomeIcon icon={faFloppyDisk} className="text-[1.1rem]" />
              Save Notes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const ToggleButton = ({ toggleAddNotes, setToggleAddNotes }) => {
  return (
    <div className="flex items-center justify-center gap-10 ">
      <h1>Create your notes here</h1>
      <button
        className={`btn ${toggleAddNotes ? "btn-danger" : "btn-primary"}`}
        onClick={() => {
          setToggleAddNotes(!toggleAddNotes);
        }}
      >
        {toggleAddNotes ? (
          <>
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
            Close Add Notes
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlus} className="text-lg" />
            Toggle Add Notes
          </>
        )}
      </button>
    </div>
  );
};
export default AddNotes;

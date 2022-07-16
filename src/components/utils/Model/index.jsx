import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const index = ({ showModel, setShowModel, action }) => {
  return (
    <>
      {showModel && (
        <div className="model-container">
          <div className="model">
            <div className="flex justify-end">
              <button
                className="btn-sm btn-primary"
                onClick={() => setShowModel(!showModel)}
              >
                <FontAwesomeIcon icon={faXmark} className="text-xl flex " />
              </button>
            </div>
            <p className="font-medium">
              are you sure to continue with this action?
            </p>
            <div className="flex items-center justify-end gap-5">
              <button
                className="btn btn-sky"
                onClick={() => setShowModel(!showModel)}
              >
                Cancel
              </button>
              <button className="btn btn-danger" onClick={() => action()}>
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;

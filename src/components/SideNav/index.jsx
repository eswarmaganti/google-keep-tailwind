import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faTrash,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const SideNav = () => {
  return (
    <ul className="sidenav">
      <NavLink to="">
        {({ isActive }) => (
          <li className={`navlink ${isActive ? "active" : ""}`}>
            <FontAwesomeIcon
              icon={faLightbulb}
              className={isActive ? "" : "text-yellow-400"}
            />
            <span>Notes</span>
          </li>
        )}
      </NavLink>
      <NavLink to="remainders">
        {({ isActive }) => (
          <li className={`navlink ${isActive ? "active" : ""}`}>
            <FontAwesomeIcon
              icon={faBell}
              className={isActive ? "" : "text-yellow-400"}
            />
            <span>Remainders</span>
          </li>
        )}
      </NavLink>
      <NavLink to="trash">
        {({ isActive }) => (
          <li className={`navlink ${isActive ? "active" : ""}`}>
            <FontAwesomeIcon
              icon={faTrash}
              className={isActive ? "" : "text-yellow-400"}
            />
            <span>Trash</span>
          </li>
        )}
      </NavLink>
    </ul>
  );
};

export default SideNav;

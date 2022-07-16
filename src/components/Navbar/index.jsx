import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUser } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <FontAwesomeIcon icon={faLightbulb} className="brandText" />
        <h4 className=" font-medium text-xl">Keep Clone</h4>
      </div>
      <div className="flex items-center justify-between gap-10">
        <input type="text" placeholder="search notes" className="w-[300px]" />
        <FontAwesomeIcon
          icon={faUser}
          className="p-3 bg-neutral-900 text-yellow-400 rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;

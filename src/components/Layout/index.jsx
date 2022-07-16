import Navbar from "../Navbar";
import SideNav from "../SideNav";
import "./index.css";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        <SideNav />
        <div className="layout-container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;

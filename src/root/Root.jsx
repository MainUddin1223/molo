import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

import { NavLink } from "react-router-dom";
import logo from "../../../assets/molo-logo.png";

const Navbar = () => {
  return (
    <header className=" mx-auto  sticky top-0 z-40 bg-[#ef98b3] shadow-lg shadow-[rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset]">
      <nav className="grid grid-cols-3 justify-between items-center font-semibold text-xl xl:w-[80%] mx-auto">
        <ul className="flex">
          <li>
            <NavLink className={"pe-5"} to={"/fish-burger"}>
              Fish Burger
            </NavLink>
            <NavLink className={"pe-5"} to={"/menu"}>
              Menu
            </NavLink>
            <NavLink className={"pe-5"} to={"/about"}>
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center">
          {" "}
          <img src={logo} alt="" />
        </div>
        <ul className="flex justify-end">
          <li className={"ps-5"}>Facebook</li>
          <li className={"ps-5"}>Instagram</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

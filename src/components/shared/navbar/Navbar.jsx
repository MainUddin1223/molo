import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/molo-logo.png";
import ham_menu from "../../../assets/hamburger.png";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <header className=" mx-auto  sticky top-0 z-[9999] bg-[#ef98b3] shadow-lg shadow-[rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset]">
        <nav className="lg:grid hidden grid-cols-3 justify-between items-center font-semibold text-xl lg:w-[80%] mx-auto w-[90%]">
          <ul className="flex text-2xl">
            <li>
              <NavLink className={"pe-5"} to={"/"}>
                HOME
              </NavLink>
              <NavLink className={"pe-5"} to={"/fish-burger"}>
                FISH BURGER
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center">
            {" "}
            <img src={logo} alt="" className="w-64" />
          </div>
          <ul className="flex justify-end items-center text-2xl">
            <NavLink className={"pe-5"} to={"/menu"}>
              MENU
            </NavLink>
            <NavLink className={"pe-5"} to={"/about"}>
              ABOUT
            </NavLink>
            <a
              href="https://www.instagram.com/moloseafood/"
              target="_blank"
              rel="noreferrer"
              className="mx-2"
            >
              <FaInstagram className="text-4xl text-white" />
            </a>
            <a
              href="https://www.facebook.com/mololdn/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineFacebook className="text-4xl text-white" />
            </a>
          </ul>
        </nav>
        <div className="flex justify-between items-center lg:hidden mx-auto w-[90%] ">
          {" "}
          <img src={logo} alt="" className="ml-[-30px] w-48" />
          <img
            onClick={() => setDropdown(!dropdown)}
            src={ham_menu}
            alt=""
            className="w-12 h-12 mr-[-10px]"
            id="dropdownInformationButton"
            data-dropdown-toggle="dropdownInformation"
            type="button"
          />
        </div>
      </header>
      <div
        onClick={(e) => {
          e.preventDefault();
          setDropdown(false);
        }}
        className={`h-[100vh] w-screen fixed top-[75px] z-[999] right-0    ${
          !dropdown && "hidden"
        }`}
      >
        <div className="bg-[#ef98b3] mt-2 absolute  right-[5%] w-3/4 md:w-1/2 z-[999]">
          <ul className="text-center py-2 flex-flex flex-col">
            <li
              className={` text-2xl font-semibold ${
                pathname == "/" && "bg-white mx-2"
              }`}
            >
              <Link to={"/"} className=" block w-[100%] py-4">
                Home
              </Link>
            </li>
            <li
              className={` text-2xl font-semibold ${
                pathname == "/fish-burger" && "bg-white mx-2"
              }`}
            >
              <Link to={"/fish-burger"} className=" block w-[100%] py-4">
                Fish Burger
              </Link>
            </li>
            <li
              className={` text-2xl font-semibold ${
                pathname == "/menu" && "bg-white mx-2"
              }`}
            >
              <Link to="/menu" className=" block w-[100%] py-4">
                Menu
              </Link>
            </li>
            <li
              className={` text-2xl font-semibold ${
                pathname == "/about" && "bg-white mx-2"
              }`}
            >
              <Link to={"/about"} className=" block w-[100%] py-4">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

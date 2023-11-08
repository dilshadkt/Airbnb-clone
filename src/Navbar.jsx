import React, { useContext, useState } from "react";
import logo from "./asset/logo/logo.png";
import { Link } from "react-router-dom";
import MyContext from "./components/contex/Mycontex";
import SideMenu from "./components/sideMenu/SideMenu";
import Login from "./pages/login/Login";

const Navbar = () => {
  const { setsearch, isMenuOpen, setIsMenuOpen } = useContext(MyContext);

  return (
    <>
      <nav className=" h-20 flex mx-20 ">
        <div className=" flex-1 flex items-center ">
          <Link to={"/"}>
            {" "}
            <img alt="logo" src={logo} className="w-32 bg-white " />
          </Link>
        </div>
        <div
          className=" flex-1 flex items-center
      justify-center"
        >
          <input
            type="text"
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Serach"
            className="shadow-md w-96 h-10 rounded-2xl border flex items-center px-3 relative text-gray-500"
          />
        </div>
        <div className=" flex-1 flex items-center justify-end">
          <div className="flex items-center">
            <Link to={"/hoisting"}>
              {" "}
              <span className="text-sm font-medium mx-2 hover:bg-gray-200 px-5 py-3 rounded-full">
                Switch to hoisting
              </span>
            </Link>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 12 15.5147 12 12 12C8.48528 12 3 12 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C9.14508 18.4226 8 15.8462 8 12C8 8.15378 9.14508 5.57736 12 3M12 21C14.8549 18.4226 16 15.8462 16 12C16 8.15378 14.8549 5.57736 12 3M3 12C3 7.02944 7.02944 3 12 3"
                stroke="#09090B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border px-3 py-2 flex items-center justify-center rounded-3xl ml-2 hover:shadow-md"
            >
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.14286H13M1 1H13M1 11.2857H13"
                  stroke="#09090B"
                  strokeWidth="0.857143"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="rounded-full w-7 h-7  bg-black flex items-center justify-center ml-2 relative cursor-pointer">
                <span className="text-white">D</span>
                <div className="absolute -top-2 -right-2 bg-red-600 w-5 h-5 rounded-full flex items-center justify-center text-white">
                  2
                </div>
                {isMenuOpen ? <SideMenu /> : ""}
              </div>
            </div>
          </div>
        </div>
        <Login />
      </nav>
      <hr />
    </>
  );
};

export default Navbar;

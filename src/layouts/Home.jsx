import React, { useContext } from "react";
import Navbar from "../Navbar";
import Footer from "../components/Footer";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HomeLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col ">
      {/* TOP HEADER SECTION  */}
      <div
        className={` h-[63px] ${
          pathname === "/" ? `flex` : `hidden`
        } bg-[rgb(247,247,247)] border  items-center justify-center `}
      >
        <p className="hidden   md:flex underline font-semibold text-[15px]">
          Learn about Guest Favourites, the most loved homes on Airbnb
        </p>
        <p className="block md:hidden underline font-semibold text-[15px]">
          Learn more about icons
        </p>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const AuthHomeLayout = () => {
  const { pathname } = useLocation();
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    <Navigate to={"/login"} />
  ) : (
    <div className="flex flex-col ">
      {/* TOP HEADER SECTION  */}
      <div
        className={` h-[63px] ${
          pathname === "/" ? `flex` : `hidden`
        } bg-[rgb(247,247,247)] border  items-center justify-center `}
      >
        <p className="hidden   md:flex underline font-semibold text-[15px]">
          Learn about Guest Favourites, the most loved homes on Airbnb
        </p>
        <p className="block md:hidden underline font-semibold text-[15px]">
          Learn more about icons
        </p>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export { HomeLayout, AuthHomeLayout };

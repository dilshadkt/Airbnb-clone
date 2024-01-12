import React from "react";
import Navbar from "../Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const HomeLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={`md:hidden h-[63px] ${
          pathname === "/" ? `flex` : `hidden`
        } bg-[rgb(247,247,247)] border  items-center justify-center `}
      >
        <p className="underline font-semibold text-[15px]">
          Learn about Guest Favourites, the most loved homes on Airbnb
        </p>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;

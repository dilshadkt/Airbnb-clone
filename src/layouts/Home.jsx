import React from "react";
import Navbar from "../Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="h-[63px] bg-[rgb(247,247,247)] border flex items-center justify-center ">
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

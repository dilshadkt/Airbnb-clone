import React from "react";
import Navbar from "../Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;

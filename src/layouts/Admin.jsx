import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/admin/navbar/Navbar";
import SideBar from "../pages/admin/navbar/SideBar";
import Footer from "../pages/admin/navbar/Footer";
const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <SideBar />
        <div className="flex-1  ">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

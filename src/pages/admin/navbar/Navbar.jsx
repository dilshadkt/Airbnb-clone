import React from "react";
import logo from "../../../asset/logo/logo.png";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const Navbar = () => {
  return (
    <div className="p-3 px-8 flex border sticky bg-white top-0 left-0 right-0 z-40">
      <div className="flex-1 flex items-center   ">
        <img src={logo} alt="logo" className="w-[120px]" />
      </div>
      <div className="flex-1  flex items-center justify-center">
        <input
          type="text"
          className="w-[70%] border rounded-full h-[70%] p-3"
          placeholder="search "
        />
      </div>
      <div className="flex-1 flex justify-end  items-center">
        <div className="flex items-center">
          <NotificationsActiveIcon />
          <div className="w-8 h-8 ml-[20px] rounded-full flex items-center justify-center bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

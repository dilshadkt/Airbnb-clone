import React from "react";
import Logo from "../asset/logo/logo.png";

const Navbar = () => {
  return (
    <div className=" h-20 flex mx-7   items-center">
      <img src={Logo} alt="logo" className="w-32 h-14" />
    </div>
  );
};

export default Navbar;

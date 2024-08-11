import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Buttons from "../../Buttons";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <header>
      <div className="flex justify-between">
        <h1 className="md:text-3xl font-semibold ">
          Welcome, <span className="text-sm">{currentUser?.firstName} !</span>
        </h1>

        <div onClick={() => navigate("/become-a-host")}>
          <Buttons
            width="md:w-[246px] w-fit text-xs md:text-base"
            title="Complete your listing"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

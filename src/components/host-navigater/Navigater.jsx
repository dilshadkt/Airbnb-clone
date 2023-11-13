import React from "react";
import { useNavigate } from "react-router-dom";

const Navigater = ({ next }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[70px] bg-white  bottom-0 left-0 right-0 fixed flex items-start justify-between px-9">
      <div
        onClick={() => navigate(-1)}
        className="underline font-medium cursor-pointer"
      >
        back
      </div>
      <div
        onClick={() => navigate(`/become-a-host/${next}`)}
        className="bg-rose-400 text-white p-3 font-medium rounded-lg cursor-pointer"
      >
        {next === "structure" ? "Get start" : "Next"}
      </div>
    </div>
  );
};

export default Navigater;

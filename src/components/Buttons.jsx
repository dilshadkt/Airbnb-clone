import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({
  border = "border",
  title = "Message",
  color = "",
  width = "w-[172px]",
  margine = "m-[0px]",
  path,
}) => {
  return (
    <Link to={path ? `/${path}` : ""}>
      {" "}
      <div
        className={`${color} flex items-center cursor-pointer justify-center ${width} rounded-lg ${margine} ${border}`}
      >
        <span
          className={`p-3 font-medium ${
            color === "" ? "text-black" : "text-white"
          } `}
        >
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Buttons;

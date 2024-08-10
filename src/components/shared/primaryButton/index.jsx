import React from "react";

const PrimaryButton = ({ buttonStyle, title, type = "button", onclick }) => {
  const handleOnclick = (e) => {
    if (type !== "submit") {
      e.preventDefault();
      onclick();
    }
  };
  return (
    <button
      type={type}
      onClick={(e) => handleOnclick(e)}
      className={`mt-5 w-full p-3 bg-rose-500 text-white font-semibold rounded-xl ${buttonStyle}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;

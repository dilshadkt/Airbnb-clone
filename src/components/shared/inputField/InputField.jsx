import React from "react";

const InputField = ({
  placeholder,
  fieldStyle,
  required = false,
  type = "text",
  onchange,
  register,
  name,
}) => {
  return register ? (
    <input
      {...register(`${name}`)}
      type={type}
      required={required}
      placeholder={placeholder}
      className={`w-full p-3 border rounded-lg ${fieldStyle}`}
    />
  ) : (
    <input
      onChange={(e) => onchange(e.target.value)}
      type={type}
      required={required}
      placeholder={placeholder}
      className={`w-full p-3 border rounded-lg ${fieldStyle}`}
    />
  );
};

export default InputField;

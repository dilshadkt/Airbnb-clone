import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import axios from "../../../config/axiosConfig";
const Items = ({ list, item }) => {
  const key = Object.keys(item).toString();
  const value = Object.values(item).toString();
  const [title, setTitle] = useState(value);
  const [isEdit, setIsEdit] = useState(true);
  const updateList = () => {
    const data = {};
    data[key] = title;
    setIsEdit(!isEdit);
    value !== title &&
      axios
        .patch(`/listings/${list._id}`, data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  };
  return (
    <div className="my-2 w-fit">
      <div
        className={`${isEdit ? `flex` : `hidden`} group rounded-lg border p-3 `}
      >
        <span>
          {key.toUpperCase()} : {title}
        </span>
        <div
          onClick={() => setIsEdit(!isEdit)}
          className="ml-3 invisible group-hover:visible"
        >
          <EditIcon className="hover:text-red-500" />
        </div>
      </div>
      <div className={`rounded-lg border p-3 ${isEdit ? `hidden` : `flex`}`}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div onClick={() => updateList()} className="ml-3">
          <CheckIcon className="hover:text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Items;

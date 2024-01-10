import React, { useState } from "react";
import cancel from "../../../asset/svg/cancel.svg";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Items from "./Items";
import axios from "../../../config/axiosConfig";
const Update = ({ list, cancelFun }) => {
  const [editImg, setEditImg] = useState(false);
  const [selected, setSelected] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const data = [
    { title: list.title },
    { address: list.address },
    { description: list.description },
    { pricePeNight: list.pricePeNight },
  ];
  const updateList = () => {
    const images = new FormData();
    if (selected) {
      setWaiting(true);
      for (let x of selected) {
        images.append("photos", x);
      }

      axios
        .patch(`/listings/${list._id}`, images, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          setEditImg(!editImg);
          setWaiting(false);
        })
        .catch((err) => console.log(err));
    } else {
      setEditImg(!editImg);
    }
  };
  return (
    <>
      <div className=" bg-black opacity-50 fixed top-0 bottom-0 right-0 left-0  z-10 "></div>
      <div className="w-[50%] h-[600px] bg-white shadow-lg fixed top-[5%] left-0 right-0 m-auto p-5 rounded-xl z-20 overflow-y-scroll">
        <div className="bg-white sticky -top-5 py-2">
          <div
            onClick={() => {
              cancelFun();
              window.location.reload();
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-300  flex-col "
          >
            <img src={cancel} alt="cancel" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-[320px] mt-4 rounded-xl overflow-hidden">
          <div className="relative h-full w-full group flex items-center justify-center">
            {editImg ? (
              <>
                <input
                  type="file"
                  required
                  minLength={5}
                  name="photos"
                  multiple
                  onChange={(e) => setSelected(e.target.files)}
                />
                <div
                  onClick={() => updateList()}
                  className={`absolute invisible ${
                    waiting && `cursor-wait`
                  } right-0 p-3 bg-white rounded-full group-hover:visible top-0`}
                >
                  <CheckIcon />
                </div>
              </>
            ) : (
              <>
                <img
                  src={list.images[0]}
                  alt="main"
                  className=" w-full h-full object-cover"
                />
                <div
                  onClick={() => setEditImg(!editImg)}
                  className="absolute invisible right-0 p-3 bg-white rounded-full group-hover:visible top-0"
                >
                  <EditIcon />
                </div>
              </>
            )}
          </div>
        </div>
        <div className=" my-5  justify-between">
          {data.map((item) => (
            <Items list={list} item={item} />
          ))}
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Update;

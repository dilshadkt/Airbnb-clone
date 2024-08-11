import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigater from "../../../components/host-navigater/Navigater";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch } from "react-redux";
const Photos = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(null);
  const [isNext, setNext] = useState(false);

  const uploadImage = (e) => {
    toast.success("image uploaded", { position: toast.POSITION.TOP_CENTER });
    e.preventDefault();
    dispatch(setForm({ key: "image", value: selected }));
    setNext(true);
  };

  return (
    <div className="flex-1 flex flex-col items-center mt-[5%] justify-center mx-5">
      <h1 className="text-lg md:text-4xl font-semibold">
        Add some photos of your casa particular
      </h1>
      <h4 className="text-gray-500 text-sm md:text-xl mt-2  md:mt-4">
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </h4>
      <form
        method="post"
        className="p-5 m-5 border sm:flex sm:flex-col sm:items-center"
        encType="multipart/form-data"
        onSubmit={(e) => uploadImage(e)}
      >
        <input
          type="file"
          required
          minLength={5}
          name="photos"
          multiple
          onChange={(e) => setSelected(e.target.files)}
        />
        <button className="p-3 text-sm md:text-base mt-3 text-white font-semibold bg-rose-500 rounded-xl sm:mt-4">
          Upload
        </button>
        <ToastContainer />
        {isNext && <Navigater next={"title"} />}
      </form>
    </div>
  );
};

export default Photos;

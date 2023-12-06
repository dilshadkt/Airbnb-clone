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
    <div className="flex-1 flex flex-col items-center mt-[5%] justify-center">
      <h1 className="text-4xl font-semibold">
        Add some photos of your casa particular
      </h1>
      <h4 className="text-gray-500 text-xl mt-4">
        You'll need 5 photos to get started. You can add more or make changes
        later.
      </h4>
      <form
        method="post"
        className="p-5 m-5 border"
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
        <button className="p-3 text-white font-semibold bg-rose-500 rounded-xl">
          Upload
        </button>
        <ToastContainer />
        {isNext && <Navigater next={"title"} />}
      </form>
    </div>
  );
};

export default Photos;

import React, { useState } from "react";
import Navigater from "../../../components/host-navigater/Navigater";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch } from "react-redux";
const Description = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [isNext, setNext] = useState(false);
  const handleChanges = (e) => {
    e.preventDefault();
    dispatch(setForm({ key: "description", value: description }));
    setNext(true);
  };

  return (
    <div className="flex-1 flex flex-col items-center mt-[5%] justify-center sm:mx-5">
      <h1 className="text-4xl font-semibold">Create your description</h1>
      <h4 className="text-gray-500 text-xl mt-4">
        Share what makes your place special.
      </h4>
      <form className=" w-[40%] sm:w-full" onSubmit={(e) => handleChanges(e)}>
        <textarea
          required
          minLength={50}
          className="border w-full my-6 h-[200px]"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="p-3 bg-rose-500 text-white font-semibold rounded-xl">
          Confirm
        </button>
      </form>
      {isNext && <Navigater next={"price"} />}
    </div>
  );
};

export default Description;

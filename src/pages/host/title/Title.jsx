import React, { useState } from "react";
import Navigater from "../../../components/host-navigater/Navigater";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch } from "react-redux";
const Title = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [isNext, setNext] = useState(false);
  const handleChanges = (e) => {
    e.preventDefault();
    dispatch(setForm({ key: "title", value: title }));

    setNext(true);
  };
  return (
    <div className="flex-1 flex flex-col items-center mt-[5%] justify-center mx-5">
      <h1 className=" text-lg md:text-4xl font-semibold">
        Now, let's give your casa particular a title
      </h1>
      <h4 className="text-gray-500 text-sm md:text-xl mt-2 md:mt-4">
        Short titles work best. Have fun with it – you can always change it
        later.
      </h4>
      <form onSubmit={(e) => handleChanges(e)} className=" md:w-[40%] w-full">
        <textarea
          required
          minLength={5}
          maxLength={100}
          className="border w-full my-6 h-[200px]"
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <button className="p-3 bg-rose-500 text-sm md:text-base text-white font-semibold rounded-xl">
          Confirm
        </button>
      </form>
      {isNext && <Navigater next={"description"} />}
    </div>
  );
};

export default Title;

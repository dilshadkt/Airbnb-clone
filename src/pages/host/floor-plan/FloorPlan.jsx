import React, { useState } from "react";
import FloorSlip from "../../../components/FloorPlan/FloorSlip";
import Navigater from "../../../components/host-navigater/Navigater";
import { setForm } from "../../../store/slice/FormSlice";
import { useDispatch, useSelector } from "react-redux";
const FloorPlan = () => {
  const dispatch = useDispatch();
  const form = useSelector((store) => store.formdata.form);
  console.log(form);
  const [isNext, setNext] = useState(false);
  const [guests, setGuest] = useState(1);
  const [bedrooms, setBedroom] = useState(1);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathroom] = useState(0);
  const handleChange = () => {
    dispatch(
      setForm({
        key: "aboutPlace",
        value: {
          guests,
          bedrooms,
          beds,
          bathrooms,
        },
      })
    );

    setNext(true);
  };
  return (
    <div className="w-full flex justify-center h-[78vh] overflow-scroll overflow-x-hidden">
      <div className="w-[40%] sm:w-full sm:mx-5">
        <h1 className="text-3xl font-medium my-4">
          Let's start with the basics
        </h1>
        <div className="my-9">
          <h3 className="font-medium text-lg">
            How many people can stay here?
          </h3>
          <FloorSlip count={guests} setCount={setGuest} title="Guests" />
          <FloorSlip count={bedrooms} setCount={setBedroom} title="Bedrooms" />
          <FloorSlip count={beds} setCount={setBeds} title="Beds" />
          <FloorSlip
            count={bathrooms}
            setCount={setBathroom}
            title="Bathrooms"
          />
          {isNext ? (
            <Navigater next={"stand-out"} />
          ) : (
            <button
              className="p-3 bg-rose-500 text-white font-semibold rounded-xl mt-4"
              onClick={() => handleChange()}
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;

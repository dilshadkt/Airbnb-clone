import { nanoid } from "nanoid";
import React, { Fragment, useState } from "react";
import { destination, guest, tripDates } from "../../constants";

const Filter = ({ FilterOpen, setFilterOpen }) => {
  const [desti, setDesti] = useState(false);
  const [selected, setSelected] = useState("destination");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [date, setDate] = useState(null);
  return (
    <div
      className={`${
        FilterOpen ? `top-0` : `-top-[140%] `
      } fixed w-full flex flex-col justify-between text-sm h-full bg-gradient-to-b from-gray-200 to-gray-50  left-0 right-0 transition-all duration-300  m-auto`}
    >
      {/* HEADER  */}
      <div className="p-4">
        <div
          onClick={() => (
            desti ? setDesti(false) : setSelected(null), setFilterOpen(false)
          )}
          className="w-8 h-8 rounded-full cursor-pointer border border-gray-400 flex items-center justify-center"
        >
          {desti ? (
            <img src="/assets/nav/mobile/back.svg" alt="" className="w-4" />
          ) : (
            <img
              src={"/assets/nav/mobile/cancel.svg"}
              alt="cancel"
              className="w-3"
            />
          )}
        </div>
        {/* DESTINATION  */}
        <div
          onClick={() => setSelected("destination")}
          className={`bg-white shadow-md border border-gray-200 h-fit ${
            selected === "destination" ? `rounded-3xl` : "rounded-xl"
          }  mt-5 py-5 `}
        >
          <div className="px-5">
            {selected === "destination" ? (
              <h4 className="font-bold text-xl">Where to ?</h4>
            ) : (
              <div className="w-full flex items-center font-semibold justify-between">
                <h5 className="text-gray-600 ">Where</h5>
                <span>I'm flexible</span>
              </div>
            )}

            <button
              onClick={() => setDesti(true)}
              className={` ${
                selected === "destination" ? "flex" : "hidden"
              }  border p-4 border-gray-300 mt-4  w-full  items-center justify-start rounded-xl`}
            >
              <img src="/assets/nav/mobile/search.svg" alt="" className="w-5" />
              <span className="ml-3 font-semibold text-gray-600 text-[15px]">
                {selectedDestination
                  ? selectedDestination
                  : "Search destinations"}
              </span>
            </button>
          </div>
          <div
            className={`${
              selected === "destination" ? "flex" : "hidden"
            } my-3  mt-5  items-center gap-4  px-5 overflow-x-auto h-fit scrollbar-hide `}
          >
            {destination.map((item) => (
              <div
                onClick={() => setSelectedDestination(item.title)}
                key={nanoid()}
                className=" min-w-[120px] h-fit"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={` ${
                    selectedDestination === item.title
                      ? `border-gray-600 border-2 opacity-100`
                      : `border-gray-200 border opacity-95`
                  } w-full h-28 object-cover    rounded-xl`}
                />
                <span className="text-[12.5px] pt-4  font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* DATE  */}
        <div
          onClick={() => setSelected("dates")}
          className="flex shadow-md  flex-col font-semibold items-center justify-between px-5 bg-white rounded-xl py-5 my-3"
        >
          <div className="flex items-center justify-between w-full">
            <h5 className="text-gray-600">When</h5>
            <span>Add dates</span>
          </div>
          {selected === "dates" && (
            <section className="fixed left-0 right-0 bottom-2 p-5 top-[141px] rounded-xl bg-white shadow-md flex flex-col justify-between border mx-4">
              <header>
                <h4 className="font-bold text-xl">When is your trip?</h4>
                <nav className="w-full rounded-full gap-2  p-1 bg-gray-200 mt-4 flex items-center justify-between">
                  {tripDates.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setDate(item.title)}
                      className={`${
                        date === item.title && "bg-white"
                      } flex items-center justify-center py-2 font-semibold  rounded-full flex-1`}
                    >
                      {item.title}
                    </div>
                  ))}
                </nav>
              </header>
            </section>
          )}
        </div>
        {/* GUEST  */}
        <div
          onClick={() => setSelected("guest")}
          className="flex  flex-col shadow-md font-semibold items-center justify-between px-5 bg-white rounded-xl py-5 my-3"
        >
          <div className="flex items-center justify-between  w-full">
            {selected === "guest" ? (
              <h4 className="font-bold text-xl">Who's coming?</h4>
            ) : (
              <h5 className="text-gray-600">Who</h5>
            )}
            <span className={`${selected === "guest" && `hidden`}`}>
              Add guest
            </span>
          </div>
          {selected === "guest" && (
            <div className=" mt-3  rounded-3xl   w-full  ">
              <div className="grid grid-cols-1 h-full ">
                {guest.map((item, index) => (
                  <Fragment key={nanoid()}>
                    <div className="flex flex-col justify-around">
                      <div
                        key={item.id}
                        className=" flex items-center justify-between py-[10px] rounded-2xl"
                      >
                        <div className="grid gap-1">
                          <h5 className="font-semibold text-base">
                            {item.title}
                          </h5>
                          <span className=" text-[#757575] text-sm font-normal">
                            {item.desc}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <button className="text-2xl flex items-center hover:border-black/40  justify-center w-9 h-9 rounded-full border">
                            -
                          </button>
                          <span className="mx-3">0</span>
                          <button className="text-2xl flex items-center  hover:border-black/40 justify-center w-9 h-9 rounded-full border">
                            +
                          </button>
                        </div>
                      </div>
                      {index !== guest.length - 1 && (
                        <hr className="w-[95%] mx-auto" />
                      )}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* FOOTER  */}
      <div className="h-20 bg-white px-5 py-3 flex items-center justify-between">
        <button className="underline font-semibold text-base">Clear all</button>
        <button className="flex items-center bg-rose-500 rounded-xl justify-center py-[10px] px-5">
          <img
            src="/assets/nav/mobile/search.svg"
            alt="search"
            className="w-5 filter-white"
          />
          <span className="ml-3 text-base font-semibold text-white ">
            Search
          </span>
        </button>
      </div>
      {/* FILTER IN DESTINATION  */}
      {desti && (
        <div className="fixed bg-white left-0 right-0 mx-auto bottom-0 top-[67px] rounded-t-3xl border border-gray-300 p-6 pt-10 shadow-lg">
          <div className="relative">
            <img
              src="/assets/nav/mobile/search.svg"
              alt="search"
              className="w-4 top-0 absolute bottom-0 my-auto ml-4"
            />
            <input
              type="text"
              className="flex items-center px-5 pl-11 bg-gray-100 w-full py-4 rounded-xl outline-none placeholder-gray-600 "
              placeholder="Search destination"
              onChange={() => {}}
              value={selectedDestination ? selectedDestination : null}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;

import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { destination, guest } from "../../constants";
const FullNavbar = ({ fullNav }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Function to handle click outside
    const handleClickOutside = (event) => {
      if (fullNav.current && !fullNav.current.contains(event.target)) {
        setSelectedItem(null);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", () => {
      window.scrollY > 70 && setSelectedItem(null);
    });

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", () => setSelectedItem(null));
    };
  }, []);
  return (
    <div
      ref={fullNav}
      className={` ${
        window.scrollY === 0 ? "flex" : "hidden"
      }   justify-between text-sm ${
        selectedItem && `bg-[#EBEBEB]`
      }  rounded-full relative`}
    >
      <div
        onClick={() => setSelectedItem("destination")}
        className={`${
          selectedItem === "destination"
            ? `bg-white border border-gray-300/50 shadow-lg`
            : `hover:bg-[#DDDD] `
        } flex-1    py-3 rounded-full `}
      >
        <div className=" pl-[15%] cursor-pointer  border-r hover:border-none">
          <div className="font-medium">where</div>
          <div className="text-gray-600 font-semibold    ">
            Search destination
          </div>
        </div>
      </div>

      <div
        onClick={() => setSelectedItem("checkIn")}
        className={`cursor-pointer ${
          selectedItem === "checkIn"
            ? `bg-white border border-gray-300/50 shadow-lg`
            : `hover:bg-[#DDDD] `
        } rounded-full  flex-initial w-[18%] flex flex-col items-center justify-center`}
      >
        <div className="font-medium">Check in</div>
        <div className="text-gray-600 font-semibold  ">Add dates</div>
      </div>
      <div
        onClick={() => setSelectedItem("checkOut")}
        className={`cursor-pointer ${
          selectedItem === "checkOut"
            ? `bg-white border border-gray-300/50 shadow-lg`
            : `hover:bg-[#DDDD]  `
        } rounded-full   flex-initial w-[18%] flex flex-col items-center justify-center`}
      >
        <div className="font-medium">check out</div>
        <div className="text-gray-600 font-semibold  ">Add dates</div>
      </div>
      <div
        onClick={() => setSelectedItem("guest")}
        className={`cursor-pointer flex ${
          selectedItem === "guest"
            ? `bg-white border border-gray-300/50 shadow-lg`
            : `hover:bg-[#DDDD] `
        } px-3   rounded-full flex-1 justify-between items-center`}
      >
        <div
          className={`border-l px-4 ${
            selectedItem === "guest" ? `border-none` : `hover:border-none`
          } `}
        >
          <div className="font-medium">who </div>
          <div className="text-gray-600 font-semibold  ">Add guest</div>
        </div>
        <div className="w-fit px-[13px] h-12 bg-red-500 rounded-full text-white flex items-center justify-center">
          <SearchIcon className="transform  scale-90" />

          <span
            className={`font-semibold  transition-all duration-300 ${
              selectedItem ? "  ml-1 pr-2 opacity-100" : "w-0 opacity-0"
            } overflow-hidden`}
          >
            Search
          </span>
        </div>
      </div>
      {selectedItem === "destination" && (
        <div className="absolute -bottom-[410px] lg:py-4 xl:py-8 px-5 rounded-3xl w-[50%] max-h-[400px] h-fit bg-white border-gray-200/70 border shadow-xl z-50">
          <h4 className="font-bold"> Search by region</h4>
          <div className="grid grid-cols-3 gap-1 mt-7">
            {destination.map((item) => (
              <div
                key={item.id}
                className="hover:bg-[#EFEFEF] md:p-1 xl:p-2 rounded-2xl"
              >
                <img
                  src={item.image}
                  alt=""
                  className="border border-gray-200 rounded-xl"
                />
                <p className="mt-2 font-semibold text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedItem === "guest" && (
        <div className="absolute -bottom-[410px] right-0 py-8 px-5 rounded-3xl w-[50%] h-[400px] bg-white border-gray-200/70 border shadow-xl z-50">
          <div className="grid grid-cols-1 h-full ">
            {guest.map((item, index) => (
              <>
                <div className="flex flex-col justify-around">
                  <div
                    key={item.id}
                    className=" flex items-center justify-between p-2 rounded-2xl"
                  >
                    <div className="grid gap-1">
                      <h5 className="font-semibold text-[17px]">
                        {item.title}
                      </h5>
                      <span className=" text-[#757575] font-semibold">
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
              </>
            ))}
          </div>
        </div>
      )}
      {["checkIn", "checkOut"].includes(selectedItem) && (
        <div className="absolute -bottom-[560px] left-0 right-0 mx-auto py-8 px-5 rounded-3xl w-full h-[550px] overflow-y-auto bg-white border-gray-200/70 border shadow-xl z-50">
          <h4 className="font-bold"> Search by region</h4>
        </div>
      )}
    </div>
  );
};

export default FullNavbar;

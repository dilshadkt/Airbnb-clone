import React, { useEffect, useState } from "react";
import save from "../../../asset/svg/save.svg";
import share from "../../../asset/svg/share.svg";
import heritage from "../../../asset/svg/heritage.svg";
import Host from "../../../components/Host";
import Offers from "../../../components/Offers";
import Buttons from "../../../components/Buttons";
import PaymentCard from "../../../components/PaymentCard";
import Amenties from "../../../components/Amenties";
import left from "../../../asset/svg/leftArrow.svg";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import RoomsShimmer from "../../../components/shimmer/Rooms/Rooms";
import { useSelector, useDispatch } from "react-redux";
import { setImg } from "../../../store/slice/payment";

const Rooms = () => {
  const dispatch = useDispatch();
  const amenties = useSelector((store) => store.user.amenties);
  const [queryParams] = useSearchParams();
  const [rooms, setRooms] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [serchParams] = useSearchParams();
  const [isTrip, setIsTrip] = useState(false);
  const type = serchParams.get("id");
  const {
    bedrooms,
    maxGuest,
    bathrooms,
    pricePeNight,
    address,
    title,
    images,
    availability,
    hostid,
    hostName,
  } = rooms;
  const canelTrip = () => {
    setIsTrip(false);
    const tripId = serchParams.get("tripId");
    axios
      .delete(`/book/trip/${tripId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsTrip(serchParams.get("booked") === "true" ? true : false);
    axios
      .get(`/listings?id=${type}`)
      .then((res) => {
        setRooms(res.data);
        dispatch(setImg(res.data.images[0]));
      })
      .catch((err) => console.log(err));
  }, [type, dispatch, serchParams]);

  return rooms === "" ? (
    <RoomsShimmer />
  ) : (
    <>
      <div className="mx-20 pb-8 sm:mx-5">
        {isTrip && (
          <div className="p-6 border flex justify-between rounded-xl bg-green-200 my-[2%]   border-lime-600">
            <h3>To cancel trip</h3>
            <div
              onClick={() => canelTrip()}
              className="text-white hover:text-green-700 hover:font-semibold cursor-pointer"
            >
              cancel
            </div>
          </div>
        )}

        <h1 className="text-2xl font-semibold my-5">{title}</h1>
        <div className="flex justify-between">
          <div className="flex">
            <span className="underline mr-3">1 reviews</span>
            <span className="underline">{address}</span>
          </div>
          <div className=" flex">
            <div className="flex items-center">
              <img src={share} alt="share icon" />
              <span className="ml-2">share</span>
            </div>
            <div className="flex items-center ml-4">
              <img src={save} alt="save icon" />
              <span>save</span>
            </div>
          </div>
        </div>
        <div className="w-full h-[400px] flex mt-7 rounded-2xl overflow-hidden  relative">
          <div className=" flex-1  bg-gray-400 mr-2">
            <img
              src={images[0]}
              alt="room1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1  h-full flex flex-col">
            <div className="flex-1  mb-2 flex overflow-hidden">
              <div className="flex-1 mr-2 bg-gray-400">
                <img
                  src={images[1]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1  bg-gray-400 ">
                <img
                  src={images[2]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1  flex overflow-hidden">
              <div className="flex-1 mr-2 bg-gray-400">
                {" "}
                <img
                  src={images[3]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 bg-gray-400 ">
                {" "}
                <img
                  src={images[4]}
                  alt="room2 "
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsGalleryOpen(true)}
            className="bg-white px-5 cursor-pointer py-2 flex items-center justify-center border absolute rounded-xl bottom-5 right-5"
          >
            <span className="font-medium">show all </span>
          </div>
        </div>
        <div className="flex sm:flex-col mt-8">
          <div className="flex-1">
            <div className=" items-center justify-between flex">
              <h1 className="text-2xl">
                Room in a heritage hotel hosted by {hostName}
              </h1>
              <div className="w-11 h-11 rounded-full overflow-hidden bg-black flex items-center justify-center ">
                <img
                  src={images[0]}
                  alt="icon"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="text-lg font-light">
              <span>{maxGuest} guests</span>.
              <span className="mx-2">{bedrooms} bedrooms</span>.
              <span className="mx-2">7 beds</span>
              {bathrooms} bathrooms
            </div>

            <hr />
            <div className="my-5">
              <div className="flex">
                <div className="flex-initial w-[15%]  flex items-center justify-center px-4 py-6">
                  <img src={heritage} alt="heritage" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-medium">
                    Room in a heritage hotel
                  </h3>
                  <span className="text-gray-400">
                    Your own room in a home, plus access to shared spaces.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-initial w-[15%]  flex items-center justify-center px-4 py-6">
                  <img src={heritage} alt="heritage" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-medium">
                    Room in a heritage hotel
                  </h3>
                  <span className="text-gray-400">
                    Your own room in a home, plus access to shared spaces.
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex-initial w-[15%]  flex items-center justify-center px-4 py-6">
                  <img src={heritage} alt="heritage" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-base font-medium">
                    Room in a heritage hotel
                  </h3>
                  <span className="text-gray-400">
                    Your own room in a home, plus access to shared spaces.
                  </span>
                </div>
              </div>
            </div>
            <hr />
            {/* host details */}
            <Host userIcon={images[0]} hostid={hostid} />
            <h3 className="font-semibold text-2xl">About this place</h3>
            <div className="text-base font-light my-3">
              Fort Tiracol is one of North Goa's most iconic forts turned into
              boutique hotel, just minutes from the Tiracol Jetty. You’ll love
              my place because of the comfortable bed, the high ceilings, the
              unrivaled views of the sea on one side and the river on the other,
              the food at our signature restaurant - The Tavern, the traditional
              Portuguese furniture, the location and service. Fort Tiracol is
              good for couples, solo adventurers & families
            </div>
            <div className="underline font-semibold my-5 cursor-pointer">
              Show more
            </div>
            <hr />
            <Offers />
          </div>
          <div className="flex-initial w-[40%] sm:w-full flex justify-center ">
            <PaymentCard
              night={pricePeNight}
              maxGuest={maxGuest}
              propertyId={queryParams.get("id")}
              availability={availability}
            />
          </div>
        </div>
        <hr />
        <h3 className="font-semibold text-2xl my-5">Seaside Luxury</h3>
        <p className="font-light mb-5">
          Each Airbnb Luxe reservation comes with a Trip Designer, your
          concierge, trip planner, and local destination expert. They know this
          home inside out.
        </p>
        <Buttons title="Message a trip designer" width="w-[246px]" />
        {amenties ? (
          <>
            {(document.body.style.overflow = "hidden")}
            <Amenties />
          </>
        ) : (
          <>{(document.body.style.overflow = "")}</>
        )}
        <div
          className={`bg-white absolute top-0 right-0 left-0  p-5 ${
            isGalleryOpen ? `` : `hidden`
          }`}
        >
          <div className="flex justify-between">
            <div
              onClick={() => setIsGalleryOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <img src={left} alt="left icon" />
            </div>

            <div className=" flex">
              <div className="flex items-center">
                <img src={share} alt="share icon" />
                <span className="ml-2">share</span>
              </div>
              <div className="flex items-center ml-4">
                <img src={save} alt="save icon" />
                <span>save</span>
              </div>
            </div>
          </div>
          <div className="my-9 flex justify-center">
            <div className="w-2/4 bg-red-500 h-fit">
              {rooms.images.map((item, index) => (
                <div key={index} className="w-full">
                  <img src={item} alt="gallery" className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;

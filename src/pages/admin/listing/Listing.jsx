import React, { useEffect, useState } from "react";
import carf from "../../../asset/card/card2.webp";
import save from "../../../asset/svg/save.svg";
import share from "../../../asset/svg/share.svg";
import heritage from "../../../asset/svg/heritage.svg";
import Host from "../../../components/Host";
import Offers from "../../../components/Offers";
import left from "../../../asset/svg/leftArrow.svg";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Listing = () => {
  const [serchParams] = useSearchParams();
  console.log(serchParams);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [rooms, setRooms] = useState("");
  const navigate = useNavigate();
  const { bedrooms, maxGuest, bathrooms, address, title, images, hostid } =
    rooms;
  const propertyId = serchParams.get("id");
  const status = serchParams.get("status");
  useEffect(() => {
    axios
      .get(`/listings?id=${propertyId}`)
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => console.log(err));
  }, [propertyId]);

  const acceptProperty = (id) => {
    axios
      .patch(`admine/property/newProperty/${id}`)
      .then((res) => {
        navigate("/admin/newProperty");
      })
      .catch((err) => console.log(err));
  };
  const rejectProperty = (id) => {
    axios
      .delete(`listings/${id}`)
      .then((res) => navigate("/admin/newProperty"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-20 pb-8 ">
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
            src={images?.[0]}
            alt="room1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1  h-full flex flex-col">
          <div className="flex-1  mb-2 flex overflow-hidden">
            <div className="flex-1 mr-2 bg-gray-400">
              <img
                src={images?.[1]}
                alt="room2 "
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1  bg-gray-400 ">
              <img
                src={images?.[2]}
                alt="room2 "
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-1  flex overflow-hidden">
            <div className="flex-1 mr-2 bg-gray-400">
              <img
                src={images?.[3]}
                alt="room2 "
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 bg-gray-400 ">
              {" "}
              <img
                src={images?.[4]}
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
      <div className="flex  mt-8">
        <div className="flex-1">
          <div className=" items-center justify-between flex">
            <h1 className="text-2xl">
              Room in a heritage hotel hosted by {hostid}
            </h1>
            <div className="w-11 h-11 rounded-full overflow-hidden bg-black flex items-center justify-center ">
              <img
                src={carf}
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

          <Host userIcon={carf} />
          <h3 className="font-semibold text-2xl">About this place</h3>
          <div className="text-base font-light my-3">
            Fort Tiracol is one of North Goa's most iconic forts turned into
            boutique hotel, just minutes from the Tiracol Jetty. You’ll love my
            place because of the comfortable bed, the high ceilings, the
            unrivaled views of the sea on one side and the river on the other,
            the food at our signature restaurant - The Tavern, the traditional
            Portuguese furniture, the location and service. Fort Tiracol is good
            for couples, solo adventurers & families
          </div>
          <div className="underline font-semibold my-5 cursor-pointer">
            Show more
          </div>
          <hr />
          <Offers />
        </div>
        <div className="flex-initial w-[40%] flex justify-center "></div>
      </div>
      <div
        className={`bg-white absolute top-[70px] right-0 left-0  p-5 ${
          isGalleryOpen ? `` : `hidden`
        }`}
      >
        <div className="flex justify-between ">
          <div
            onClick={() => setIsGalleryOpen(false)}
            className=" left-0 top-2/4  w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300"
          >
            <img src={left} alt="left icon" />
          </div>

          <div className=" flex relative">
            <div className=" flex items-center">
              <img src={share} alt="share icon" />
              <span className="ml-2">share</span>
            </div>
            <div className="flex items-center ml-4">
              <img src={save} alt="save icon" />
              <span>save </span>
            </div>
          </div>
        </div>
        <div className="my-9 flex justify-center">
          <div className="w-2/4 bg-red-500 h-fit">
            {rooms?.images?.map((item) => (
              <div className="w-full">
                <img src={item} alt="gallery" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {status === "true" && (
        <div className="flex p-5 ">
          <div
            onClick={() => acceptProperty(propertyId)}
            className="px-5 py-2 bg-green-500 text-white rounded-xl font-medium cursor-pointer"
          >
            ACCEPT
          </div>
          <div
            onClick={() => rejectProperty(propertyId)}
            className="px-5 py-2 bg-red-500 text-white mx-2 rounded-xl font-medium cursor-pointer"
          >
            REJECT
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;

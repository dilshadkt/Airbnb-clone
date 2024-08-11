import React, { useEffect, useState } from "react";
import listpad from "../../../asset/svg/listpad.svg";
import Header from "../../../components/hoisting/header-section";
import HelpSection from "../../../components/hoisting/help-section";
import ResourceSection from "../../../components/hoisting/resource-section";
import ListShimmer from "../../../components/shimmer/list/ListShimmer";
import axios from "../../../config/axiosConfig";
import notfound from "./not.png";
import Reservation from "./reservation/Reservation";

const Hoisting = () => {
  const [resrvation, setReservation] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [fileterdReservation, setFilteredReservation] = useState([]);
  const [checkout, setCheckout] = useState(0);
  const [currenlty, setCurrently] = useState(0);
  const [arrving, setArriving] = useState(0);
  const [selected, setSelected] = useState([]);

  const checkingOut = (e) => {
    const text = e.target.textContent.split(" ")[0];
    setSelected(text);
    switch (text) {
      case "checking":
        setFilteredReservation(checkout);
        break;
      case "Currently":
        setFilteredReservation(currenlty);
        break;
      case "Arriving":
        setFilteredReservation(arrving);
        break;
      case "Pending":
        setFilteredReservation(null);
        break;
      default:
        setFilteredReservation(resrvation);
    }
  };
  useEffect(() => {
    axios
      .get(`/book/stay`)
      .then((res) => {
        setReservation(res.data);
        setIsloading(false);
        setFilteredReservation(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    let dateObj = new Date();
    const checkouts = resrvation?.filter(
      (item) =>
        new Date(JSON.parse(item.checkoutDate)).toDateString() >
        new Date().toDateString()
    );
    setCheckout(checkouts);
    const currentlys = resrvation?.filter(
      (item) =>
        new Date(JSON.parse(item.checkInDate)).toDateString() ===
        new Date().toDateString()
    );
    setCurrently(currentlys);
    const arriving = resrvation?.filter(
      (item) =>
        new Date(JSON.parse(item.checkInDate)) <
        dateObj.setDate(dateObj.getDate() + 7)
    );
    setArriving(arriving);
  }, [resrvation]);

  return (
    <div className="md:m-20 m-5 ">
      <Header /> {/* header section */}
      <div className="flex justify-between my-6 mt-8">
        <h4 className="text-base  md:text-xl font-medium">Your reservations</h4>
        <span
          onClick={() => {
            setFilteredReservation(resrvation);
          }}
          className="underline  text-xs md:text-base font-medium cursor-pointer"
        >
          All reservation ({resrvation.length})
        </span>
      </div>
      <div className="md:flex hidden">
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("checking") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          checking out <span className="font-medium">({checkout.length})</span>
        </div>
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("Currently") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          Currently hosting ({currenlty.length})
        </div>
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("Arriving") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          Arriving soon ({arrving.length})
        </div>
        <div
          onClick={(e) => checkingOut(e)}
          className={`${
            selected.includes("Pending") && `bg-black text-white`
          } border rounded-full px-6 py-2 mr-3 cursor-pointer hover:border-slate-950`}
        >
          Pending reviews(0)
        </div>
      </div>
      {isLoading ? (
        <ListShimmer />
      ) : resrvation.length === 0 ? (
        <div className="w-full bg-gray-100 flex items-center justify-center min-h-[239px] rounded-xl my-7">
          <div className=" flex flex-col items-center">
            <img src={listpad} alt="list pad" />
            <h4 className="text-center w-[172px] text-sm mt-2">
              You dont have any guest checking out today or tommorow
            </h4>
          </div>
        </div>
      ) : (
        <div className="my-[5%]">
          <div className="flex w-full p-3 bg-red-400 rounded-xl text-white">
            <ul className="flex justify-around w-full mr-[4%] text-xs md:text-base">
              <li>Peoperty</li>
              <li>checkIn date</li>
              <li>checkOut date</li>
              <li>booking date</li>
              <li>total</li>
            </ul>
          </div>
          {fileterdReservation ? (
            fileterdReservation.map((item, index) => (
              <Reservation key={index} item={item} />
            ))
          ) : (
            <div className="flex  items-center justify-center">
              <img src={notfound} alt="not found" />
            </div>
          )}
        </div>
      )}
      <ResourceSection />
      <HelpSection />
    </div>
  );
};

export default Hoisting;

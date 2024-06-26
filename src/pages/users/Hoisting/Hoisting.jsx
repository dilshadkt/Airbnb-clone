import React, { useContext, useEffect, useState } from "react";
import Buttons from "../../../components/Buttons";
import listpad from "../../../asset/svg/listpad.svg";
import help1 from "../../../asset/svg/help1.svg";

import { useNavigate } from "react-router-dom";
import axios from "../../../config/axiosConfig";
import Reservation from "./reservation/Reservation";
import ListShimmer from "../../../components/shimmer/list/ListShimmer";
import notfound from "./not.png";
import { AuthContext } from "../../../context/AuthContext";
import { help, resource } from "../../../constants";

const Hoisting = () => {
  const [resrvation, setReservation] = useState([]);
  const [fileterdReservation, setFilteredReservation] = useState([]);
  const [checkout, setCheckout] = useState(0);
  const [currenlty, setCurrently] = useState(0);
  const [arrving, setArriving] = useState(0);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("NewUser"));
  const { currentUser } = useContext(AuthContext);

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
        console.log(res.data);

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
      <div className="flex justify-between">
        <h1 className="md:text-3xl font-semibold  text-xl">
          Welcome,{currentUser.firstName} !{" "}
        </h1>

        <div onClick={() => navigate("/become-a-host")}>
          <Buttons width="md:w-[246px] w-fit" title="Complete your listing" />
        </div>
      </div>
      <div className="flex justify-between my-6 mt-8">
        <h4 className="  text-xl font-medium">Your reservations</h4>
        <span
          onClick={() => {
            setFilteredReservation(resrvation);
          }}
          className="underline font-medium cursor-pointer"
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
      {resrvation === false ? (
        <div className="w-full bg-gray-100 flex items-center justify-center min-h-[239px] rounded-xl my-7">
          <div className=" flex flex-col items-center">
            <img src={listpad} alt="list pad" />
            <h4 className="text-center w-[172px] text-sm mt-2">
              You dont have any guest checking out today or tommorow
            </h4>
          </div>
        </div>
      ) : resrvation.length === 0 ? (
        <ListShimmer />
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
      <h4 className="text-xl font-medium"> We’re here to help</h4>
      <div className="flex flex-col my-6">
        {help.map((item) => (
          <div
            key={item.id}
            className="border my-2 md:my-0 rounded-xl p-5 flex mr-6"
          >
            <div className=" flex-initial w-[15%] flex items-center justify-center">
              <img src={item.icon} alt="icons" className="w-10 opacity-70" />
            </div>
            <div className="flex-1 ml-3   h-fit">
              <h4 className="text-base font-medium">{item.title}</h4>
              <p className="text-sm max-w-[350px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h4 className="text-xl font-medium">Resources and tips</h4>
      <div className="my-6  w-full  grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {resource.map((item) => (
          <div
            key={item.id}
            className=" border-2 flex flex-col items-center rounded-3xl cursor-pointer"
          >
            <img
              src={item.image}
              alt="help one"
              className="w-full object-fill"
            />
            <h4 className="py-6 text-sm md:text-base text-center">
              {item.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hoisting;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import rating from "../asset/svg/rating.svg";
import arrow from "../asset/svg/Arrow.svg";
import LikeHeart from "../asset/card/LikeHeart";
import MyContext from "./contex/Mycontex";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginOpen } from "../store/slice/Auth";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const login = useSelector((store) => store.user.isLogin);
  const { isLiked, setIsLliked } = useContext(MyContext);

  const [currentImg, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const addTowhishList = (id) => {
    setIsLliked((prev) => [...prev, id]);
    axios
      .post(`/addWishList/${user._id}?propertyId=${id}`)
      .then((res) => {
        setIsLliked(res.data);
        localStorage.setItem("like", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="flex-1 min-w-[260px]    group  lg:max-w-[20%] xl:max-w-[23.4%] md:max-w-[40%] h-full mb-10 cursor-pointer z-0 mx-3"
      onClick={() => navigate(`/rooms?id=${data._id}`)}
    >
      <div className="w-full h-80  items-center justify-center relative ">
        <div
          onClick={
            login
              ? (e) => {
                  e.stopPropagation();

                  addTowhishList(data._id);
                }
              : (e) => {
                  e.stopPropagation();
                  dispatch(loginOpen(true));
                }
          }
          className={`absolute right-3 top-3 w-8 h-8 ${
            isLiked.includes(data._id) ? "bg-rose-400" : "bg-white"
          }  rounded-full flex items-center justify-center `}
        >
          <LikeHeart fill={isLiked.includes(data._id) ? "white" : "black"} />
        </div>
        <div className="absolute w-full  opacity-0 group-hover:opacity-100    px-4 top-2/4 flex justify-between">
          <div
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(
                currentImg === 0 ? data.images.length - 1 : currentImg - 1
              );
            }}
            className="w-8 h-8 bg-white flex items-center  justify-center rounded-full hover:scale-105"
          >
            <img
              src={arrow}
              alt="arrow icons"
              className="rotate-90 opacity-50 w-4 object-cover"
            />
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(
                currentImg >= data.images.length - 1 ? 0 : currentImg + 1
              );
            }}
            className="w-8 h-8 bg-white flex items-center justify-center rounded-full hover:scale-105"
          >
            <img
              src={arrow}
              alt="arrow icons"
              className="-rotate-90 opacity-50 w-4"
            />
          </div>
        </div>
        <img
          alt="img"
          src={data.images[currentImg]}
          className="w-full h-full object-cover  rounded-xl "
        />
      </div>
      <div className="px-2">
        <div className="flex justify-between ">
          <span className="font-medium mt-5">
            {data?.title?.slice(0, 16)}...
          </span>
          <span className="flex items-center">
            <img src={rating} alt="raitng icon" />
            {data.rating}
          </span>
        </div>
        <div className="text-gray-500 font-light">374 kilometer away</div>
        <div className="text-gray-500 font-light">1-6 Nov</div>
        <div className="flex">
          <span className="font-medium">₹{data.pricePeNight}</span>
          <span className="font-light ml-2">night</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

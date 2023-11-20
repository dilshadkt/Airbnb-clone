import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../../components/contex/Mycontex";
import WishListCard from "../../../components/WishListCard";
import axios from "axios";

const WishList = () => {
  const { user, setIsLliked } = useContext(MyContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/addWishList/${user._id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [user._id]);
  const remove = (id) => {
    axios
      .delete(`/addWishList/${user._id}?propertyId=${id}`)
      .then((res) => {
        setData(res.data);
        setIsLliked(res.data.map((item) => item.propertyId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-20 my-10">
      <h1 className="text-3xl font-semibold">Wishlists</h1>

      <div className="my-10 ">
        {data.length ? (
          <WishListCard data={data} remove={remove} />
        ) : (
          <div>
            <h3 className="text-xl font-medium">Create your first wishlist</h3>
            <p className="text-sm text-gray-500  w-[30%] py-4">
              As you search, click the heart icon to save your favourite places
              and Experiences to a wishlist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;

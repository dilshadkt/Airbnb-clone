import React, { useContext } from "react";
import MyContext from "../../../components/contex/Mycontex";
import WishListCard from "../../../components/WishListCard";

const WishList = () => {
  const { datas, setDatas } = useContext(MyContext);
  const result = datas.filter((item) => item.whishlist === true && true);

  const removeWhichList = (id) => {
    const filtered = datas.map((item) =>
      item.id === id ? { ...item, whishlist: null } : item
    );
    setDatas(filtered);
  };

  return (
    <div className="mx-20 my-10">
      <h1 className="text-3xl font-semibold">Wishlists</h1>

      <div className="my-10">
        {result.length ? (
          <WishListCard remove={removeWhichList} />
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

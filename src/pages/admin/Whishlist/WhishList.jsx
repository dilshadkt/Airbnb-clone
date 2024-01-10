import React, { useEffect, useState } from "react";
import axios from "../../../config/axiosConfig";
import Card from "./card/Card";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
const WhishList = () => {
  const [whishlist, setWhishList] = useState(null);
  useEffect(() => {
    axios
      .get("/addWishList/all")
      .then((res) => {
        setWhishList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return !whishlist ? (
    <ShimmerUi />
  ) : (
    <div className="h-full">
      <Card data={whishlist} />
    </div>
  );
};

export default WhishList;

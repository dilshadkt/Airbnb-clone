import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card/Card";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
const WhishList = () => {
  const [whishlist, setWhishList] = useState(null);
  useEffect(() => {
    axios
      .get("/addWishList")
      .then((res) => setWhishList(res.data))
      .catch((err) => console.log(err));
  }, []);
  return !whishlist ? (
    <ShimmerUi />
  ) : (
    <div>
      <Card data={whishlist} />
    </div>
  );
};

export default WhishList;

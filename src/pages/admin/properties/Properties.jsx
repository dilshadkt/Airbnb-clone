import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import axios from "axios";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
const Properties = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    axios
      .get("/listings")
      .then((data) => setDatas(data.data))
      .catch((err) => console.log(err));
  }, []);
  return !datas ? (
    <ShimmerUi />
  ) : (
    <div>
      <div className="px-3 my-[2%]">
        <h2 className="text-2xl font-semibold">Properties</h2>
      </div>
      <div className="flex flex-wrap">
        {datas.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
};

export default Properties;

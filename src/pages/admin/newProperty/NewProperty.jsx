import React, { useEffect, useState } from "react";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
import axios from "axios";
import Card from "../properties/card/Card";

const NewProperty = () => {
  const [newProperty, setNewProperty] = useState([]);
  useEffect(() => {
    axios
      .get("/admine/property/newProperty")
      .then((res) => setNewProperty(res.data))
      .catch((err) => console.log(err));
  }, []);
  return newProperty.length ? (
    <div className="h-full">
      <div className="px-3 my-[2%]">
        <h2 className="text-2xl font-semibold">Properties</h2>
      </div>
      <div className="flex flex-wrap">
        {newProperty.map((item) => (
          <Card data={item} status={true} />
        ))}
      </div>
    </div>
  ) : (
    <ShimmerUi />
  );
};

export default NewProperty;

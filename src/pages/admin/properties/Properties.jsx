import React from "react";
import Card from "./card/Card";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
import { useSelector } from "react-redux";
const Properties = () => {
  const property = useSelector((store) => store.property.property);

  return property.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div>
      <div className="px-3 my-[2%]">
        <h2 className="text-2xl font-semibold">Properties</h2>
      </div>
      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {property.map((item, index) => (
          <Card key={index} data={item} status={false} />
        ))}
      </div>
    </div>
  );
};

export default Properties;

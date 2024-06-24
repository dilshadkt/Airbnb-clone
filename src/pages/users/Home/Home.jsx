import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
import { useSelector } from "react-redux";
import Nomatch from "./noSearch/Nomatch";

const Home = () => {
  const property = useSelector((store) => store.property.property);
  const newSearch = useSelector((store) => store.search.search);
  const [filtered, setFiltered] = useState(property);

  useEffect(() => {
    if (property === false) return setFiltered([]);
    const filtered = property.filter((item) =>
      item?.title?.toLowerCase().includes(newSearch?.toLowerCase())
    );
    setFiltered(filtered);
  }, [property, newSearch]);
  return (
    <>
      <div>
        {property === false ? (
          <Nomatch />
        ) : property.length === 0 ? (
          <div className="md:mx-[5%] my-6 mx:5">
            <ShimmerUi />
          </div>
        ) : (
          <>
            <div className="md:mx-[5%] my-6 grid lg:grid-cols-4 md:grid-cols-3  grid-cols-1 h-full mx-[10px]">
              {filtered.map((item, index) => (
                <Card data={item} key={`${index}-${index}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

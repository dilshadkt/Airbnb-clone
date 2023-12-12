import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Category from "../../../Category";
import { AuthToken } from "../../../axios/AuthToken";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
import { useSelector } from "react-redux";
import Nomatch from "./noSearch/Nomatch";

const Home = () => {
  const property = useSelector((store) => store.property.property);
  const newSearch = useSelector((store) => store.search.search);
  const login = useSelector((store) => store.user.isLogin);
  const [filtered, setFiltered] = useState(property);

  useEffect(() => {
    const token = login && localStorage.getItem("token");
    token && AuthToken(token);
  }, [login]);
  useEffect(() => {
    if (property === false) return setFiltered([]);
    const filtered = property.filter((item) =>
      item?.title?.toLowerCase().includes(newSearch?.toLowerCase())
    );
    setFiltered(filtered);
  }, [property, newSearch]);
  return (
    <>
      <Category />
      <div className="mx-[5%] my-6 flex justify-start flex-wrap h-full sm:mx-5">
        {property === false ? (
          <Nomatch />
        ) : property.length === 0 ? (
          <ShimmerUi />
        ) : (
          <>
            {" "}
            {filtered.map((item, index) => (
              <Card data={item} key={`${index}-${index}`} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;

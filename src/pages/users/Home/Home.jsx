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
      <div>
        {property === false ? (
          <Nomatch />
        ) : property.length === 0 ? (
          <ShimmerUi />
        ) : (
          <>
            <div className="mx-[5%] my-6 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  h-full sm:mx-5">
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

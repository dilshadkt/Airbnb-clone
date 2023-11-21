import React, { useContext, useEffect, useState } from "react";
import Card from "../../../components/Card";
import Category from "../../../Category";
import MyContext from "../../../components/contex/Mycontex";
import { AuthToken } from "../../../axios/AuthToken";
import { jwtDecode } from "jwt-decode";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";

const Home = () => {
  const { datas, search, setUser, isLogin } = useContext(MyContext);
  const [filtered, setFiltered] = useState(datas);

  useEffect(() => {
    const token = isLogin && localStorage.getItem("token");
    const useDetails = isLogin && jwtDecode(token);
    console.log(useDetails);
    setUser(useDetails);
    token && AuthToken(token);
  }, [setUser, isLogin]);
  useEffect(() => {
    const filtered = datas.filter((item) =>
      item?.title?.toLowerCase().includes(search?.toLowerCase())
    );
    setFiltered(filtered);
  }, [search, datas]);
  return (
    <>
      <Category />

      <div className="mx-[5%] my-6 flex justify-start flex-wrap h-full">
        {datas.length === 0 ? (
          <ShimmerUi />
        ) : (
          <>
            {" "}
            {filtered.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;

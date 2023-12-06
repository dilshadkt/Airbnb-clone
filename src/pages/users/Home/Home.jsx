import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";
import Category from "../../../Category";
// import MyContext from "../../../components/contex/Mycontex";
import { AuthToken } from "../../../axios/AuthToken";
// import { jwtDecode } from "jwt-decode";
import ShimmerUi from "../../../components/shimmer/ShimmerUi";
import { useSelector } from "react-redux";
const Home = () => {
  const property = useSelector((store) => store.property.property);
  const newSearch = useSelector((store) => store.search.search);
  const login = useSelector((store) => store.user.isLogin);
  // const { isLogin } = useContext(MyContext);
  const [filtered, setFiltered] = useState(property);

  useEffect(() => {
    const token = login && localStorage.getItem("token");
    // const useDetails = isLogin && jwtDecode(token);
    // setUser(useDetails);
    token && AuthToken(token);
  }, [login]);
  useEffect(() => {
    const filtered = property.filter((item) =>
      item?.title?.toLowerCase().includes(newSearch?.toLowerCase())
    );
    setFiltered(filtered);
  }, [property, newSearch]);
  return (
    <>
      <Category />
      <div className="mx-[5%] my-6 flex justify-start flex-wrap h-full">
        {property.length === 0 ? (
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

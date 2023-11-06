import React, { useContext } from "react";
import Card from "../../components/Card";
import Category from "../../Category";
import MyContext from "../../components/contex/Mycontex";

const Home = () => {
  const { datas } = useContext(MyContext);
  return (
    <>
      <Category />
      <div className="mx-20 flex justify-around flex-wrap h-full">
        {datas.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </>
  );
};

export default Home;

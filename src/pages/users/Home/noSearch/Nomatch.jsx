import React from "react";
import nofound from "../notfound.jpg";
const Nomatch = () => {
  return (
    <div className="h-[70vh] w-full flex  items-center justify-center">
      <div className="flex justify-center flex-col items-center">
        <img src={nofound} alt="not found" className="w-[150px]" />
        <h3 className="text-xl font-semibold">No exact matches</h3>
        <p className="my-[5%]">
          Try changing or removing some of your filters or adjusting your search
          area.
        </p>
      </div>
    </div>
  );
};

export default Nomatch;

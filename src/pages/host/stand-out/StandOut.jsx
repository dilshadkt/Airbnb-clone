import React from "react";
import Navigater from "../../../components/host-navigater/Navigater";

const StandOut = () => {
  return (
    <div className="flex mx-[15%] mt-[5%] mb-4 sm:flex-col-reverse sm:py-[7%] ">
      <div className="flex-1 flex flex-col items-start justify-center">
        <h4 className="text-lg font-medium">Step 2</h4>
        <h1 className="my-6 text-5xl font-medium">Make your place stand out</h1>
        <p className="text-lg">
          In this step, you’ll add some of the amenities your place offers, plus
          5 or more photos. Then you’ll create a title and description.
        </p>
      </div>
      <div className="flex-1">
        <video autoPlay muted>
          <source
            src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navigater next={"amenities"} />
    </div>
  );
};

export default StandOut;

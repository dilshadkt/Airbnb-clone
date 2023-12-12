import React from "react";

import Navigater from "../../components/host-navigater/Navigater";

const BecomeHost = () => {
  return (
    <>
      <div className="flex mx-[15%] mt-[5%] mb-4 sm:flex-col-reverse  ">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h4 className="text-lg font-medium">Step 1</h4>
          <h1 className="my-6 text-5xl font-medium">
            Tell us about your place
          </h1>
          <p className="text-lg">
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
        <div className="flex-1">
          <video autoPlay muted>
            <source
              src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <Navigater next={"structure"} />
      </div>
    </>
  );
};

export default BecomeHost;

import React from "react";
import { resource } from "../../../constants";

const HelpSection = () => {
  return (
    <section>
      <h4 className="md:text-xl font-medium">Resources and tips</h4>
      <div className="my-6  w-full  grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {resource.map((item) => (
          <div
            key={item.id}
            className=" border-2 flex flex-col items-center rounded-3xl cursor-pointer"
          >
            <img
              src={item.image}
              alt="help one"
              className="w-full object-fill"
            />
            <h4 className="py-6 text-xs md:text-base text-center">
              {item.description}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;

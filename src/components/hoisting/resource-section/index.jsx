import React from "react";
import { help } from "../../../constants";

const ResourceSection = () => {
  return (
    <section>
      <h4 className="text-base md:text-xl font-medium"> We’re here to help</h4>
      <div className="flex flex-col my-6">
        {help.map((item) => (
          <div
            key={item.id}
            className="border my-2 md:my-0 rounded-xl p-5 flex md:mr-6"
          >
            <div className=" flex-initial w-[15%] flex items-center justify-center">
              <img src={item.icon} alt="icons" className="w-10 opacity-70" />
            </div>
            <div className="flex-1 ml-3   h-fit">
              <h4 className="text-base font-medium">{item.title}</h4>
              <p className="text-sm max-w-[350px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceSection;

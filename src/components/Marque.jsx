import React from "react";
import Marquee from "react-fast-marquee";
import { MARQUE_DATA } from "../utils/helper";
const Marque = () => {
  return (
    <>
      <Marquee className="max-w-[1440px] mx-auto">
        {MARQUE_DATA.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center text-[#112D49] min-w-[150px] sm:min-w-[180px] md:w-[207px] h-[70px] sm:h-[80px] md:h-[91px] border border-[#E7EAED] p-3 sm:p-4 rounded-lg mx-1 hover:shadow-2xl transition-all duration-300 ease-in-linear cursor-pointer"
          >
            <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-black font-bold leading-[120%] text-sm sm:text-base">
              {item.name}
            </p>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default Marque;

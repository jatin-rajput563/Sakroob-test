import React from "react";
import Marquee from "react-fast-marquee";
import { MARQUE_DATA } from "../utils/helper";

const HeroTopSlider = () => {
  return (
    <>
      <Marquee className="max-w-[1920px] mx-auto pt-[26px] pb-[6px]">
        {MARQUE_DATA.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 items-center text-[#112D49] min-w-[159px] sm:min-w-[180px] md:w-[207px] h-[69px] sm:h-[80px] md:h-[91px] border border-[#E7EAED] p-3 sm:p-4 rounded-lg mx-1 hover:shadow-[0px_2px_20px_0px_#112D491A] duration-300 ease-in-linear cursor-pointer"
          >
            <item.icon className="w-[40px] h-[40px] md:w-[59px] md:h-[59px]" />
            <p className="text-black font-bold leading-[120%] text-sm sm:text-base">
              {item.name}
            </p>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default HeroTopSlider;

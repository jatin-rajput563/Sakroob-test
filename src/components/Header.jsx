import React from "react";
import Marquee from "react-fast-marquee";
import { Television } from "../utils/Icons";
import { MARQUE_DATA } from "../utils/helper";

const Header = () => {
  return (
    <>
      <div className="min-h-screen p-[27px]">
        <Marquee>
          {MARQUE_DATA.map((item, index) => (
            <div
              key={index}
            className="flex gap-3.5 items-center w-[207px] h-[91px] border border-[#E7EAED] p-4 rounded-lg mx-1.5 hover:shadow-2xl transition-all duration-300 ease-in-linear cursor-pointer"
            >
              <item.icon />
              <p className="text-black font-bold leading-[120%]">{item.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Header;

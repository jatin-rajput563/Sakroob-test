import React from "react";
import { SERVICES_DATA } from "../utils/helper";

const Services = () => {
  return (
    <>
      <div className="">
        <div className="max-w-[1380px]  px-3 mx-auto">
          <div className="flex items-center flex-wrap justify-center bg-[#F1F6FC] py-[50px]">
            {SERVICES_DATA.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-[8px] max-md:py-[50px] px-[36px] h-[61px] 
                w-full sm:w-1/2 md:w-1/3 xl:w-1/5 max-w-[320px]
                 ${
                   index !== SERVICES_DATA.length - 1
                     ? "sm:border-r border-[#112D49] h-[61px] max-sm:border-b"
                     : ""
                 }
                `}
              >
                <item.icon />
                <div>
                  <p className="font-bold leading-[150%]">{item.text}</p>
                  <p className="text-sm leading-[120%] pt-1">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

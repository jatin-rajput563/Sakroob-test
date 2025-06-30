import React from "react";
import { SERVICES_DATA } from "../utils/helper";

const Services = () => {
  return (
    <div className="pt-[52px]">
      <div className="max-w-[1380px] px-3 mx-auto">
        <div className="flex items-center flex-wrap justify-center bg-[#F1F6FC] rounded-[8px] md:py-[43px]">
          {SERVICES_DATA.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-[8px] 
                         max-md:pt-[24px] max-md:pb-[18px] px-[36px] h-auto 
                         w-full sm:w-1/2 md:w-1/3 xl:w-1/5 max-w-[320px]"
            >
              <div className="mb-2 sm:mb-0 sm:mr-2">
                <item.icon />
              </div>
              <div>
                <p className="font-bold leading-[150%] text-nowrap">
                  {item.text}
                </p>
                <p className="text-sm leading-[120%] pt-1">{item.para}</p>
              </div>

              {index !== SERVICES_DATA.length - 1 && (
                <>
                  <div
                    className="hidden sm:block absolute top-0 right-0 h-full w-px"
                    style={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderImage:
                        "linear-gradient(180deg, rgba(17,45,73,0) 0%, #112D49 51.44%, rgba(17,45,73,0) 100%) 1",
                    }}
                  ></div>
                  <div
                    className="block sm:hidden absolute bottom-0 left-6 right-6 h-px"
                    style={{
                      borderWidth: "1px",
                      borderStyle: "solid",
                      borderImage:
                        "linear-gradient(to right, rgba(17,45,73,0) 0%, #112D49 51.44%, rgba(17,45,73,0) 100%) 1",
                    }}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

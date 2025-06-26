import React from "react";
import { Carousel } from "react-responsive-carousel";
import Heading from "./common/Heading";
import Para from "./common/Para";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Buttons from "./common/Buttons";

const Hero = () => {
  return (
    <div className="pt-[24px]">
      <div className="max-w-[1380px] px-3 mx-auto">
        <Carousel
          useKeyboardArrows={true}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          // infiniteLoop
          interval={3000}
          // autoPlay
        >
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-[url(../src/assets/images/png/carsousel-bg.png)] bg-no-repeat bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-[8px] flex flex-col items-center justify-center text-center px-4 sm:px-6"
            >
              <Heading
                headClass="!pt-0 text-[28px] sm:text-[36px] md:text-[48px] lg:!text-[60px] max-w-full sm:max-w-[761px]"
                headText="Where Tinkerers Bring Ideas Alive"
              />
              <Para
                paraClass="max-w-full sm:max-w-[460px] pt-3 text-sm sm:text-base !text-[#3D5369]"
                paraText="Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
              />
              <div className="flex mx-auto gap-3 sm:gap-5 justify-center mt-5 sm:mt-[34px] flex-wrap">
                <Buttons
                  btnClass="!py-[10px] sm:!py-[14px] md:!py-[17px] !px-[15px] sm:!px-[17px] md:!px-[19.4px] !bg-[#112D49] text-white hover:!bg-white hover:!text-[#112D49]"
                  btnText="Browse Products"
                />
                <Buttons
                  btnClass="bg-transparent !text-[#112D49] !py-[10px] sm:!py-[14px] md:!py-[17px] !px-[15px] sm:!px-[17px] md:!px-[19.5px] hover:!bg-[#112D49] hover:!text-white"
                  btnText="Starter Kits"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;

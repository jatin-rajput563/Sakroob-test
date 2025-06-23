import React from "react";
import Marquee from "react-fast-marquee";
import { MARQUE_DATA } from "../utils/helper";
import { Carousel } from "react-responsive-carousel";
import Heading from "./common/Heading";
import Para from "./common/Para";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Buttons from "./common/Buttons";

const Hero = () => {
  return (
    <>
      <div className="py-[27px]">
        <Marquee>
          {MARQUE_DATA.map((item, index) => (
            <div
              key={index}
              className="flex gap-3.5 items-center text-[#112D49] w-[207px] h-[91px] border border-[#E7EAED] p-4 rounded-lg mx-1.5 hover:shadow-2xl transition-all duration-300 ease-in-linear cursor-pointer"
            >
              <item.icon />
              <p className="text-black font-bold leading-[120%]">{item.name}</p>
            </div>
          ))}
        </Marquee>
        <div className="mt-10 max-w-[1380px] px-3 mx-auto">
          <Carousel
            useKeyboardArrows={true}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            infiniteLoop
            interval={3000}
          >
            <div className="bg-[url(../src/assets/images/png/carsousel-bg.png)] bg-no-repeat bg-cover bg-center h-[650px] rounded-[8px]">
              <Heading
                headClass="!pt-[237px] max-w-[761px] !text-[60px]"
                headText="Where Tinkerers Bring Ideas Alive"
              />
              <Para
                paraClass="max-w-[460px] text-center mx-auto pt-3"
                paraText={
                  "Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
                }
              />
              <div className="flex mx-auto gap-5 justify-center mt-[34px]">
                <Buttons
                  btnClass="!py-[17px] !px-[19.4px]"
                  btnText="Browse Products"
                />
                <Buttons
                  btnClass="bg-transparent !text-[#112D49] !py-[17px] !px-[19.5px] hover:!bg-[#112D49] hover:!text-white"
                  btnText="Starter Kits"
                />
              </div>
            </div>
            <div className="bg-[url(../src/assets/images/png/carsousel-bg.png)] bg-no-repeat bg-cover bg-center h-[650px] rounded-[8px]">
              <Heading
                headClass="!pt-[237px] max-w-[761px] !text-[60px]"
                headText="Where Tinkerers Bring Ideas Alive"
              />
              <Para
                paraClass="max-w-[460px] text-center mx-auto pt-3"
                paraText={
                  "Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
                }
              />
              <div className="flex mx-auto gap-5 justify-center mt-[34px]">
                <Buttons
                  btnClass="!py-[17px] !px-[19.4px]"
                  btnText="Browse Products"
                />
                <Buttons
                  btnClass="bg-transparent !text-[#112D49] !py-[17px] !px-[19.5px] hover:!bg-[#112D49] hover:!text-white"
                  btnText="Starter Kits"
                />
              </div>
            </div>
            <div className="bg-[url(../src/assets/images/png/carsousel-bg.png)] bg-no-repeat bg-cover bg-center h-[650px] rounded-[8px]">
              <Heading
                headClass="!pt-[237px] max-w-[761px] !text-[60px]"
                headText="Where Tinkerers Bring Ideas Alive"
              />
              <Para
                paraClass="max-w-[460px] text-center mx-auto pt-3"
                paraText={
                  "Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
                }
              />
              <div className="flex mx-auto gap-5 justify-center mt-[34px]">
                <Buttons
                  btnClass="!py-[17px] !px-[19.4px]"
                  btnText="Browse Products"
                />
                <Buttons
                  btnClass="bg-transparent !text-[#112D49] !py-[17px] !px-[19.5px] hover:!bg-[#112D49] hover:!text-white"
                  btnText="Starter Kits"
                />
              </div>
            </div>
            <div className="bg-[url(../src/assets/images/png/carsousel-bg.png)] bg-no-repeat bg-cover bg-center h-[650px] rounded-[8px]">
              <Heading
                headClass="!pt-[237px] max-w-[761px] !text-[60px]"
                headText="Where Tinkerers Bring Ideas Alive"
              />
              <Para
                paraClass="max-w-[460px] text-center mx-auto pt-3"
                paraText={
                  "Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
                }
              />
              <div className="flex mx-auto gap-5 justify-center mt-[34px]">
                <Buttons
                  btnClass="!py-[17px] !px-[19.4px]"
                  btnText="Browse Products"
                />
                <Buttons
                  btnClass="bg-transparent !text-[#112D49] !py-[17px] !px-[19.5px] hover:!bg-[#112D49] hover:!text-white"
                  btnText="Starter Kits"
                />
              </div>
            </div>
            <div className="bg-[url(../src/assets/images/png/carsousel-bg.png)] bg-no-repeat bg-cover bg-center h-[650px] rounded-[8px]">
              <Heading
                headClass="!pt-[237px] max-w-[761px] !text-[60px]"
                headText="Where Tinkerers Bring Ideas Alive"
              />
              <Para
                paraClass="max-w-[460px] text-center mx-auto pt-3"
                paraText={
                  "Explore niche tech gear, DIY kits, and pro tools — built for creators, gamers, and engineers."
                }
              />
              <div className="flex mx-auto gap-5 justify-center mt-[34px]">
                <Buttons
                  btnClass="!py-[17px] !px-[19.4px]"
                  btnText="Browse Products"
                />
                <Buttons
                  btnClass="bg-transparent !text-[#112D49] !py-[17px] !px-[19.5px] hover:!bg-[#112D49] hover:!text-white"
                  btnText="Starter Kits"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Hero;

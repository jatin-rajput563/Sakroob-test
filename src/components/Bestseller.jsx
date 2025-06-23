import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "./common/Heading";
import Buttons from "./common/Buttons";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";

const Bestseller = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="py-[132px] relative">
        <div className="max-w-[1272px] mx-auto px-3">
          <Heading headText="Bestsellers" />
            <div
              ref={prevRef}
              className="w-[38px] h-[38px] absolute top-[50%] left-[6%] border items-center flex justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L6.79609 1"
                  className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              ref={nextRef}
              className="w-[38px] h-[38px] absolute top-[50%] right-[6%] border items-center flex justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1.20391 1"
                  className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={0}
            loop={true}
            centeredSlides={true}
            slidesOffsetBefore={24}
            slidesOffsetAfter={24}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
          >
            {BESTSELLER_DATA.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[364px] w-full border border-[#ECEEF0] h-[563px] p-4 rounded-[8px] flex flex-col justify-between">
                  <div className="">
                    <div className="w-full bg-[#E5E4E2] items-center h-[242px] flex justify-center rounded-[4px] relative">
                      <img src={item.img} className="mb-[90px]" alt="img" />
                      <div className="absolute top-[10px] right-[10px] cursor-pointer">
                        <item.Heart />
                      </div>
                    </div>
                    <p className="font-bold text-2xl leading-[120%] pt-[19.35px] text-[#112D49]">
                      {item.title}
                    </p>
                    <p className="leading-[150%] text-[#41576D] max-w-[332px] pt-2">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-2xl ">{item.price}</p>
                      <item.svg />
                    </div>
                    <div className="pt-[25px] flex justify-between items-center">
                      <Buttons
                        btnText="Shop Now"
                        btnClass="bg-white !text-[#112D49] px-[87.5px] !py-[17px] hover:!bg-[#112D49] hover:!text-white"
                      />
                      <item.shop />
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Bestseller;

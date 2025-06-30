import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { CLIENTS_DATA } from "../utils/helper";
import {
  LeftQuotation,
  Ratingstar,
  RightQuotation,
} from "../utils/Icons";

const OurClients = () => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-8 mt-[132px] mb-[270px]">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-center italic text-lg md:text-xl text-[#112D49] mb-2">
            Testimonials
          </p>
          <h2 className="leading-[120%] text-center text-[48px] max-w-[434px] sm:max-w-[1256px] mx-auto  font-bold text-[#112D49]">
            What Our Client’s Says{" "}
          </h2>
          <div className="mt-10 relative">
            <div className="max-xl:hidden flex xl:absolute top-[178px] xl:-left-14 xl:-right-14 2xl:-left-20 2xl:-right-20 justify-between items-center px-4 z-10">
              <div className="swiper-arrow prev-button group cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M7 13L1 7L6.79609 1"
                    className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper-arrow group next-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 13L7 7L1.20391 1"
                    className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <Swiper
              navigation={{
                nextEl: ".next-button",
                prevEl: ".prev-button",
              }}
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {CLIENTS_DATA.map((data, i) => (
                <SwiperSlide key={i} className="flex justify-center p-2">
                  <div className="w-full max-w-[558px] px-4 py-6 rounded-md mx-auto text-center duration-300 hover:shadow-[0px_2px_20px_0px_#112D491A]">
                    <img
                      className="mx-auto min-w-[93px] h-[93px] object-cover rounded-full"
                      src={data.img}
                      alt="client-img"
                    />
                    <div className="pt-4 leading-[150%] relative text-[#112D49] opacity-80">
                      <div className="absolute top-0 left-0">
                        <LeftQuotation />
                      </div>
                      <p className="flex-1 ">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth,
                      </p>
                      <div className="absolute bottom-0 right-0">
                        <RightQuotation />
                      </div>
                    </div>
                    <div className="flex mx-auto justify-center items-center pt-3">
                      <Ratingstar />
                    </div>
                    <p className="font-semibold text-xl md:text-2xl text-[#112D49] mt-2 md:mt-[10px]">
                      {data.title}
                    </p>
                    <p className="text-[#112D49]">{data.profession}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="xl:hidden flex justify-center gap-3 items-center px-4 z-10">
              <div className="swiper-arrow prev-button group cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M7 13L1 7L6.79609 1"
                    className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper-arrow group next-button cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path
                    d="M1 13L7 7L1.20391 1"
                    className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;

import React from "react";
import Heading from "../components/common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { CLIENTS_DATA } from "../utils/helper";
import {
  LeftArrow,
  LeftQuotationIcon,
  Ratingstar,
  RightArrow,
  RightQuotationIcon,
} from "../utils/Icons";

const OurClients = () => {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-8 pt-[132px] mb-[300px]">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-center italic text-lg sm:text-xl md:text-xl text-[#112D49] mb-2">
            Testimonials
          </p>
          <Heading
            headClass="max-sm:max-w-[259px]"
            headText="What our client’s says "
          />
          <div className="mt-8 sm:mt-11 md:mt-[59px] relative">
            <div className="max-xl:hidden flex xl:absolute top-1/2 xl:-left-14 xl:-right-14 2xl:-left-20 2xl:-right-20 transform -translate-y-1/2 justify-between items-center px-4 z-10">
              <div className="swiper-arrow prev-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <LeftArrow />
              </div>
              <div className="swiper-arrow next-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <RightArrow />
              </div>
            </div>
            <Swiper
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
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
              {CLIENTS_DATA.map((data, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="w-full max-w-[558px] px-4 py-6 rounded-md mx-auto text-center">
                    <img
                      className="mx-auto w-20 h-20 object-cover rounded-full"
                      src={data.img}
                      alt="client-img"
                    />
                    <div className="pt-4 leading-[150%] text-[#112D49] opacity-80 relative">
                      <p className="flex-1">
                        <div className="absolute left-[15px] top-[5px]">
                          <LeftQuotationIcon />
                        </div>
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth,
                        <div className="absolute right-[60px] bottom-[-10px]">
                          <RightQuotationIcon />
                        </div>
                      </p>
                    </div>
                    <div className="mt-2 md:mt-3 flex justify-center mx-auto max-w-[192px] w-full">
                      <Ratingstar />
                    </div>
                    <p className="font-semibold text-xl md:text-2xl text-[#112D49] mt-2 md:mt-3">
                      {data.title}
                    </p>
                    <p className="text-[#112D49]">{data.job}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="xl:hidden flex justify-center gap-3 items-center px-4 z-10">
              <div className="swiper-arrow prev-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <LeftArrow />
              </div>

              <div className="swiper-arrow next-btn cursor-pointer size-8 md:size-10 border border-[#112D49] rounded-full flex items-center justify-center hover:bg-[#112D49] transition-all duration-200 ease-linear">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;

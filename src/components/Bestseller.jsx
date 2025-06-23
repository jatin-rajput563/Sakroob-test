import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "./common/Heading";
import "swiper/css";
const Bestseller = () => {
  return (
    <>
      <div className="min-h-screen py-[132px]">
        <div className="max-w-[1380px]mx-auto px-3">
          <div>
            <Heading headText="Bestsellers" />
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Bestseller;

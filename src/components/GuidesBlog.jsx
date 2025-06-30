import React from "react";
import Heading from "../components/common/Heading";

import Buttons from "../components/common/Buttons";
import blogPageImg1 from "../assets/images/png/blog-page-img-1.png";
import blogPageImg2 from "../assets/images/png/blog-page-img-2.png";
import blogPageImg3 from "../assets/images/png/blog-page-img-3.png";
import blogPageImg4 from "../assets/images/png/blog-page-img-4.png";
import blogPageImg5 from "../assets/images/png/blog-page-img-5.png";
import { BlogArrow } from "../utils/Icons";

const GuidesBlog = () => {
  return (
    <div
      id="blog"
      className="flex justify-center items-center sm:pt-[132px] pt-[110px]"
    >
      <div className="max-w-[1386px] mx-auto w-full">
        <Heading
          headClass="sm:max-w-[650px] max-w-[283px] mx-auto"
          headText="Blog, Guides, Build Logs & More"
        />
        <div className="xl:flex xl:mb-6 mt-8 sm:mt-12 md:mt-16 gap-6.5">
          <div className="xl:max-w-[680px] max-xl:mb-6 w-full p-3.5 sm:pt-8 sm:pl-8 bg-[#E5E4E2] rounded-[8px] relative min-h-[335px]">
            <img
              className="max-w-[202px] sm:hidden mx-auto pb-5.5 pointer-events-none"
              src={blogPageImg1}
              alt="storage img"
            />
            <p className="text-[24px] sm:text-[32px] leading-[120%] !text-left max-w-[233px] sm:max-w-[407px] font-bold text-[#112D49] ">
              How to Build a Mini NAS
            </p>
            <p className="opacity-80 text-sm sm:text-base text-[#112D49] leading-[150%] max-w-[299px] sm:max-w-[407px] pt-2 sm:pt-3">
              Learn to build your own network storage system with simple
              components.
            </p>
            <a
              className="flex items-center leading-[100%] group font-medium text-sm sm:text-base text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max"
              href="#"
              target="_blank"
            >
              Read Guide
              <div className="hover:transform group-hover:translate-x-[10px] transition-all duration-300 ease-in-out">
                <BlogArrow />
              </div>
            </a>
            <img
              className="hidden sm:block max-w-[250px] md:max-w-[281px] sm:absolute right-0 bottom-0 pointer-events-none"
              src={blogPageImg1}
              alt="storage img"
            />
          </div>
          <div className="xl:max-w-[680px] pb-3.5 pl-3.5 pr-3.5 max-xl:mb-6 w-full sm:pt-8 sm:pl-8 bg-[#EEF4FB] rounded-[8px] relative min-h-[335px]">
            <img
              className="sm:hidden max-w-[288px] mx-auto mb-10.5 pointer-events-none"
              src={blogPageImg5}
              alt="five tools img"
            />
            <p className="text-[24px] sm:text-[32px] leading-[120%] !text-left max-w-[360px] font-bold text-[#112D49]">
              5 Tools Every Maker Should Own
            </p>
            <p className="opacity-80 text-sm sm:text-base text-[#112D49] leading-[150%] max-w-[299px] sm:max-w-[407px] pt-2 sm:pt-3">
              The essential toolkit for every DIY electronics enthusiast.
            </p>
            <a
              className="flex items-center text-sm sm:text-base leading-[100%] group font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max"
              href="#"
              target="_blank"
            >
              Read Article
              <div className="hover:transform group-hover:translate-x-[10px] transition-all duration-300 ease-in-out">
                <BlogArrow />
              </div>
            </a>
            <img
              className="absolute max-sm:hidden max-w-[199px] right-0 bottom-0 pointer-events-none"
              src={blogPageImg2}
              alt="five tools img"
            />
          </div>
        </div>
        <div className="w-full xl:pt-[50px] xl:pl-4.5 xl:pb-[34px] xl:pr-[27px] bg-[#D5E8FF] rounded-[8px] min-h-[388px] xl:flex gap-[50px] xl:gap-[95.92px] items-center">
          <img
            className="max-w-[212px] max-xl:mb-[17px] sm:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[367px] pointer-events-none"
            src={blogPageImg3}
            alt="five tools img"
          />
          <div className="px-3.5">
            <p className="text-[24px] sm:text-[32px] leading-[120%] text-center mx-auto max-w-[307px] sm:max-w-[407px] font-bold text-[#112D49]">
              Inside a Raspberry Pi Retro Console
            </p>
            <p className="opacity-80 text-[#112D49] max-sm:max-w-[260px] sm:text-nowrap text-sm sm:text-base leading-[150%] max-w-[260px] sm:max-w-[410px] mx-auto pt-2 sm:pt-3 text-center">
              Step-by-step log of building a retro game machine.
            </p>
            <a
              className="flex items-center text-sm sm:text-base justify-center mx-auto leading-[100%] group font-medium text-[#112D49] mt-6 sm:mt-7 gap-[7px] max-w-max"
              href="#"
              target="_blank"
            >
              View Build Log
              <div className="hover:transform group-hover:translate-x-[10px] transition-all duration-300 ease-in-out">
                <BlogArrow />
              </div>
            </a>
          </div>
          <img
            className="max-w-[182px] max-xl:mt-9.5 sm:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[367px] ml-auto pointer-events-none"
            src={blogPageImg4}
            alt="five tools img"
          />
        </div>
        <Buttons
          btnText="View All Blog Posts"
          btnClass="mt-[56px] mx-auto flex !bg-[#112D49] text-white hover:!bg-white hover:!text-[#112D49]"
        />
      </div>
    </div>
  );
};

export default GuidesBlog;

import React from "react";
import Heading from "./common/Heading";
import Para from "./common/Para";
import Buttons from "./common/Buttons";

const SakroobCircle = () => {
  return (
    <>
      <div className="p-6 relative mx-6 sm:mx-0">
        <div className="-mb-[170px] w-full bg-[url(../src/assets/images/png/SakroobCircle-bg.png)] bg-cover bg-no-repeat bg-center h-[386px] max-w-[1140px] mx-auto rounded-[24px] pt-[68px] px-0 py-0 max-sm:py-[64px] max-sm:px-[23px] overflow-hidden absolute -bottom-1/3 left-1/2 -translate-x-1/2">
          {/* Overlay */}
          <div className="w-full h-full bg-[#73A4E0] opacity-75 absolute top-0 left-0"></div>

          {/* Content */}
          <Heading
            headClass="!text-white z-10 relative"
            headText="Join the Sakroob Circle"
          />
          <Para
            paraClass="text-white text-center pt-4 z-10 relative"
            paraText="Exclusive drops, early access, and maker tips in your inbox."
          />

          {/* Email Input */}
          <div className="mx-auto sm:flex justify-center mt-[46px] relative z-10 max-w-[486px] space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email...."
              className="bg-white py-[13.35px] sm:py-[22px] px-[18px] rounded-[50px] w-full leading-[140%] text-[#8392A0]"
            />
            <button className="w-full sm:w-auto py-[13px] px-[23.2px] bg-[#112D49] text-white font-medium rounded-[92px] sm:absolute sm:right-[7.5px] sm:top-[6.5px] hover:bg-white hover:text-[#112D49] border border-[#112D49] transition-all duration-200 ease-linear">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SakroobCircle;

import React from "react";
import Heading from "./common/Heading";
import Para from "./common/Para";
import Buttons from "./common/Buttons";

const SakroobCircle = () => {
  return (
    <>
      <div className="-mb-[170px]  bg-[url(../src/assets/images/png/SakroobCircle-bg.png)] bg-cover bg-no-repeat bg-center h-[386px] max-w-[1140px] mx-auto rounded-[24px] pt-[68px] relative overflow-hidden transform translate-y-[-60%]">
      <div className="w-full h-full bg-[#73A4E0] opacity-75 absolute top-0"></div>
        <Heading headClass="!text-white z-10 relative" headText="Join the Sakroob Circle" />
        <Para
          paraClass="text-white text-center pt-4 z-10 relative"
          paraText="Exclusive drops, early access, and maker tips in your inbox."
        />
        <div className="mx-auto flex justify-center mt-[46px] relative z-10 max-w-[486px]">
          <input
            type="mail"
            placeholder="Enter your email...."
            className="bg-white py-[22px] px-[18px] rounded-[50px] max-w-[489px] w-full leading-[140%] text-[#8392A0]"
          />
          <Buttons btnText="Join Now" btnClass="!py-[16px] !px-[20px] absolute right-[8.5px] top-[8.5px]" />
        </div>
      </div>
    </>
  );
};

export default SakroobCircle;

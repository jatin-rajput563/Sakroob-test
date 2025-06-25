import React from "react";

const Buttons = ({ btnClass, btnText }) => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`bg-[#112D49] 
          py-[12px] px-[24px] 
          sm:py-[14px] sm:px-[28px] 
          md:py-[16px] md:px-[32px] 
          lg:py-[18px] lg:px-[36px] 
          xl:py-[20px] xl:px-[40px] 
          rounded-[93px] 
          text-white font-medium leading-[100%] border border-[#112D49] 
          hover:bg-white hover:text-[#112D49] 
          transition-all duration-300 ease-linear cursor-pointer 
           ${btnClass}`}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Buttons;

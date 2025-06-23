import React from "react";

const Buttons = ({ btnClass, btnText }) => {
  return (
    <div>
      <button type="button" className={`bg-[#112D49] py-[20px] px-[16px] rounded-[93px] text-white font-medium leading-[100%] border border-[#112D49] hover:bg-white hover:text-[#112D49] transition-all duration-300 ease-linear cursor-pointer ${btnClass}`}>
        {btnText}
      </button>
    </div>
  );
};

export default Buttons;

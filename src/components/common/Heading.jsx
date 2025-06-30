import React from "react";

const Heading = ({ headText, headClass }) => {
  return (
    <div>
      <h1
        className={`font-bold leading-[120%] text-[#112D49] text-[28px] sm:text-4xl md:text-5xl text-center mx-auto  ${headClass}`}
      >
        {headText}
      </h1>
    </div>
  );
};

export default Heading;

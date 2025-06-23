import React from "react";

const Description = ({ DescriptionText, DescriptionClass }) => {
  return (
    <div>
      <p className={`font-bold leading-[120%] text-[#112D49] ${DescriptionClass}`}>{DescriptionText}</p>
    </div>
  );
};

export default Description;

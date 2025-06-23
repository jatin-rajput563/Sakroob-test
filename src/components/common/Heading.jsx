import React from "react";

const Heading = ({ headText, headClass }) => {
  return (
    <div>
      <h1 className={`     ${headClass}`}>{headText}</h1>
    </div>
  );
};

export default Heading;

import React from "react";

const Para = ({ paraText, paraClass }) => {
  return (
    <div>
      <p className={`   ${paraClass}`}>{paraText}</p>
    </div>
  );
};

export default Para;

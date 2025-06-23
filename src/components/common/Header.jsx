import React from "react";
import Marquee from "react-fast-marquee";
import { Television } from "../../utils/Icons";

const Header = () => {
  return (
    <>
      <div className="min-h-screen">
        <Marquee>
          <Television />
        </Marquee>
      </div>
    </>
  );
};

export default Header;

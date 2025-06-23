import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import Para from "./common/Para";

const Footer = () => {
  return (
    <>
      <div className="min-h-screen bg-[#112D49] pt-[75px]">
        <div className="max-w-[1440px mx-auto px-3 ">
          <div className="">
            <img className="mx-auto flex" src={footerLogo} alt="footer-logo" />
            <Para
              paraClass="max-w-[338px] !text-[#CFD5DB] text-center mx-auto pt-4 !leading-[150%] "
              paraText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
            />
            <ul className="flex gap-2.5 justify-center pt-[27px]">
              <li>
                <a className="text-white" href="#">Shipping</a>
              </li>
              <li>
                <a className="text-white" href="#">Warranty</a>
              </li>
              <li>
                <a className="text-white" href="#">FAQs</a>
              </li>
              <li>
                <a className="text-white" href="#">Blog</a>
              </li>
              <li>
                <a className="text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

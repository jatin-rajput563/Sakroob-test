import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import Para from "./common/Para";
import {
  FacebookSvg,
  InstagramSvg,
  TwiterSvg,
  YoutubeSvg,
} from "../utils/Icons";

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
                <a className="text-white" href="#">
                  Shipping
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Warranty
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex gap-[10px] justify-center pt-[27px]">
              <a
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FacebookSvg />
              </a>
              <a
                href="https://www.instagram.com/"
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                target="_blank"
              >
                <InstagramSvg />
              </a>
              <a
                href="https://x.com/"
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                target="_blank"
              >
                <TwiterSvg />
              </a>
              <a
                href="https://www.youtube.com/"
                className="h-[32px] w-[32px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:-rotate-12 transition-transform duration-300 ease-in-out active:scale-90"
                target="_blank"
              >
                <YoutubeSvg />
              </a>
            </div>
            <div className="w-full bg-white h-1 mt-[82px]"></div>
            <div className="flex justify-between max-w-[1440px] mx-auto py-[30px]">
              <p className="text-sm text-white">term of service | Privacy Policy</p>
              <p className="text-sm text-white">© 2025 Skaroob. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

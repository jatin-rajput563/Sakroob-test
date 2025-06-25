import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import Para from "./common/Para";
import { FacebookSvg, InstagramSvg, TwiterSvg, YoutubeSvg } from "../utils/Icons";

const Footer = () => {
  return (
    <>
      <div className="bg-[#112D49]">
        <div className="max-w-[1440px] mx-auto px-3">
          <div className="py-10">
            <img className="mx-auto" src={footerLogo} alt="footer-logo" />
            <Para
              paraClass="max-w-[338px] !text-[#CFD5DB] text-center mx-auto pt-4 !leading-[150%]"
              paraText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
            />
            <ul className="flex flex-wrap gap-3 justify-center pt-[27px] text-sm sm:text-base">
              {["Shipping", "Warranty", "FAQs", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a className="text-white hover:underline transition" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 justify-center pt-[27px]">
              {[
                { href: "https://www.facebook.com/", icon: <FacebookSvg />, rotate: "rotate-12" },
                { href: "https://www.instagram.com/", icon: <InstagramSvg />, rotate: "-rotate-12" },
                { href: "https://x.com/", icon: <TwiterSvg />, rotate: "rotate-12" },
                { href: "https://www.youtube.com/", icon: <YoutubeSvg />, rotate: "-rotate-12" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-[40px] w-[40px] flex justify-center items-center border border-white rounded-full cursor-pointer transform hover:scale-125 hover:${item.rotate} transition-transform duration-300 ease-in-out active:scale-90`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="w-full bg-white h-1 mt-[42px] max-md:mt-[82px]"></div>
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1440px] mx-auto py-[30px] gap-4 text-center text-sm text-white">
              <p className="sm:text-left w-full sm:w-auto">
                Terms of Service | Privacy Policy
              </p>
              <p className="sm:text-right w-full sm:w-auto">
                © {new Date().getFullYear()} Skaroob. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

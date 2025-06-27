import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import Para from "./common/Para";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "../utils/Icons";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  return (
    <>
      <div
        className={`bg-[#112D49] ${isHomePage ? "pt-[215px]" : "pt-[70px]"}`}
      >
        <div className="max-w-[1440px] mx-auto px-3">
          <div>
            <img className="mx-auto" src={footerLogo} alt="footer-logo" />
            <Para
              paraClass="max-w-[338px] !text-[#CFD5DB] text-center mx-auto pt-4 !leading-[150%]"
              paraText="Commodo egestas etiam arcu curabitur aliquam volutpat a gravida."
            />
            <ul className="flex flex-wrap gap-5 justify-center pt-[27px] text-sm sm:text-base">
              {["Shipping", "Warranty", "FAQs", "Blog", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-300"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-wrap gap-4 justify-center pt-[27px]">
              {[
                {
                  href: "https://www.facebook.com/",
                  icon: <Facebook />,
                  rotate: "rotate-12",
                },
                {
                  href: "https://www.instagram.com/",
                  icon: <Instagram />,
                  rotate: "-rotate-12",
                },
                {
                  href: "https://x.com/",
                  icon: <Twitter />,
                  rotate: "rotate-12",
                },
                {
                  href: "https://www.youtube.com/",
                  icon: <Youtube />,
                  rotate: "-rotate-12",
                },
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
            <div
              className="w-full h-[1px] border-t mt-[43px] sm:mt-[82px]"
              style={{
                borderImageSource:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0) 3.37%, rgba(255, 255, 255, 0.8) 51.44%, rgba(255, 255, 255, 0) 100%)",
                borderImageSlice: 1,
              }}
            ></div>
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1440px] mx-auto py-[30px] gap-4 text-center text-sm text-white">
              <p className="sm:text-left w-full sm:w-auto ">
                Terms of Service | Privacy Policy
              </p>
              <p className="sm:text-right w-full sm:w-auto ">
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

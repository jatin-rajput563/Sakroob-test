import React, { useState } from "react";
import Heading from "../components/common/Heading";
import Para from "../components/common/Para";
import Buttons from "../components/common/Buttons";
import { CloseEye, OpenEye } from "../utils/Icons";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => setShowPassword(!showPassword);
  return (
    <>
      <div className="bg-[url(../src/assets/images/png/Login-bg.png)] bg-no-repeat bg-cover bg-center min-h-screen justify-center flex items-center">
        <div className="max-w-[590px] mx-auto px-3">
          <div className="bg-white p-[64px] rounded-[15px] max-w-[590px] w-full">
            <Heading headText="Sign up" headClass="!text-[32px]" />
            <Para
              paraClass="max-w-[374px] text-center mx-auto pt-2"
              paraText="Create your account to unlock access and stay updated with everything we offer."
            />
            <div className="pt-[24px]">
              <input
                type="text"
                placeholder="First name"
                required
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
            </div>
            <div className="pt-[12px]">
              <input
                type="text"
                placeholder="Last name"
                required
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
            </div>
            <div className="pt-[12px]">
              <input
                type="text"
                placeholder="Email address"
                required
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              <div className=" flex items-center relative mt-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
                />
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="text-[#2E3F51] focus:outline-none absolute right-[15px]"
                >
                  {showPassword ? <CloseEye /> : <OpenEye />}
                </button>
              </div>
              <Buttons
                btnText="Log in"
                btnClass="mt-[40px] !max-w-[462px] !w-full"
              />
              <p className="text-[#41576D] pt-[20px] text-center">
                Already a member?
                <span>
                  <a
                    href="#"
                    className="font-semibold underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100"
                  >
                    Log in
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

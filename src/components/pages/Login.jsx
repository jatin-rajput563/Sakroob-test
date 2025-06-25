import React, { useState } from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Buttons from "../common/Buttons";
import { CloseEye, OpenEye } from "../../utils/Icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="bg-[url(../src/assets/images/png/Login-bg.png)] bg-no-repeat bg-cover bg-center min-h-screen justify-center flex items-center">
        <div className="max-w-[590px] mx-auto px-3">
          <div className="bg-white p-[64px] rounded-[15px] max-w-[590px] w-full">
            <Heading headText="Welcome back!" />
            <Para
              paraClass="max-w-[326px] text-center mx-auto pt-2"
              paraText="Log in below to access your account and keep things running smoothly."
            />
            <div className="pt-[24px]">
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
              <a
                href="#"
                className="font-semibold pt-[12px] items-end flex justify-end underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100"
              >
                Forgot password?
              </a>
              <Buttons
                btnText="Log in"
                btnClass="mt-[40px] !max-w-[462px] !w-full"
              />
              <p className="text-[#41576D] pt-[20px] text-center">
                Don’t have an account?
                <span>
                  <a
                    href="#"
                    className="font-semibold underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100"
                  >
                    Create account
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

export default Login;

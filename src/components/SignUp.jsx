import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "../components/common/Heading";
import Para from "../components/common/Para";
import Buttons from "../components/common/Buttons";
import { CloseEye, OpenEye } from "../utils/Icons";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <>
      <div className="bg-[url(../src/assets/images/png/Login-bg.png)] bg-no-repeat bg-cover bg-center min-h-screen justify-center flex items-center">
        <div className="max-w-[590px] mx-auto px-3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white md:p-[64px] p-6 rounded-[15px] max-w-[590px] w-full"
          >
            <Heading headText="Sign up" headClass="!text-[32px]" />
            <Para
              paraClass="max-w-[374px] text-center mx-auto pt-2"
              paraText="Create your account to unlock access and stay updated with everything we offer."
            />

            <div className="pt-[24px] relative">
              <input
                type="text"
                placeholder="First name"
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              {errors.firstName && (
                <p className="text-red-600 text-xs absolute top-full left-4 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="pt-[28px] relative">
              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: "Last name is required" })}
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              {errors.lastName && (
                <p className="text-red-600 text-xs absolute top-full left-4 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="pt-[28px] relative">
              <input
                type="text"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              {errors.email && (
                <p className="text-red-600 text-xs absolute top-full left-4 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="relative mt-7">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="text-[#2E3F51] focus:outline-none absolute right-[15px] top-1/2 -translate-y-1/2"
              >
                {showPassword ? <OpenEye /> : <CloseEye />}
              </button>
              {errors.password && (
                <p className="text-red-600 text-xs absolute top-full left-4 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Buttons
              type="submit"
              btnText="Sign up"
              btnClass="mt-[40px] !max-w-[462px] !w-full !bg-[#112D49] !text-white hover:!bg-white hover!text-[#112D49]"
            />
            <p className="text-[#41576D] pt-[20px] text-center">
              Already a member?{" "}
              <NavLink to={"/login"}>
                <button className="font-semibold underline text-[#112D49] hover: transition-all ease-linear duration-100">
                  Log in
                </button>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

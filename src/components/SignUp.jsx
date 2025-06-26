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
    // Save signup data in localStorage (simulate registration)
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
            className="bg-white p-[64px] rounded-[15px] max-w-[590px] w-full"
          >
            <Heading headText="Sign up" headClass="!text-[32px]" />
            <Para
              paraClass="max-w-[374px] text-center mx-auto pt-2"
              paraText="Create your account to unlock access and stay updated with everything we offer."
            />

            <div className="pt-[24px]">
              <input
                type="text"
                placeholder="First name"
                {...register("firstName", { required: "First name is required" })}
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1 px-2">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="pt-[12px]">
              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: "Last name is required" })}
                className="bg-[#F4F8F7] py-[14px] px-[28px] max-w-[462px] w-full rounded-full"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1 px-2">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="pt-[12px]">
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
                <p className="text-red-600 text-sm mt-1 px-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex items-center relative mt-3">
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
                className="text-[#2E3F51] focus:outline-none absolute right-[15px]"
              >
                {showPassword ? <CloseEye /> : <OpenEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1 px-2">
                {errors.password.message}
              </p>
            )}

            <Buttons
              type="submit"
              btnText="Sign up"
              btnClass="mt-[40px] !max-w-[462px] !w-full"
            />

            <p className="text-[#41576D] pt-[20px] text-center">
              Already a member?{" "}
              <NavLink to={"/login"}>
                <button className="font-semibold underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100">
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

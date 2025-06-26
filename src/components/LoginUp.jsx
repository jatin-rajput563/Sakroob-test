import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Heading from "../components/common/Heading";
import Para from "../components/common/Para";
import Buttons from "../components/common/Buttons";
import { CloseEye, OpenEye } from "../utils/Icons";
import { NavLink } from "react-router-dom";

const LoginUp = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setLoginError("No account found. Please sign up first.");
      return;
    }

    if (
      data.email === storedUser.email &&
      data.password === storedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setLoginError("");
      onLogin(); // ✅ Call to switch to HomePage
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  return (
    <div className="bg-[url(../src/assets/images/png/Login-bg.png)] bg-no-repeat bg-cover bg-center min-h-screen justify-center flex items-center">
      <div className="max-w-[590px] mx-auto px-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-[64px] rounded-[15px] max-w-[590px] w-full"
        >
          <Heading headText="Welcome back!" />
          <Para
            paraClass="max-w-[326px] text-center mx-auto pt-2"
            paraText="Log in below to access your account and keep things running smoothly."
          />
          <div className="pt-[24px]">
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
            {loginError && (
              <p className="text-red-600 text-sm mt-3 px-2">{loginError}</p>
            )}

            <a
              href="#"
              className="font-semibold pt-[12px] items-end flex justify-end underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100"
            >
              Forgot password?
            </a>

            <Buttons
              btnText="Log in"
              btnClass="mt-[40px] !max-w-[462px] !w-full"
              type="submit"
            />

            <p className="text-[#41576D] pt-[20px] text-center">
              Don’t have an account?{" "}
              <NavLink to={"/signup"}>
                <button className="font-semibold underline text-[#112D49] hover:text-red-600 transition-all ease-linear duration-100">
                  Create account
                </button>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginUp;

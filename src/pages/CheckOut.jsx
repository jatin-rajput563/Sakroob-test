import React, { useState } from "react";
import Buttons from "../components/common/Buttons";
import {
  CreditCards,
  InformationSvg,
  PaypalSvg,
  UnderSvg,
} from "../utils/Icons";

const CheckOut = () => {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="min-h-screen py-[120px]">
        <div className="max-w-[1140px] mx-auto px-3">
          <div className="flex flex-wrap flex-row -mx-3">
            <div className="w-8/12">
              <div className="flex flex-wrap justify-between">
                <p className="font-bold text-2xl leading-[120%] text-[#112D49]">
                  Contact
                </p>
                <Buttons
                  btnText="Log in"
                  btnClass="!py-[8px] !px-[26px] font-semibold "
                />
                <div className="flex justify-between items-center bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                  <div className="flex-col flex">
                    <label className="text-xs leading-[150%] text-[#8393A0]">
                      Email or mobile phone number
                    </label>
                    <input
                      type="text"
                      placeholder="tim.jennings@example.com"
                      className="outline-0 text-[#112D49]"
                    />
                  </div>
                  <UnderSvg />
                </div>
              </div>
              <p className="font-bold text-2xl leading-[120%] text-[#112D49] pt-[35px]">
                Delivery
              </p>
              <div className="flex flex-col bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                <label className="text-xs leading-[150%] text-[#8393A0]">
                  Country/ Region
                </label>
                <input
                  type="text"
                  placeholder="Guinea"
                  className="outline-0 text-[#112D49]"
                />
              </div>
              <div className="flex gap-[30px] mt-[26px]">
                <div className="flex-col flex bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full max-w-[361px]">
                  <label className="text-xs leading-[150%] text-[#8393A0]">
                    First name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="outline-0 text-[#112D49]"
                  />
                </div>
                <div className="flex-col flex bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full max-w-[361px]">
                  <label className="text-xs leading-[150%] text-[#8393A0]">
                    First name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="outline-0 text-[#112D49]"
                  />
                </div>
              </div>
              <div className="flex flex-col bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                <label className="text-xs leading-[150%] text-[#8393A0]">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="tim.jennings@example.com"
                  className="outline-0 text-[#112D49]"
                />
              </div>
              <div className="flex gap-[8px] pt-[16px] items-center">
                <InformationSvg />
                <p className="text-[#41576D] leading-[150%]">
                  Add a house number if you have one
                </p>
              </div>
              <div className="flex flex-col bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[42px]">
                <label className="text-xs leading-[150%] text-[#8393A0]">
                  Apartment, Suit, etc. (optional)
                </label>
                <input
                  type="text"
                  placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
                  className="outline-0 text-[#112D49]"
                />
              </div>
              <div className="flex gap-[30px] mt-[26px]">
                <div className="flex-col flex bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full max-w-[361px]">
                  <label className="text-xs leading-[150%] text-[#8393A0]">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Ajman"
                    className="outline-0 text-[#112D49]"
                  />
                </div>
                <div className="flex-col flex bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full max-w-[361px]">
                  <label className="text-xs leading-[150%] text-[#8393A0]">
                    Emirate
                  </label>
                  <input
                    type="text"
                    placeholder="Abu Dhabi"
                    className="outline-0 text-[#112D49]"
                  />
                </div>
              </div>
              <div className="flex gap-[8px] items-center pt-[16px]">
                <input type="checkbox" />
                <p className="leading-[150%] text-[#41576D]">
                  Save this information for next time{" "}
                </p>
              </div>
              <p className="text-lg leading-[150%] text-[#112D49] pt-[42px]">
                Shipping method
              </p>
              <div className="flex justify-between items-center bg-[#F4F8F7] py-[13px] px-[26px] rounded-xl w-full mt-[20px]">
                <input
                  type="text"
                  placeholder="Standard (Example)"
                  className="outline-0 text-[#112D49]"
                />
                <p className="font-semibold leading-[150%] text-[#112D49]">
                  AED 20.00
                </p>
              </div>
              <p className="font-bold text-2xl leading-[120%] text-[#112D49] pt-[42px]">
                Payment
              </p>
              <p className="leading-[150%] text-[#41576D] pt-[4px]">
                All transactions are secure and encrypted.
              </p>
              <div className="border border-[#E8EBED] py-[20px] px-[28px] mt-[20px]">
                <div className="flex justify-between flex-wrap">
                  <div className="flex gap-[8px] items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        checked={selected === "paypal"}
                        onChange={() => setSelected("paypal")}
                        className="sr-only"
                      />
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                          selected === "paypal"
                            ? "border-4 border-blue-400"
                            : "border-2 border-gray-300"
                        }`}
                      >
                        {selected === "paypal" && (
                          <div className="w-3 h-3 bg-blue-400 rounded-full" />
                        )}
                      </div>
                    </label>
                    <PaypalSvg />
                  </div>
                  <CreditCards />
                </div>
                <div className="flex gap-[8px] items-center pt-[34px]">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selected === "card"}
                      onChange={() => setSelected("card")}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                        selected === "card"
                          ? "border-4 border-blue-400"
                          : "border-2 border-gray-300"
                      }`}
                    >
                      {selected === "card" && (
                        <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      )}
                    </div>
                  </label>
                  <p className="leading-[150%] text-[#40566D]">
                    Credit Card/ Debit Card
                  </p>
                </div>
                <div className="flex justify-between gap-[28px]">
                  <div className="w-1/2">
                    <p className="font-bold text-lg leading-[120%] text-[#112D49] pt-[35px]">
                      Card Number
                    </p>
                    <input
                      type="number"
                      placeholder=""
                      className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full max-w-[334px] mt-[14px]"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="font-bold text-lg leading-[120%] text-[#112D49] pt-[35px]">
                      Name on Card
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full max-w-[334px] mt-[14px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-[28px]">
                  <div className="w-1/2">
                    <p className="font-bold text-lg leading-[120%] text-[#112D49] pt-[35px]">
                      Expire Date
                    </p>
                    <input
                      type="number"
                      placeholder=""
                      className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full mt-[14px]"
                    />
                  </div>
                  <div className="w-1/2">
                    <p className="font-bold text-lg leading-[120%] text-[#112D49] pt-[35px]">
                      CVC
                    </p>
                    <input
                      type="text"
                      placeholder=""
                      className="bg-[#F4F8F7] rounded-[12px] h-[52px] w-full mt-[14px]"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-[8px] mt-[48px]">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={selected === "paypal"}
                      onChange={() => setSelected("paypal")}
                      className="sr-only"
                    />
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                        selected === "paypal"
                          ? "border-4 border-blue-400"
                          : "border-2 border-gray-300"
                      }`}
                    >
                      {selected === "paypal" && (
                        <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      )}
                    </div>
                  </label>
                  <p>Bank Transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

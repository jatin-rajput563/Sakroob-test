import React from "react";
import Heading from "../components/common/Heading";
import Description from "../components/common/Description";
import Module from "../assets/images/png/Module-img.png";
import Parts from "../assets/images/png/parts.png";
import DiyTools from "../assets/images/png/Diy-Tools.png";
import Cables from "../assets/images/png/Cables.png";
import GamingController from "../assets/images/png/gaming-controler.png";
import PiKits from "../assets/images/png/piKits.png";

const Product = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[132px]">
        <div className="max-w-[1384px] w-full px-4 mx-auto">
          <p className="text-center italic text-lg sm:text-xl leading-[120%] text-[#112D49]">
            Featured Categories
          </p>
          <Heading />
          <Heading
            headingClass="max-w-[700px] pt-2 mx-auto text-center"
            headingText="Shop Our Most Popular Products"
          />
          <div className="flex flex-wrap gap-6 mt-8 sm:mt-12 md:mt-[57px]">
            <div className="flex w-full max-xl:flex-wrap gap-6">
              <div className="min-h-[291px] sm:min-h-[335px] bg-[#D5E8FF] rounded-[8px] w-full md:w-[48%] xl:max-w-[680px]">
                <div className="lg:flex justify-between sm:pl-8 2xl:pl-[62px] pl-6 pt-6 sm:pt-[73px]">
                  <Description
                    descriptionClass="max-xl:text-2xl max-sm:text-2xl lg:pt-[44px] max-w-[213px]"
                    descriptionText="Sensors & Modules"
                  />
                  <img
                    className="max-w-[246px] mt-7 ml-auto max-xl:w-[270px] max-2xl:w-[350px]"
                    src={Module}
                    alt="sensor"
                  />
                </div>
              </div>
              <div className="min-h-[291px] sm:min-h-[335px] bg-[#EEF4FB] rounded-[8px] flex flex-col justify-between w-full md:w-[48%] xl:max-w-[326px]">
                <Description
                  descriptionClass="pt-[32px] max-sm:text-2xl max-w-[213px] text-center mx-auto"
                  descriptionText="Custom PC Parts"
                />
                <img
                  className="max-w-[157px] sm:max-w-[174px] mx-auto"
                  src={Parts}
                  alt="part"
                />
              </div>
              <div className="min-h-[291px] sm:min-h-[335px] bg-[#E5E4E2] rounded-[8px] flex flex-col justify-between sm:pb-3 w-full md:w-[48%] xl:max-w-[326px]">
                <Description
                  descriptionClass="pt-[46px] max-sm:text-2xl text-center mx-auto"
                  descriptionText="DIY Tools"
                />
                <img
                  className="max-w-[162px] sm:max-w-[184px] mx-auto"
                  src={DiyTools}
                  alt="tools"
                />
              </div>
            </div>
            <div className="flex w-full max-xl:flex-wrap gap-6">
              <div className="min-h-[291px] sm:min-h-[335px] max-h-[335px] bg-[#EEF4FB] rounded-[8px] flex flex-col justify-between w-full md:w-[48%] xl:max-w-[313px] relative">
                <Description
                  descriptionClass="pt-[26px] max-sm:text-2xl max-w-[213px] sm:text-center sm:ml-auto"
                  descriptionText="Cables & Connectors"
                />
                <img
                  className="max-w-[306px] absolute -right-4 max-sm:-rotate-90 sm:left-0 bottom-4.5 sm:bottom-0"
                  src={Cables}
                  alt="cable"
                />
              </div>
              <div className="min-h-[291px] sm:min-h-[335px] max-h-[335px] bg-[#E5E4E2] rounded-[8px] flex flex-col justify-between pb-4.5 w-full md:w-[48%] xl:max-w-[313px]">
                <Description
                  descriptionClass="pt-[22px] max-sm:text-2xl text-center mx-auto max-sm:max-w-[156px]"
                  descriptionText="Gaming Peripherals"
                />
                <img
                  className="max-w-[198px] sm:max-w-[266px] mx-auto"
                  src={GamingController}
                  alt="peripherals"
                />
              </div>
              <div className="min-h-[291px] sm:min-h-[335px] max-h-[335px] bg-[#D5E8FF] rounded-[8px] relative w-full md:w-[48%] xl:w-[50%]">
                <Description
                  descriptionClass="max-xl:text-2xl pt-[59px] text-center"
                  descriptionText="Raspberry Pi Kits"
                />
                <img className="absolute bottom-0" src={PiKits} alt="sensor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

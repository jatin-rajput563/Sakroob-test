import React from "react";
import Heading from "../components/common/Heading";
import Description from "../components/common/Description";
import Module from "../assets/images/png/module-img.png";
import Parts from "../assets/images/png/parts.png";
import DiyTools from "../assets/images/png/diy-tools.png";
import Cables from "../assets/images/png/cables.png";
import GamingController from "../assets/images/png/gaming-controler.png";
import PiKits from "../assets/images/png/piKits.png";

const Product = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center sm:pt-[132px] pt-[112px]"
    >
      <div className="max-w-[1384px] w-full px-4 mx-auto">
        <p className="text-center italic text-lg sm:text-xl leading-[120%] text-[#112D49]">
          Featured Categories
        </p>
        <Heading
          headClass="sm:max-w-[602px] max-w-[264px] pt-2 mx-auto text-center"
          headText="Shop Our Most Popular Products"
        />
        <div className="flex flex-wrap w-full gap-6 mt-8 sm:mt-12 md:mt-[57px]">
          <div className="w-full md:w-[48%] xl:max-w-[680px]">
            <div className="min-h-[291px] sm:min-h-[335px] bg-[#D5E8FF] rounded-[8px] w-full">
              <div className="lg:flex justify-between sm:pl-8 2xl:pl-[62px] pl-6 pt-6 sm:pt-[46.8px]">
                <Heading
                  headClass="lg:pt-[44px] sm:!text-[32px] !text-[24px] !mx-0  max-w-[213px] !text-left"
                  headText="Sensors & Modules"
                />
                <img
                  className="min-[1050px]:max-w-[372px] max-w-[246px] w-full mt-7 ml-auto pointer-events-none"
                  src={Module}
                  alt="Module-img"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[48%] xl:max-w-[326px]">
            <div className="min-h-[291px] sm:min-h-[335px] bg-[#EEF4FB] rounded-[8px] flex flex-col justify-between w-full h-full">
              <Heading
                headClass="pt-[44px] max-w-[213px] sm:!text-[32px] !text-[24px]"
                headText="Custom PC Parts"
              />
              <img
                className="sm:max-w-[174px] max-w-[157px] w-full mx-auto pointer-events-none"
                src={Parts}
                alt="part"
              />
            </div>
          </div>
          <div className="w-full md:w-[48%] xl:max-w-[326px]">
            <div className="min-h-[291px] sm:min-h-[335px] bg-[#E5E4E2] rounded-[8px] flex flex-col justify-between sm:pb-3 w-full h-full">
              <Heading
                headClass="pt-[46px] sm:!text-[32px] !text-[24px]"
                headText="DIY Tools"
              />
              <img
                className="sm:max-w-[184px] max-w-[174px] mx-auto pointer-events-none"
                src={DiyTools}
                alt="tools"
              />
            </div>
          </div>
          <div className="w-full md:w-[48%] xl:max-w-[313px]">
            <div className="min-h-[291px] sm:min-h-[335px] max-h-[335px] bg-[#EEF4FB] rounded-[8px] flex flex-col justify-between w-full relative h-full">
              <Heading
                headClass="pt-[26px] sm:!text-[32px] !mx-0 sm:!ml-auto !text-[24px] max-w-[213px] sm:text-center !text-left pl-[24px] sm:pl-0"
                headText="Cables & Connectors"
              />
              <img
                className="sm:max-w-[306px] max-w-[294px] pointer-events-none absolute -right-4 max-sm:-rotate-90 sm:left-0 bottom-4.5 sm:bottom-0"
                src={Cables}
                alt="cable"
              />
            </div>
          </div>
          <div className="w-full md:w-[48%] xl:max-w-[313px]">
            <div className="min-h-[291px] sm:min-h-[335px] max-h-[335px] bg-[#E5E4E2] rounded-[8px] flex flex-col justify-between pb-4.5 w-full h-full">
              <Heading
                headClass="pt-[22px] sm:!text-[32px] !text-[24px] text-center mx-auto max-w-[241px] max-sm:max-w-[156px]"
                headText="Gaming Peripherals"
              />
              <img
                className="max-w-[198px] pointer-events-none sm:max-w-[266px] mx-auto"
                src={GamingController}
                alt="peripherals"
              />
            </div>
          </div>
          <div className="w-full md:w-[48%] xl:w-[50%]">
            <div className="min-h-[291px] sm:min-h-[335px] max-h-[335px] bg-[#D5E8FF] rounded-[8px] relative w-full h-full">
              <Description descriptionClass="" descriptionText="" />
              <Heading
                headClass="sm:!text-[32px] !text-[24px] pt-[59px] z-10 relative"
                headText="Raspberry Pi Kits"
              />
              <img
                className="absolute bottom-0 pointer-events-none"
                src={PiKits}
                alt="sensor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

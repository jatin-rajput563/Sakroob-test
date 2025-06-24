import React from "react";
import {
  FEATURED_CATEGORIES_PRODUCTS,
  GRIDSTYLE_CLASS,
  HEADINGSTYLE_DATA,
  IMAGESTYLE_CLASS,
} from "../utils/helper";
import Heading from "./common/Heading";
import Para from "./common/Para";

const Products = () => {
  return (
    <>
      <div className="max-w-[1384px] px-3 [min-width:500px]:px-4 [min-width:850px]:px-6 mx-auto my-[60px] [min-width:500px]:my-[80px] [min-width:850px]:my-[132px]">
        <Para
          paraText="Featured Categories"
          paraClass="!text-base [min-width:500px]:!text-lg [min-width:850px]:!text-xl italic text-center"
        />
        <Heading
          headText="Shop Our Most Popular Products"
          headClass="max-w-[90%] [min-width:500px]:max-w-[95%] [min-width:850px]:max-w-[602px] pt-2 pb-6 [min-width:500px]:pb-8 [min-width:850px]:pb-[57px] mx-auto text-center"
        />
        <div className="grid [min-width:1440px]:grid-cols-4 [min-width:1440px]:grid-rows-2 xl:grid-cols-4 xl:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 [max-width:499px]:grid-cols-1 grid-cols-1 gap-4 [min-width:500px]:gap-5 [min-width:850px]:gap-6">
          {FEATURED_CATEGORIES_PRODUCTS.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 min-h-[220px] [min-width:500px]:min-h-[260px] [min-width:850px]:min-h-[335px] flex flex-col-reverse lg:block items-center gap-4 ${GRIDSTYLE_CLASS[index]}`}
            >
              <div className={`lg:absolute ${IMAGESTYLE_CLASS[index]}`}>
                <img
                  src={item.categorieImg}
                  alt={item.categorieName || "Category"}
                  className="object-cover w-full rounded-[10px] [min-width:500px]:rounded-[16px] [min-width:850px]:rounded-[20px] md:rounded-[30px] [min-width:500px]:absolute max-h-[180px] [min-width:500px]:max-h-[220px] [min-width:850px]:max-h-none"
                />
              </div>
              <h4
                className={`text-[18px] [min-width:500px]:text-[22px] [min-width:850px]:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#112D49] relative z-10 text-center sm:text-start ${HEADINGSTYLE_DATA[index]}`}
              >
                {item.categorieName}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

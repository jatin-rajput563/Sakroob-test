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
      <div className="max-w-[1384px] px-6 mx-auto my-[132px]">
        <Para
          paraText="Featured Categories"
          paraClass="!text-xl italic text-center"
        />
        <Heading
          headText="Shop Our Most Popular Products"
          headClass="max-w-[602px] pt-2 pb-[57px]"
        />
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-4 grid-cols-1 gap-6">
          {FEATURED_CATEGORIES_PRODUCTS.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[8px] cursor-pointer active:scale-95 duration-200 sm:min-h-[335px] min-h-[298px] flex flex-col-reverse lg:block items-center gap-4 ${GRIDSTYLE_CLASS[index]}`}
            >
              <div className={`lg:absolute ${IMAGESTYLE_CLASS[index]}`}>
                <img
                  src={item.categorieImg}
                  alt={item.categorieName || "Category"}
                  className="object-cover w-full rounded-[10px] sm:rounded-[20px] md:rounded-[30px] sm:absolute"
                />
              </div>
              <h4
                className={`md:text-[32px] sm:text-[28px] text-[24px] font-bold text-[#112D49] relative z-10 ${HEADINGSTYLE_DATA[index]}`}
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

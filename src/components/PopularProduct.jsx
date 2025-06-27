import React, { useState } from "react";
import Heading from "./common/Heading";
import Buttons from "./common/Buttons";
import { POPULAR_DATA } from "../utils/helper";

const PopularProduct = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleFavoriteClick = (index) => {
    if (favoriteItems.includes(index)) {
      setFavoriteItems(favoriteItems.filter((item) => item !== index));
      setPopupMessage("Removed from Favorite 💔");
    } else {
      setFavoriteItems([...favoriteItems, index]);
      setPopupMessage("Added to Favorite ❤️");
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-5 right-5 bg-[#112D49] text-white px-4 py-2 rounded-[8px] shadow-lg z-50 transition-all duration-500">
          {popupMessage}
        </div>
      )}

      <div className="py-[132px]">
        <div className="max-w-[1140px] px-3 mx-auto">
          <Heading headClass="pb-[87px]" headText="Popular Products" />
          <div className="flex flex-wrap flex-row -mx-3 gap-[24px] max-md:gap-[48px]">
            {POPULAR_DATA.map((item, index) => (
              <div
                key={index}
                className="max-w-[364px] w-full border border-[#ECEEF0] h-[563px] p-4 rounded-[8px] flex flex-col justify-between"
              >
                <div>
                  <div className="w-full bg-[#E5E4E2] items-center h-[242px] flex justify-center rounded-[4px] relative overflow-visible">
                    <img
                      src={item.img}
                      className={`absolute  ${
                        index === 1 ? "-top-[30px]" : "-top-[50px]"
                      } left-1/2 -translate-x-1/2`}
                      alt="img"
                    />
                    <div
                      className="absolute top-[10px] right-[10px] cursor-pointer"
                      onClick={() => handleFavoriteClick(index)}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="32"
                          height="32"
                          rx="16"
                          fill={
                            favoriteItems.includes(index) ? "red" : "#73A4E0"
                          }
                          fillOpacity="0.12"
                        />
                        <path
                          d="M23.0255 9.69932C22.1056 9.14181 21.0157 8.90678 19.9382 9.03351C18.8606 9.16025 17.8607 9.64106 17.1055 10.3956L16.0025 11.4463H15.9767L14.8866 10.3956C14.1314 9.64106 13.1315 9.16025 12.0539 9.03351C10.9764 8.90678 9.88655 9.14181 8.96659 9.69932C8.42895 10.0362 7.97572 10.4849 7.63985 11.0127C7.30399 11.5404 7.09394 12.134 7.02502 12.7503C6.95609 13.3665 7.03002 13.9898 7.24142 14.5749C7.45282 15.16 7.79637 15.6921 8.24706 16.1325L15.9465 24L16.1016 23.8499L16.149 23.8958L23.758 16.1325C24.2081 15.6913 24.5508 15.1584 24.7611 14.5728C24.9715 13.9872 25.0443 13.3635 24.9741 12.7472C24.9039 12.131 24.6926 11.5376 24.3555 11.0103C24.0184 10.4831 23.5641 10.0352 23.0255 9.69932V9.69932Z"
                          stroke={
                            favoriteItems.includes(index) ? "red" : "#73A4E0"
                          }
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="font-bold text-2xl leading-[120%] pt-[19.35px] text-[#112D49]">
                    {item.title}
                  </p>
                  <p className="leading-[150%] text-[#41576D] max-w-[332px] pt-2">
                    {item.description}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-2xl ">{item.price}</p>
                    {item.svg && <item.svg />}
                  </div>
                  <div className="pt-[25px] flex justify-between items-center">
                    <Buttons
                      btnText="Shop Now"
                      btnClass="bg-white !text-[#112D49] px-[87.5px] !py-[17px] hover:!bg-[#112D49] hover:!text-white"
                    />
                    {item.shop && <item.shop />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProduct;

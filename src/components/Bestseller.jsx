import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "./common/Heading";
import Buttons from "./common/Buttons";
import "swiper/css";
import "swiper/css/navigation";
import { BESTSELLER_DATA } from "../utils/helper";
import { useCart } from "../context/CartContext";
import { Heart } from "../utils/Icons";

const Bestseller = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [cartMessage, setCartMessage] = useState("");
  const [cartPopup, setCartPopup] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleFavoriteClick = (index) => {
    if (favoriteItems.includes(index)) {
      setFavoriteItems(favoriteItems.filter((item) => item !== index));
      setPopupMessage("Removed from Favorite ❤︍");
    } else {
      setFavoriteItems([...favoriteItems, index]);
      setPopupMessage("Added to Favorite ❤︍");
    }
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const topPositions = [
    "-top-[45px]",
    "-top-[80px]",
    "-top-[105px]",
    "-top-[70px]",
  ];

  return (
    <>
      <div id="Categories" className="relative sm:pt-[132px] pt-[112px]">
        <div className="max-w-[1140px] mx-auto px-3">
          <Heading headText="Bestsellers" />
          <div
            ref={prevRef}
            className="w-[38px] h-[38px] hidden xl:flex absolute top-[63%] left-[14%] border items-center justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M7 13L1 7L6.79609 1"
                className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            ref={nextRef}
            className="w-[38px] h-[38px] hidden xl:flex absolute top-[63%] right-[14%] border items-center justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300 z-10"
          >
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
              <path
                d="M1 13L7 7L1.20391 1"
                className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 10 },
              480: { slidesPerView: 1.3, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              768: { slidesPerView: 2.5, spaceBetween: 0 },
              1024: { slidesPerView: 2.8, spaceBetween: 0 },
              1280: { slidesPerView: 3, spaceBetween: 0 },
            }}
          >
            {BESTSELLER_DATA.map((item, index) => {
              const numericPrice =
                typeof item.price === "string"
                  ? parseFloat(item.price.replace(/[₹,]/g, ""))
                  : Number(item.price);

              return (
                <SwiperSlide className="pt-[100px]" key={index}>
                  <div className="max-w-[364px] w-full border border-[#ECEEF0] h-[563px] p-4 rounded-[8px] flex flex-col justify-between">
                    <div>
                      <div className="w-full bg-[#E5E4E2] items-center h-[242px] flex justify-center rounded-[4px] relative overflow-visible">
                        <img
                          src={item.img}
                          className={`absolute ${topPositions[index]} left-1/2 -translate-x-1/2 pointer-events-none`}
                          alt="product"
                        />
                        <div
                          className="absolute top-[10px] right-[10px] cursor-pointer"
                          onClick={() => handleFavoriteClick(index)}
                        >
                          <Heart />
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
                        <p className="font-semibold text-2xl">
                          ₹{numericPrice}
                        </p>
                        {item.svg && <item.svg />}
                      </div>
                      <div className="pt-[25px] flex justify-between items-center">
                        <Buttons
                          btnText="Shop Now"
                          btnClass="bg-white !text-[#112D49] px-[87.5px] !py-[17px] hover:!bg-[#112D49] hover:!text-white"
                          onClick={() => {
                            const productData = {
                              id: item.id || index,
                              title: item.title,
                              description: item.description,
                              price: numericPrice,
                              img: item.img,
                            };
                            navigate(`/product/${item.id || index}`, {
                              state: { product: productData },
                            });
                            localStorage.setItem(
                              "selectedProduct",
                              JSON.stringify(productData)
                            );
                          }}
                        />
                        {item.shop && (
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              addToCart({
                                id: item.id || index,
                                name: item.title,
                                image: item.img,
                                price: numericPrice,
                              });
                              setCartMessage("Item added to cart 🛒");
                              setCartPopup(true);
                              setTimeout(() => setCartPopup(false), 2000);
                            }}
                          >
                            <item.shop />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="xl:hidden flex justify-center gap-4 mt-8">
            <button
              onClick={() => prevRef.current?.click()}
              className="w-[38px] h-[38px] border flex items-center justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M7 13L1 7L6.79609 1"
                  className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => nextRef.current?.click()}
              className="w-[38px] h-[38px] border flex items-center justify-center rounded-full cursor-pointer group hover:bg-[#112D49] transition-all duration-300"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M1 13L7 7L1.20391 1"
                  className="stroke-[#112D49] group-hover:stroke-white transition-all duration-300"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#112D49] text-white px-4 py-2 rounded shadow-lg z-50 transition">
          {popupMessage}
        </div>
      )}
      {cartPopup && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
          {cartMessage}
        </div>
      )}
    </>
  );
};

export default Bestseller;

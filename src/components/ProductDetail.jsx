import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Heading from "./common/Heading";
import Para from "./common/Para";
import Buttons from "./common/Buttons";
import { FiveStar, Minus, Plus } from "../utils/Icons";
import { useCart } from "../context/CartContext";
import Reviews from "./Reviews";
import PopularProduct from "./PopularProduct";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("#EEF4FB");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const [popup, setPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  const increaseQuantity = () => setQuantity((q) => q + 1);
  const decreaseQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state.product);
      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(location.state.product)
      );
    } else {
      const stored = localStorage.getItem("selectedProduct");
      if (stored) {
        try {
          setProduct(JSON.parse(stored));
        } catch (error) {
          console.error("Error parsing product from localStorage", error);
        }
      }
    }
  }, [location.state]);

  const colors = ["#010101", "#112D49", "#20E572", "#FFFFFF", "#73A4E0"];

  const showPopup = (message) => {
    setPopupMsg(message);
    setPopup(true);
    setTimeout(() => setPopup(false), 2000);
  };

  const handleAddToCart = () => {
    const formattedPrice =
      typeof product.price === "string"
        ? parseFloat(product.price.replace("₹", "").replace(",", ""))
        : product.price;

    addToCart({
      id: product.id || id,
      name: product.title,
      image: product.img,
      price: formattedPrice,
      quantity,
    });

    showPopup("Added to Cart 🛒");
  };

  const handleBuyNow = () => {
    const formattedPrice =
      typeof product.price === "string"
        ? parseFloat(product.price.replace("₹", "").replace(",", ""))
        : product.price;

    const checkoutProduct = {
      id: product.id || id,
      name: product.title,
      image: product.img,
      price: formattedPrice,
      quantity,
    };
    navigate("/checkout", { state: { checkoutItems: [checkoutProduct] } });
  };

  if (!product)
    return <div className="text-center mt-20">Loading product...</div>;

  return (
    <div className="sm:pt-[91px] pt-[60px]">
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="flex flex-wrap flex-row -mx-3">
          <div className="w-full lg:w-6/12 px-3 mb-8 lg:mb-0">
            <div
              className="sm:py-[44px] py-[12px] sm:px-[42px] px-[12px] max-w-[517px] rounded-[8px] mx-auto"
              style={{ backgroundColor: selectedColor }}
            >
              <img
                className="max-w-[432.07px] w-full min-h-[475px] mx-auto object-contain"
                src={product.img}
                alt="Product"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-3">
            <Heading
              headClass="!text-[34px] text-left"
              headText={product.title}
            />
            <Para paraClass="pt-4" paraText={product.description} />
            <Heading
              headClass="!text-[34px] text-left pt-4"
              headText={`₹ ${
                typeof product.price === "number"
                  ? product.price.toFixed(2)
                  : product.price
              }`}
            />
            <div className="pt-4">
              <FiveStar />
            </div>

            <div className="flex flex-col items-start gap-4">
              <Para
                paraText="Select Color"
                paraClass="!font-semibold pt-[24px]"
              />
              <div className="flex items-center gap-[6.52px] flex-wrap">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-[29px] h-[29px] rounded-full flex items-center justify-center cursor-pointer border ${
                      color === "#FFFFFF" ? "shadow" : ""
                    } ${
                      selectedColor === color
                        ? "border-gray-400"
                        : "border-transparent"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {selectedColor === color && (
                      <svg
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                      >
                        <path
                          d="M18.4532 1.96968L7.33693 13.2388C7.24012 13.3372 7.12507 13.4154 6.99839 13.4687C6.87172 13.522 6.73591 13.5495 6.59874 13.5495C6.46158 13.5495 6.32577 13.522 6.19909 13.4687C6.07242 13.4154 5.95737 13.3372 5.86055 13.2388L0.997175 8.30853C0.900234 8.21026 0.823337 8.09359 0.770873 7.96519C0.718409 7.83679 0.691406 7.69917 0.691406 7.56019C0.691406 7.42122 0.718409 7.2836 0.770873 7.1552C0.823337 7.0268 0.900234 6.91013 0.997175 6.81186C1.09412 6.71359 1.2092 6.63563 1.33586 6.58245C1.46252 6.52926 1.59827 6.50189 1.73537 6.50189C1.87246 6.50189 2.00821 6.52926 2.13487 6.58245C2.26153 6.63563 2.37662 6.71359 2.47356 6.81186L6.59961 10.9946L16.9786 0.474766C17.1744 0.276295 17.4399 0.164795 17.7168 0.164795C17.9936 0.164795 18.2592 0.276295 18.455 0.474766C18.6507 0.673237 18.7607 0.942422 18.7607 1.2231C18.7607 1.50378 18.6507 1.77297 18.455 1.97144L18.4532 1.96968Z"
                          fill={selectedColor === "#FFFFFF" ? "black" : "white"}
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <Para
                paraText="Select Quantity"
                paraClass="!font-semibold pt-[35px]"
              />
              <div className="flex items-center">
                <button
                  onClick={decreaseQuantity}
                  className="w-[48px] h-[44px] bg-[#73A4E0] text-white text-xl flex items-center justify-center rounded-l-[8px]"
                >
                  <Minus />
                </button>
                <div className="w-[85px] h-[44px] border border-[#C2C2C2] text-[#586C80] justify-center flex items-center">
                  {quantity.toString().padStart(2, "0")}
                </div>
                <button
                  onClick={increaseQuantity}
                  className="w-[48px] h-[44px] bg-[#112D49] text-white text-xl flex items-center justify-center rounded-r-[8px]"
                >
                  <Plus />
                </button>
              </div>
              <div className="pt-[78px] w-full">
                <Buttons
                  btnClass="!w-full !py-[17px]"
                  btnText="Buy Now"
                  onClick={handleBuyNow}
                />
                <Buttons
                  btnClass="!w-full !py-[17px] mt-[20px] bg-white !text-[#112D49] hover:!bg-[#112D49] hover:!text-white border border-[#112D49]"
                  btnText="Add to Cart"
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
          {popupMsg}
        </div>
      )}
      <Reviews />
      <PopularProduct />
    </div>
  );
};

export default ProductDetail;

import { useState } from "react";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import cart from "../assets/images/icon-cart.svg";

const ProductData = ({ addCart }) => {
  const [productCount, setProductCount] = useState(0);

  const setCartData = (e) => {
    addCart(e);
    setProductCount(0);
  };

  return (
    <div className="p-[25px] order-last lg:w-[445px]">
      <div className="mb-[38px]">
        <h3 className="text-Orange font-bold mb-[20px]">Sneaker Company</h3>
        <h1 className="font-bold text-[25px] leading-[1.3] mb-[28px]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-[15px] leading-[1.65] text-Dark-grayish-blue ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="flex justify-between items-center mb-[28px]">
        <div className="flex items-center">
          <h2 className="font-bold text-[30px] mr-[18px]">$125.00</h2>
          <div className="bg-Pale-orange w-[50px] h-[28px] text-center rounded-[8px]">
            <p className="font-bold text-Orange">50%</p>
          </div>
        </div>
        <p className="font-bold text-Grayish-blue line-through ">$250.00</p>
      </div>
      <div className="">
        <div className="flex justify-between items-center bg-Light-grayish-blue px-[24px] py-[22px] rounded-[8px] mb-[16px]">
          <img
            className="cursor-pointer"
            onClick={() => {
              productCount > 0 && setProductCount(productCount - 1);
            }}
            src={minusIcon}
            alt="minus"
          />
          <p className="font-bold">{productCount}</p>
          <img
            className="cursor-pointer"
            onClick={() => {
              setProductCount(productCount + 1);
            }}
            src={plusIcon}
            alt="plus"
          />
        </div>
        <div
          className="flex justify-center items-center px-[90px] py-[20px] bg-Orange rounded-[8px] lg:hover:opacity-50 cursor-pointer"
          onClick={() => {
            productCount !== 0 && setCartData(productCount);
          }}
        >
          <svg className="mr-[14px]" width="22" height="20">
            <path
              fill="#FFFFFF"
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            />
          </svg>
          <h3 className="font-bold text-white">Add to cart</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductData;

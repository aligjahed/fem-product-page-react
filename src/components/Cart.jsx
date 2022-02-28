import pic from "../assets/images/image-product-1-thumbnail.jpg";
import bucket from "../assets/images/icon-delete.svg";

const Cart = ({ cartOpen, cartCount, resetCart }) => {
  const productSection = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mb-[25px]">
          <img
            className="w-[50px] rounded-[8px] mr-[18px]"
            src={pic}
            alt="product image"
          />
          <div className="flex flex-col">
            <p className="text-Dark-grayish-blue text-[13px]">
              Fall Limited Edition Sneakers
            </p>
            <p className="text-Dark-grayish-blue">
              $125 x {cartCount}{" "}
              <span className="text-black font-bold ml-[5px]">
                ${125 * cartCount}.00
              </span>
            </p>
          </div>
          <div>
            <img
              className="w-[14px] h-[16px] ml-[20px] cursor-pointer"
              src={bucket}
              alt="delete"
              onClick={resetCart}
            />
          </div>
        </div>
        <div className="text-center bg-Orange py-[16px] rounded-[8px] active:opacity-50 cursor-pointer">
          <h3 className="font-bold text-white">Checkout</h3>
        </div>
      </div>
    );
  };

  const emptyState = () => {
    return (
      <h3 className="font-bold text-Dark-grayish-blue">Your cart is empty</h3>
    );
  };

  return (
    <div className={cartOpen ? "cart z-10" : "hidden"}>
      <section className="p-[25px]">
        <h3 className=" font-bold">Cart</h3>
      </section>
      <hr />
      <section className="flex justify-center items-center h-[180px] p-[24px]">
        {cartCount !== 0 ? productSection() : emptyState()}
      </section>
    </div>
  );
};

export default Cart;

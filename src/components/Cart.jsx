const Cart = ({ cartOpen }) => {
  return (
    <div className={cartOpen ? "cart" : "hidden"}>
      <section className="p-[25px]">
        <h3 className=" font-bold">Cart</h3>
      </section>
      <hr />
      <section className="flex justify-center items-center h-[180px]">
        <h3 className="font-bold text-Dark-grayish-blue">Your cart is empty</h3>
      </section>
    </div>
  );
};

export default Cart;

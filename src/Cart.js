import { useContext } from "react";
import { Products } from "./Context/Context";

const Cart = () => {
  const {
    state: { cart }
  } = useContext(Products);
  console.log(cart);

  return (
    <div className="cart">
      {cart.length
        ? cart.map((item) => {
            console.log(item.qty);

            return (
              <div className="cart-items" key={item.id}>
                <span>{item.title}</span>
                <span>{item.qty}</span>
                <span>{item.price}</span>
              </div>
            );
          })
        : "Cart is empty"}
    </div>
  );
};

export default Cart;

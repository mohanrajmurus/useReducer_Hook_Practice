import { useContext, useEffect } from "react";
import { Products } from "./Context/Context";

const Home = () => {
  const {
    state: { product, cart },
    dispatch
  } = useContext(Products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "ADD_PRODUCTS",
          payload: json
        });
      });
  }, []);
  return (
    <div className="home">
      {product.map((prod, index) => {
        return (
          <ul key={index}>
            <li>{prod.title}</li>
            <li>${prod.price}</li>
            <li>Ratings: {prod.rating.rate} / 5</li>
            {cart.some((p) => p.id === prod.id) ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE FROM CART",
                    payload: prod
                  });
                }}
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD TO CART",
                    payload: prod
                  });
                }}
              >
                Add to Cart
              </button>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default Home;

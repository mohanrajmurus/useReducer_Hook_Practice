import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const Products = createContext();

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    product: [],
    cart: [],
    isOpen: false
  });
  return (
    <Products.Provider value={{ state, dispatch }}>
      {children}
    </Products.Provider>
  );
};

export default ProductContext;

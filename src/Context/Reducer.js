export function reducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, product: action.payload };
    case "ADD TO CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE FROM CART":
      return {
        ...state,
        cart: state.cart.filter((c) => {
          return c.id !== action.payload.id;
        })
      };
    default:
      return state;
  }
}

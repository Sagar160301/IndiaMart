import { CART } from "./action";

const init = {
  cart: "",

};

export const cartReducer = (store = init, { type, payload }) => {
  console.log(payload, "pay");
  switch (type) {
    case CART:
      return {
        ...store,
        cart: payload,
      };
    default:
      return store;
  }
};

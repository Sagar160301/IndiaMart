export const CART = "CART_DATA";

export const addCart = (data) => {
  return {
    type: CART,
    payload: data,
  };
};

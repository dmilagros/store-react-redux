import { actionTypes } from "../constants/actionTypes"

export const setProducts = (products) => {
  // -------- 2 ACTIONS ----------
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
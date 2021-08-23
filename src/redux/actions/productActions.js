import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/actionTypes"

export const fetchProducts = () => async (dispatch) => {
  //return async function (dispatch, getState) {
  const response = await fakeStoreApi.get("/products");
  dispatch({
    type: actionTypes.FETCH_PRODUCTS,
    payload: response.data
  });
}

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
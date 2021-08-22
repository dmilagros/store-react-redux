import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: []
}
// -------- 3 REDUCERS ----------
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
}

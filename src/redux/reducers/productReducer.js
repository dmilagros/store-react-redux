import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [{
    id: 1,
    title: "T-shirt",
    category: "programmer"
  }]
}
// -------- 3 REDUCERS ----------
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}

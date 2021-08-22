import { actionTypes } from "../constants/actionTypes";

const initialState = {
  products: [{
    id: 1,
    title: "",
    category: "programmer"
  }]
}
// -------- 3 REDUCERS ----------
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}

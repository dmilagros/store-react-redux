import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

// -------- 4 CONBINE REDUCERS ----------
const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer
})

export default reducers;
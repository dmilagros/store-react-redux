import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

// -------- 4 CONBINE REDUCERS ----------
const reducers = combineReducers({
  allProducts: productReducer
})
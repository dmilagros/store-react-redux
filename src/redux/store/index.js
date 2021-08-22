import { createStore } from "redux";
import reducers from '../reducers' //..reducers/index

// -------- 5 STORE ----------


const store = createStore(reducers, {});

export default store;
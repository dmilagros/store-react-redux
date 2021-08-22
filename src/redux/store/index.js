import { createStore } from "redux";
import reducers from '../reducers' //..reducers/index

// -------- 5 STORE ----------


const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
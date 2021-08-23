import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from '../reducers' //..reducers/index

// -------- 5 STORE ----------
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
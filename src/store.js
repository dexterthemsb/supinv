import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import mainReducer from "./reducers/mainReducer";

const mw = [thunk];

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(...mw)));

export default store;

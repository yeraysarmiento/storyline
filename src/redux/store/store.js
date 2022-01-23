import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const { createStore, applyMiddleware } = require("redux");

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;

import productsReducer from "./productsReducer";
import currentProductReducer from "./currentProductReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer,
});

export default rootReducer;

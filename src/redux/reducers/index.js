import productsReducer from "./productsReducer";
import currentProductReducer from "./currentProductReducer";
import currentAdReducer from "./currentAdReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer,
  currentAd: currentAdReducer,
});

export default rootReducer;

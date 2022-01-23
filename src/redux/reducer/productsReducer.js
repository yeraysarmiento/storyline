import actionTypes from "../actions/actionTypes";

const productsReducer = (products = [], action = {}) => {
  let productsList;

  switch (action.type) {
    case actionTypes.getProducts:
      productsList = action.products;
      break;
    default:
      productsList = products;
  }

  return productsList;
};

export default productsReducer;

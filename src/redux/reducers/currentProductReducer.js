import actionTypes from "../actions/actionTypes";

const currentProductReducer = (product = {}, action = {}) => {
  let currentProduct;

  switch (action.type) {
    case actionTypes.loadCurrentProduct:
      currentProduct = action.product;
      break;
    default:
      currentProduct = product;
  }

  return currentProduct;
};

export default currentProductReducer;

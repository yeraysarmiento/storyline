import actionTypes from "../actions/actionTypes";

const currentProductReducer = (currentProduct = {}, action = {}) => {
  let currentProduct;

  switch (action.type) {
    case actionTypes.createAd:
      currentProduct.ads = [...currentProduct.ads, action.ad];
      break;
    case actionTypes.deleteAd:
      currentProduct.ads = [
        ...currentProduct.ads.filter((ad) => ad.heading !== action.ad.heading),
      ];
      break;
    case actionTypes.updateAd:
      currentProduct.ads = [
        ...currentProduct.ads.filter((ad) =>
          ad.heading === action.ad.heading ? action.ad : ad
        ),
      ];
      break;
    default:
      currentProduct = currentProduct;
  }

  return productsList;
};

export default currentProductReducer;
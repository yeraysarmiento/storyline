import actionTypes from "../actions/actionTypes";

const productsReducer = (products = [], action = {}) => {
  let productsList;

  switch (action.type) {
    case actionTypes.getProducts:
      productsList = action.products;
      break;
    // case actionTypes.createAd:
    //   currentProduct.ads = [...currentProduct.ads, action.ad];
    //   break;
    case actionTypes.deleteAd:
      productsList = [
        ...products.map((product) =>
          product.id === action.idProduct
            ? {
                ...product,
                ads: [...product.ads.filter((ad) => ad.id !== action.idAd)],
              }
            : product
        ),
      ];
      break;
    // case actionTypes.updateAd:
    //   currentProduct.ads = [
    //     ...currentProduct.ads.filter((ad) =>
    //       ad.heading === action.ad.heading ? action.ad : ad
    //     ),
    //   ];
    //   break;
    default:
      productsList = products;
  }

  return productsList;
};

export default productsReducer;

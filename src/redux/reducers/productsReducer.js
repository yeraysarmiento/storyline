import actionTypes from "../actions/actionTypes";

const productsReducer = (products = [], action = {}) => {
  let productsList;

  switch (action.type) {
    case actionTypes.getProducts:
      productsList = action.products;
      break;
    case actionTypes.createAd:
      productsList = [
        ...products.map((product) =>
          product.id === action.idProduct
            ? { ...product, ads: [...product.ads, action.ad] }
            : product
        ),
      ];
      break;
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
    case actionTypes.updateAd:
      productsList = [
        ...products.map((product) =>
          product.id === action.idProduct
            ? {
                ...product,
                ads: [
                  ...product.ads.map((ad) =>
                    ad.id === action.idAd ? { ...action.ad } : ad
                  ),
                ],
              }
            : product
        ),
      ];
      break;
    default:
      productsList = products;
  }

  return productsList;
};

export default productsReducer;

import actionTypes from "./actionTypes";

export const getProductsAction = (products) => ({
  type: actionTypes.getProducts,
  products,
});

export const createAdAction = (ad) => ({
  type: actionTypes.createAd,
  ad,
});

export const deleteAdAction = (ad) => ({
  type: actionTypes.deleteAd,
  ad,
});

export const updateAdAction = (ad) => ({
  type: actionTypes.updateAd,
  ad,
});
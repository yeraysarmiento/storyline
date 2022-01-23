import actionTypes from "./actionTypes";

export const getProductsAction = (products) => ({
  type: actionTypes.getProducts,
  products,
});

export const loadCurrentProductAction = (product) => ({
  type: actionTypes.loadCurrentProduct,
  product,
});

export const createAdAction = (ad) => ({
  type: actionTypes.createAd,
  ad,
});

export const deleteAdAction = (idAd, idProduct) => ({
  type: actionTypes.deleteAd,
  idAd,
  idProduct,
});

export const updateAdAction = (ad) => ({
  type: actionTypes.updateAd,
  ad,
});

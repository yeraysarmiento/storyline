import actionTypes from "./actionTypes";

export const getProductsAction = (products) => ({
  type: actionTypes.getProducts,
  products,
});

export const loadCurrentProductAction = (product) => ({
  type: actionTypes.loadCurrentProduct,
  product,
});

export const createAdAction = (ad, idProduct) => ({
  type: actionTypes.createAd,
  ad,
  idProduct,
});

export const deleteAdAction = (idAd, idProduct) => ({
  type: actionTypes.deleteAd,
  idAd,
  idProduct,
});

export const updateAdAction = (ad, idProduct) => ({
  type: actionTypes.updateAd,
  ad,
  idProduct,
});

export const loadCurrentAdAction = (ad) => ({
  type: actionTypes.loadCurrentAd,
  ad,
});

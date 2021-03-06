import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createAdAction,
  deleteAdAction,
  updateAdAction,
} from "../redux/actions/actionCreators";
import { getProductsThunk } from "../redux/thunks/productsThunk";

const useProducts = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((rootData) => rootData.products);

  const getProducts = useCallback(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const deleteAd = (idAd, idProduct) => {
    dispatch(deleteAdAction(idAd, idProduct));
  };

  const createAd = (ad, idProduct) => {
    dispatch(createAdAction(ad, idProduct));
  };

  const updateAd = (ad, idProduct) => {
    dispatch(updateAdAction(ad, idProduct));
  };

  return {
    productsList,
    getProducts,
    deleteAd,
    createAd,
    updateAd,
  };
};

export default useProducts;

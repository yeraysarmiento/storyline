import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdThunk, getProductsThunk } from "../redux/thunks/productsThunk";

const useProducts = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((rootData) => rootData.products);

  const getProducts = useCallback(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const deleteAd = (idAd, idProduct) => {
    dispatch(deleteAdThunk(idAd, idProduct));
  };

  return {
    productsList,
    getProducts,
    deleteAd,
  };
};

export default useProducts;

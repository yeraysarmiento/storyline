import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../redux/thunks/productsThunk";

const useProducts = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((rootData) => rootData.products);

  const getProducts = useCallback(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return {
    productsList,
    getProducts,
  };
};

export default useProducts;

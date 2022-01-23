import { useDispatch, useSelector } from "react-redux";
import { deleteAdThunk } from "../redux/thunks/currentProductThunk";

const useCurrentProduct = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((rootData) => rootData.currentProduct);

  const deleteAd = (id) => {
    dispatch(deleteAdThunk(id));
  };

  return {
    currentProduct,
    deleteAd,
  };
};

export default useCurrentProduct;

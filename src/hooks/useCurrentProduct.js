import { useDispatch, useSelector } from "react-redux";
import { loadCurrentProductAction } from "../redux/actions/actionCreators";
import { deleteAdThunk } from "../redux/thunks/currentProductThunk";

const useCurrentProduct = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((rootData) => rootData.currentProduct);

  const loadCurrentProduct = (product) => {
    dispatch(loadCurrentProductAction(product));
  };

  const deleteAd = (id) => {
    dispatch(deleteAdThunk(id));
  };

  return {
    currentProduct,
    loadCurrentProduct,
    deleteAd,
  };
};

export default useCurrentProduct;

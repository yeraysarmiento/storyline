import { useDispatch, useSelector } from "react-redux";
import { loadCurrentProductAction } from "../redux/actions/actionCreators";

const useCurrentProduct = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector((rootData) => rootData.currentProduct);

  const loadCurrentProduct = (product) => {
    dispatch(loadCurrentProductAction(product));
  };

  return {
    currentProduct,
    loadCurrentProduct,
  };
};

export default useCurrentProduct;

import axios from "axios";
import { getProductsAction } from "../actions/actionCreators";

export const getProductsThunk = () => async (dispatch) => {
  const { data: productsList } = await axios.get("/products");
  dispatch(getProductsAction(productsList));
};

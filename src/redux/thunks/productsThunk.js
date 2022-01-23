import axios from "axios";
import { getProductsAction } from "../actions/actionCreators";

export const getProductsThunk = () => async (dispatch) => {
  const { data: productsList } = await axios.get(
    "http://localhost:4000/productslist"
  );
  dispatch(getProductsAction(productsList));
};

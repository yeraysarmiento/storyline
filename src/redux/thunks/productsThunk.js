import axios from "axios";
import { getProductsAction } from "../actions/actionCreators";

export const getProductsThunk = () => async (dispatch) => {
  const {
    data: { productsList },
  } = await axios.get("http://localhost:4000/products");
  dispatch(getProductsAction(productsList));
};

// export const deleteAdThunk = (idAd, idProduct) => async (dispatch) => {
//   await axios.delete(
//     `http://localhost:4000/ad/delete/${idAd}?idproduct=${idProduct}`
//   );
//   dispatch(deleteAdAction(idAd, idProduct));
// };

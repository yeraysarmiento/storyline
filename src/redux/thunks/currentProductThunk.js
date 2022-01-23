import axios from "axios";
import { deleteAdAction } from "../actions/actionCreators";

export const deleteAdThunk = (id) => async (dispatch) => {
  await axios.delete(`/products/${id}`);
  dispatch(deleteAdAction(id));
};

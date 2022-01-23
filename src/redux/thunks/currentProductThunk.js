import axios from "axios";
import { deleteAdAction } from "../actions/actionCreators";

export const deleteAdThunk = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:4000/productslist/${id}`);
  dispatch(deleteAdAction(id));
};

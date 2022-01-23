import { useDispatch, useSelector } from "react-redux";
import {
  deleteCurrentAdAction,
  loadCurrentAdAction,
} from "../redux/actions/actionCreators";

const useCurrentAd = () => {
  const dispatch = useDispatch();
  const { currentAd } = useSelector((store) => store);

  const loadCurrentAd = (ad) => {
    dispatch(loadCurrentAdAction(ad));
  };

  const deleteCurrentAd = () => {
    dispatch(deleteCurrentAdAction());
  };

  return {
    currentAd,
    loadCurrentAd,
    deleteCurrentAd,
  };
};

export default useCurrentAd;

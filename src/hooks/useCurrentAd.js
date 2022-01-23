import { useDispatch, useSelector } from "react-redux";
import { loadCurrentAdAction } from "../redux/actions/actionCreators";

const useCurrentAd = () => {
  const dispatch = useDispatch();
  const { currentAd } = useSelector((store) => store);

  const loadCurrentAd = (ad) => {
    dispatch(loadCurrentAdAction(ad));
  };

  return {
    currentAd,
    loadCurrentAd,
  };
};

export default useCurrentAd;

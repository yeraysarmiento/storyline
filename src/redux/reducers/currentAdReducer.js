import actionTypes from "../actions/actionTypes";

const currentAdReducer = (ad = {}, action = {}) => {
  let currentAd;

  switch (action.type) {
    case actionTypes.loadCurrentAd:
      currentAd = action.ad;
      break;
    case actionTypes.deleteCurrentAd:
      currentAd = {};
      break;
    default:
      currentAd = ad;
  }

  return currentAd;
};

export default currentAdReducer;

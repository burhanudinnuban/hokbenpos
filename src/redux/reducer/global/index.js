import {reducerRequest} from "../../../constants/reducer";

const initialStateRoot = {
  loading: false,
  refresh: false,
};

const global = (state = initialStateRoot, action) => {
  switch (action.type) {
  case reducerRequest.LOADING_REQUEST:
    return {
      ...state,
      loading: action.value,
    };
  case reducerRequest.REFRESH_REQUEST:
    return {
      ...state,
      refresh: action.value,
    };
  default:
    return state;
  }
};

export default global;

import {reducerRequest} from "../../../constants/reducer";

export const didLoading = (value) => ({
  type: reducerRequest.LOADING_REQUEST,
  value,
});

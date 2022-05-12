import {reducerFailed, reducerRequest, reducerSuccess} from "../../../constants/reducer";
  
export const didPayCart = (value) => ({
  type: reducerSuccess.DATA_CART_SUCCESS,
  value,
});
  
export const didDeleteCart = (value) => ({
  type: reducerFailed.DATA_CART_FAILED,
  value,
});
  
export const didAddCart = (value) => ({
  type: reducerRequest.DATA_CART_REQUEST,
  value,
});
  
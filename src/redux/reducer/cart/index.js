import {reducerFailed, reducerRequest, reducerSuccess} from "../../../constants/reducer";

  
const initialStateRoot = {
  dataCartRequest: [],
  dataCartSuccess: [],
  dataCartFailed: undefined,
};
  
const cart = (state = initialStateRoot, action) => {
  switch (action.type) {
  case reducerRequest.DATA_CART_REQUEST:
    const index = state.dataCartRequest.findIndex(
      (item) => item.id === action.value.id,
    );
    let newDataCart = state.dataCartRequest;

    if (state.dataCartRequest.length === 0) {
      return {
        ...state,
        dataCartRequest: [action.value]
      };
    }
    
    if (state.dataCartRequest.length > 0) { 
      if (index === -1) {
        return {
          ...state,
          dataCartRequest: [...state.dataCartRequest, action.value]
        };
      }
      if (index > -1) {
        newDataCart[index].qty = action.value.qty;
        return {
          ...state,
          dataCartRequest: [...newDataCart]
        };
      }
    }
    break;
  case reducerFailed.DATA_CART_FAILED:
    return {
      ...state,
      dataCartRequest: state.dataCartRequest.filter(
        (item) => item.id !== action.value.id,
      ),
    };
  case reducerSuccess.DATA_CART_SUCCESS:
    return {
      dataCartRequest: [],
      dataCartSuccess: {...action.value},
    };
  default:
    return state;
  }
};
  
export default cart;
  
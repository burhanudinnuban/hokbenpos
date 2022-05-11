import {
  reducerFailed,
  reducerRequest,
  reducerSuccess,
} from '../../../../constants/reducer';

const initialStateRoot = {
  dataLoginRequest: undefined,
  dataLoginSuccess: undefined,
  dataRegisterRequest: undefined,
  dataRegisterSuccess: undefined,
  dataLoginFailed: undefined,
  isLoginRequest: false,
  firstLaunchRequest: false,
};

const auth = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducerRequest.DATA_LOGIN_REQUEST:
      return {
        ...state,
        dataLoginRequest: action.value,
      };
    case reducerSuccess.DATA_LOGIN_SUCCESS:
      return {
        ...state,
        dataLoginSuccess: action.value,
      };
    case reducerRequest.DATA_REGISTER_REQUEST:
      return {
        ...state,
        dataRegisterRequest: action.value,
      };
    case reducerSuccess.DATA_REGISTER_SUCCESS:
      return {
        ...state,
        dataRegisterSuccess: action.value,
      };
    case reducerFailed.DATA_LOGIN_FAILED:
      return {
        ...state,
        dataLoginFailed: action.value,
      };
    case reducerRequest.ISLOGIN_REQUEST:
      return {
        ...state,
        isLoginRequest: action.value,
      };
    case reducerRequest.FIRST_LAUNCH_REQUEST:
      return {
        ...state,
        firstLaunchRequest: action.value,
      };
    default:
      return state;
  }
};

export default auth;

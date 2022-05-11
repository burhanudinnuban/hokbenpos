import {
  reducerFailed,
  reducerRequest,
  reducerSuccess,
} from '../../../../constants/reducer';

export const didLogin = value => ({
  type: reducerRequest.DATA_LOGIN_REQUEST,
  value,
});

export const didLoginSuccess = value => ({
  type: reducerSuccess.DATA_LOGIN_SUCCESS,
  value,
});

export const didLoginFailed = value => ({
  type: reducerFailed.DATA_LOGIN_FAILED,
  value,
});

export const didIsLogin = value => ({
  type: reducerRequest.ISLOGIN_REQUEST,
  value,
});

export const didFirstLauch = value => ({
  type: reducerRequest.FIRST_LAUNCH_REQUEST,
  value,
});

export const didRegisterRequest = value => ({
  type: reducerRequest.DATA_REGISTER_REQUEST,
  value,
});

export const didRegisterSuccess = value => ({
  type: reducerSuccess.DATA_REGISTER_SUCCESS,
  value,
});

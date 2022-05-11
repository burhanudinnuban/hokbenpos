import {call, fork, put, take} from 'redux-saga/effects';
import {reducerRequest} from '../../../../constants/reducer';
import {showError, showSuccess} from '../../../../utils';
import {
  didIsLogin,
  didLoginFailed,
  didLoginSuccess,
  didRegisterSuccess,
} from '../../action';
import {didLoading} from '../../action/global';
import {loginApi, registerApi} from '../../request/auth';

export function* loginFlow() {
  while (true) {
    const {value} = yield take(reducerRequest.DATA_LOGIN_REQUEST);
    yield put(didLoading(true));
    try {
      const response = yield call(loginApi, value);
      yield put(didLoginSuccess(response.data));
      yield put(didIsLogin(true));
      yield put(didLoading(false));
    } catch (error) {
      const {message} =
        (error.response && error.response.data) || error.message;
      showError(message);
      yield put(didLoginFailed(message));
      yield put(didLoading(false));
    }
  }
}

export function* registerFlow() {
  while (true) {
    const {value} = yield take(reducerRequest.DATA_REGISTER_REQUEST);
    yield put(didLoading(true));
    try {
      const response = yield call(registerApi, value);
      yield put(didRegisterSuccess(response.data));
      yield put(didLoading(false));
      showSuccess('Register Success.');
    } catch (error) {
      const {message} =
        (error.response && error.response.data) || error.message;
      showError(message);
      yield put(didLoading(false));
    }
  }
}

import {call, fork, put, take} from 'redux-saga/effects';
import {reducerRequest} from '../../../../constants/reducer';
import {showError, showSuccess} from '../../../../utils';
import {
  didGetBookFailed,
  didGetBookSuccess,
  didIsLogin,
  didLoginFailed,
  didLoginSuccess,
  didRegisterSuccess,
} from '../../action';
import {didLoading} from '../../action/global';
import {getBook} from '../../request/book';

export function* getBookFlow() {
  while (true) {
    const {value} = yield take(reducerRequest.DATA_BOOK_REQUEST);
    yield put(didLoading(true));
    try {
      const response = yield call(getBook, value);
      yield put(didGetBookSuccess(response.data));
      yield put(didIsLogin(true));
      yield put(didLoading(false));
    } catch (error) {
      const {message} = error.response.data || error.message;
      showError(message);
      yield put(didGetBookFailed(error));
      yield put(didLoading(false));
    }
  }
}

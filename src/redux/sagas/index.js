import {all} from 'redux-saga/effects';
import {loginFlow, registerFlow} from '../handler/auth';

export function* rootSagas() {
  yield all([loginFlow(), registerFlow()]);
}

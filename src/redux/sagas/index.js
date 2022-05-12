import {all} from "redux-saga/effects";
import {addCartFlow} from "../handler";

export function* rootSagas() {
  yield all([addCartFlow()]);
}

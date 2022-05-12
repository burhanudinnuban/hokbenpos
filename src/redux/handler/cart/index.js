import {call, fork, put, take} from "redux-saga/effects";
import {showError, showSuccess} from "../../../../utils";
import {reducerRequest} from "../../../constants/reducer";
import {didAddCart, didCartSuccess} from "../../action";
import {didLoading} from "../../action/global";
import {loginApi, registerApi} from "../../request/auth";

export function* addCartFlow() {
  const {value} = yield take(reducerRequest.DATA_CART_REQUEST);
    
  yield put(didAddCart(value));
}
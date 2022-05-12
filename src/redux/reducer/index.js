import {persistCombineReducers} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import global from "./global";
import cart from "./cart";

const reducer = {global: global, cart: cart};

const configReduxPersist = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["cart"],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;

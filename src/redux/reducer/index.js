import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';
import auth from './auth';
import book from './book';

const reducer = {global: global, auth: auth, book: book};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'book'],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;

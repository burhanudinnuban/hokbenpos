import {
  reducerRequest,
  reducerFailed,
  reducerSuccess,
} from '../../../../constants/reducer';

const initialStateRoot = {
  dataWriteRequest: undefined,
  dataWriteSuccess: undefined,
  dataWriteFailed: undefined,
  dataBookLoading: undefined,
  dataBookRequest: undefined,
  dataBookSuccess: undefined,
  dataBookFailed: undefined,
};

const book = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducerRequest.DATA_WRITE_REQUEST:
      return {
        ...state,
        dataWriteRequest: action.value,
      };
    case reducerSuccess.DATA_WRITE_SUCCESS:
      return {
        ...state,
        dataWriteSuccess: action.value,
      };
    case reducerFailed.DATA_WRITE_FAILED:
      return {
        ...state,
        dataWriteFailed: action.value,
      };
    case reducerRequest.DATA_BOOK_REQUEST:
      return {
        ...state,
        dataBookRequest: action.value,
        dataBookLoading: true,
      };
    case reducerSuccess.DATA_BOOK_SUCCESS:
      return {
        ...state,
        dataBookSuccess: action.value,
        dataBookLoading: false,
      };
    case reducerFailed.DATA_BOOK_FAILED:
      return {
        ...state,
        dataBookFailed: action.value,
        dataBookLoading: false,
      };
    default:
      return state;
  }
};

export default book;

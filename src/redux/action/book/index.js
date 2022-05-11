import {
  reducerFailed,
  reducerRequest,
  reducerSuccess,
} from '../../../../constants/reducer';

export const didGetBookSuccess = value => ({
  type: reducerSuccess.DATA_BOOK_SUCCESS,
  value,
});

export const didGetBookFailed = value => ({
  type: reducerFailed.DATA_BOOK_FAILED,
  value,
});

export const didGetBookRequest = value => ({
  type: reducerRequest.DATA_BOOK_REQUEST,
  value,
});

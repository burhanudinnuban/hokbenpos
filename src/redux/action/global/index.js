import {
  reducerFailed,
  reducerRequest,
  reducerSuccess,
} from '../../../../constants/reducer';

export const didLoading = value => ({
  type: reducerRequest.LOADING_REQUEST,
  value,
});

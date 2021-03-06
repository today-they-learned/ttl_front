import produce from 'utils/produce.util';

export const initialState = {
  post: null,
  postLoading: false,
  postDone: false,
  postError: null,
  putLoading: false,
  putDone: false,
  putError: null,
};

export const POST_CLEAR = 'POST_CLEAR';
export const PUT_CLEAR = 'PUT_CLEAR';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const PUT_REQUEST = 'PUT_REQUEST';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const PUT_FAILURE = 'PUT_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_CLEAR:
        draft.postLoading = false;
        draft.postDone = false;
        draft.postError = null;
        draft.post = null;
        break;
      case POST_REQUEST:
        draft.postLoading = true;
        draft.postError = null;
        draft.postDone = false;
        break;
      case POST_SUCCESS:
        draft.postLoading = false;
        draft.post = action.data;
        draft.postDone = true;
        break;
      case POST_FAILURE:
        draft.postLoading = false;
        draft.postError = action.error;
        break;
      case PUT_CLEAR:
        draft.putLoading = false;
        draft.putDone = false;
        draft.putError = null;
        draft.post = null;
        break;
      case PUT_REQUEST:
        draft.putLoading = true;
        draft.putError = null;
        draft.putDone = false;
        break;
      case PUT_SUCCESS:
        draft.putLoading = false;
        draft.post = action.data;
        draft.putDone = true;
        break;
      case PUT_FAILURE:
        draft.putLoading = false;
        draft.putError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

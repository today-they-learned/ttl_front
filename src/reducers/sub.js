import produce from 'utils/produce.util';

export const initialState = {
  sub: null,
  loadSubLoading: false,
  loadSubDone: false,
  loadSubError: false,
};

export const LOAD_SUB_REQUEST = 'LOAD_SUB_REQUEST';
export const LOAD_SUB_SUCCESS = 'LOAD_SUB_SUCCESS';
export const LOAD_SUB_FAILURE = 'LOAD_SUB_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SUB_REQUEST:
        draft.loadSubLoading = true;
        draft.loadSubDone = false;
        draft.loadSubError = null;
        draft.sub = null;
        break;
      case LOAD_SUB_SUCCESS:
        draft.loadSubLoading = false;
        draft.loadSubDone = true;
        draft.sub = action.data;
        break;
      case LOAD_SUB_FAILURE:
        draft.loadSubLoading = false;
        draft.loadSubError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

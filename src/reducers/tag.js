import produce from 'utils/produce.util';

export const initialState = {
  tags: [],
  tag: null,
  loadTagLoading: false,
  loadTagDone: false,
  loadTagError: null,
};

export const LOAD_TAG_REQUEST = 'LOAD_TAG_REQUEST';
export const LOAD_TAG_SUCCESS = 'LOAD_TAG_SUCCESS';
export const LOAD_TAG_FAILURE = 'LOAD_TAG_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TAG_REQUEST:
        draft.loadTagLoading = true;
        draft.loadTagDone = false;
        draft.loadTagError = null;
        break;
      case LOAD_TAG_SUCCESS:
        draft.loadTagLoading = false;
        draft.loadTagDone = true;
        draft.singleTag = action.data;
        break;
      case LOAD_TAG_FAILURE:
        draft.loadTagLoading = false;
        draft.loadTagError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

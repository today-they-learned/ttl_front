import produce from 'utils/produce.util';

export const initialState = {
  addBookmarkLoading: false,
  addBookmarkDone: false,
  addBookmarkError: false,
  destroyBookmarkLoading: false,
  destroyBookmarkDone: false,
  destroyBookmarkError: false,
};

export const ADD_BOOKMARK_REQUEST = 'ADD_BOOKMARK_REQUEST';
export const ADD_BOOKMARK_SUCCESS = 'ADD_BOOKMARK_SUCCESS';
export const ADD_BOOKMARK_FAILURE = 'ADD_BOOKMARK_FAILURE';

export const DESTROY_BOOKMARK_REQUEST = 'DESTROY_BOOKMARK_REQUEST';
export const DESTROY_BOOKMARK_SUCCESS = 'DESTROY_BOOKMARK_SUCCESS';
export const DESTROY_BOOKMARK_FAILURE = 'DESTROY_BOOKMARK_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_BOOKMARK_REQUEST:
        draft.addBookmarkLoading = true;
        draft.addBookmarkDone = false;
        draft.addBookmarkError = null;
        break;
      case ADD_BOOKMARK_SUCCESS:
        draft.addBookmarkLoading = false;
        draft.addBookmarkDone = true;
        console.log(action.data);
        break;
      case ADD_BOOKMARK_FAILURE:
        draft.addBookmarkLoading = false;
        draft.addBookmarkError = action.data;
        break;
      case DESTROY_BOOKMARK_REQUEST:
        draft.destroyBookmarkLoading = true;
        draft.destroyBookmarkDone = false;
        draft.destroyBookmarkError = null;
        break;
      case DESTROY_BOOKMARK_SUCCESS:
        draft.destroyBookmarkLoading = false;
        draft.destroyBookmarkDone = true;
        console.log(action.data);
        break;
      case DESTROY_BOOKMARK_FAILURE:
        draft.destroyBookmarkLoading = false;
        draft.destroyBookmarkError = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;

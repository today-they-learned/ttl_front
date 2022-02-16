import produce from 'utils/produce.util';

export const initialState = {
  comments: [],
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  destroyCommentLoading: false,
  destroyCommentDone: false,
  destroyCommentError: null,
};

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';

export const DESTROY_COMMENT_REQUEST = 'DESTROY_COMMENT_REQUEST';
export const DESTROY_COMMENT_SUCCESS = 'DESTROY_COMMENT_SUCCESS';
export const DESTROY_COMMENT_FAILURE = 'DESTROY_COMMENT_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_COMMENTS_REQUEST:
        draft.loadCommentsLoading = true;
        draft.loadCommentsDone = false;
        draft.loadCommentsError = null;
        draft.comments = [];
        break;
      case LOAD_COMMENTS_SUCCESS:
        draft.loadCommentsLoading = false;
        draft.loadCommentsDone = true;
        draft.comments = action.data;
        break;
      case LOAD_COMMENTS_FAILURE:
        draft.loadCommentsLoading = false;
        draft.loadCommentsDone = true;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;
      case UPDATE_COMMENT_SUCCESS:
        draft.updateCommentLoading = false;
        draft.updateCommentDone = true;
        break;
      case UPDATE_COMMENT_FAILURE:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.error;
        break;
      case DESTROY_COMMENT_REQUEST:
        draft.destroyCommentLoading = true;
        draft.destroyCommentDone = false;
        draft.destroyCommentError = null;
        break;
      case DESTROY_COMMENT_SUCCESS:
        draft.destroyCommentLoading = false;
        draft.destroyCommentDone = true;
        break;
      case DESTROY_COMMENT_FAILURE:
        draft.destroyCommentLoading = false;
        draft.destroyCommentError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

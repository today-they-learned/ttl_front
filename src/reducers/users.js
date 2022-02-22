import produce from 'utils/produce.util';

export const initialState = {
  user: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  followUserLoading: false,
  followUserDone: false,
  followUserError: null,
};

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.user = action.data;
        break;
      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case FOLLOW_USER_REQUEST:
        draft.followUserLoading = true;
        draft.followUserDone = false;
        draft.followUserError = null;
        break;
      case FOLLOW_USER_SUCCESS:
        draft.followUserLoading = false;
        draft.followUserDone = true;
        draft.user = action.data;
        break;
      case FOLLOW_USER_FAILURE:
        draft.followUserLoading = false;
        draft.followUserError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

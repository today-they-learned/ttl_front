import produce from 'utils/produce.util';

const user = JSON.parse(localStorage.getItem('user'));
let temp = '';

export const initialState = {
  user,
  signinLoading: false,
  signinDone: false,
  signinError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  updateUserLoading: false,
  updateUserDone: false,
  updateUserError: null,
  destroyUserLoading: false,
  destroyUserDone: false,
  destroyUserError: null,
};

export const SIGN_IN_REQUEST = 'SIGNIN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGNIN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGNUP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGNUP_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DESTROY_USER_REQUEST = 'DESTROY_USER_REQUEST';
export const DESTROY_USER_SUCCESS = 'DESTROY_USER_SUCCESS';
export const DESTROY_USER_FAILURE = 'DESTROY_USER_FAILURE';

export const signinRequestAction = (data) => ({
  type: SIGN_IN_REQUEST,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_REQUEST:
        draft.signinLoading = true;
        draft.signinError = null;
        draft.signinDone = false;
        break;
      case SIGN_IN_SUCCESS:
        draft.signinLoading = false;
        draft.user = action.data;
        localStorage.setItem('user', JSON.stringify(action.data));
        draft.signinDone = true;
        break;
      case SIGN_IN_FAILURE:
        draft.signinLoading = false;
        draft.signinError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signupLoading = true;
        localStorage.removeItem('user');
        draft.signupError = null;
        draft.signupDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signupLoading = false;
        draft.user = action.data;
        localStorage.setItem('user', JSON.stringify(action.data));
        draft.signupDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;

      case UPDATE_USER_REQUEST:
        draft.updateUserLoading = true;
        draft.updateUserDone = false;
        draft.updateUserError = null;
        break;
      case UPDATE_USER_SUCCESS:
        draft.updateUserLoading = false;
        draft.updateUserDone = true;
        temp = JSON.parse(localStorage.getItem('user'));
        temp.user = action.data;
        localStorage.setItem('user', JSON.stringify(temp));
        draft.user = temp;
        break;
      case UPDATE_USER_FAILURE:
        draft.updateUserLoading = false;
        draft.updateUserError = action.error;
        break;
      case DESTROY_USER_REQUEST:
        draft.destroyUserLoading = true;
        draft.destroyUserDone = false;
        draft.destroyUserError = null;
        break;
      case DESTROY_USER_SUCCESS:
        draft.destroyUserLoading = false;
        draft.destroyUserDone = true;
        localStorage.removeItem('user');
        break;
      case DESTROY_USER_FAILURE:
        draft.destroyUserLoading = false;
        draft.destroyUserError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;

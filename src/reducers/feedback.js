import produce from 'utils/produce.util';

export const initialState = {
  addFeedbackLoading: false,
  addFeedbackDone: false,
  addFeedbackError: false,
};

export const ADD_FEEDBACK_REQUEST = 'ADD_FEEDBACK_REQUEST';
export const ADD_FEEDBACK_SUCCESS = 'ADD_FEEDBACK_SUCCESS';
export const ADD_FEEDBACK_FAILURE = 'ADD_FEEDBACK_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_FEEDBACK_REQUEST:
        draft.addFeedbackLoading = true;
        draft.addFeedbackDone = false;
        draft.addFeedbackError = null;
        break;
      case ADD_FEEDBACK_SUCCESS:
        draft.addFeedbackLoading = false;
        draft.addFeedbackDone = true;
        break;
      case ADD_FEEDBACK_FAILURE:
        draft.addFeedbackLoading = false;
        draft.addFeedbackError = action.data;
        break;
      default:
        break;
    }
  });

export default reducer;

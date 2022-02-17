import produce from 'utils/produce.util';

export const initialState = {
  grass: null,
  grassLoading: false,
  grassDone: false,
  grassError: null,
};

export const GRASS_REQUEST = 'GRASS_REQUEST';
export const GRASS_SUCCESS = 'GRASS_SUCCESS';
export const GRASS_FAILURE = 'GRASS_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GRASS_REQUEST:
        draft.grassLoading = true;
        draft.grassError = null;
        draft.grassDone = false;
        break;
      case GRASS_SUCCESS:
        draft.grassLoading = false;
        draft.grass = action.data;
        draft.grassDone = true;

        break;
      case GRASS_FAILURE:
        draft.grassLoading = false;
        draft.grassError = action.error;
        break;

      default:
        break;
    }
  });

export default reducer;

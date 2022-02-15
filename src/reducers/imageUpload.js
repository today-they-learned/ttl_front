import produce from 'utils/produce.util';

export const initialState = {
  image: null,
  imageLoading: false,
  imageDone: false,
  imageError: null,
};

export const IMAGE_REQUEST = 'IMAGE_REQUEST';
export const IMAGE_SUCCESS = 'IMAGE_SUCCESS';
export const IMAGE_FAILURE = 'IMAGE_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case IMAGE_REQUEST:
        draft.imageLoading = true;
        draft.imageError = null;
        draft.imageDone = false;
        break;
      case IMAGE_SUCCESS:
        draft.imageLoading = false;
        draft.image = action.data;
        draft.imageDone = true;
        break;
      case IMAGE_FAILURE:
        draft.imageLoading = false;
        draft.imageError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

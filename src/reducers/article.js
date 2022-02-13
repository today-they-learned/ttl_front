import produce from 'utils/produce.util';

export const initialState = {
  singleArticle: null,
  loadArticleLoading: false,
  loadArticleDone: false,
  loadArticleError: null,
};

export const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ARTICLE_REQUEST:
        draft.loadArticleLoading = true;
        draft.loadArticleDone = false;
        draft.loadArticleError = null;
        break;
      case LOAD_ARTICLE_SUCCESS:
        draft.loadArticleLoading = false;
        draft.loadArticleDone = true;
        draft.singleArticle = action.data;
        break;
      case LOAD_ARTICLE_FAILURE:
        draft.loadArticleLoading = false;
        draft.loadArticleError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;

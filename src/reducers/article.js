import produce from 'utils/produce.util';

export const initialState = {
  // 메인 피드 글 목록
  feedArticles: [],
  currentPage: 1,
  hasMoreArticle: null,
  loadArticlesLoading: false,
  loadArticlesDone: false,
  loadArticlesError: null,
  // 글 한개
  singleArticle: null,
  loadArticleLoading: false,
  loadArticleDone: false,
  loadArticleError: null,
};

export const PAGE_SIZE = 12;
export const LOAD_ARTICLES_REQUEST = 'LOAD_ARTICLES_REQUEST';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAILURE = 'LOAD_ARTICLES_FAILURE';

export const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAILURE = 'LOAD_ARTICLE_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ARTICLES_REQUEST:
        draft.loadArticlesLoading = true;
        draft.loadArticlesDone = false;
        draft.loadArticlesError = null;
        draft.hasMoreArticle = null;
        break;
      case LOAD_ARTICLES_SUCCESS:
        draft.loadArticlesLoading = false;
        draft.loadArticlesDone = true;
        draft.hasMoreArticle = action.data.next;
        draft.currentPage = draft.hasMoreArticle ? draft.currentPage + 1 : draft.currentPage;
        draft.feedArticles = draft.feedArticles.concat(Object.entries(action.data.results));
        break;
      case LOAD_ARTICLES_FAILURE:
        draft.loadArticlesLoading = false;
        draft.loadArticlesError = action.error;
        break;

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

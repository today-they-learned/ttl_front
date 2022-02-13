import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import { LOAD_ARTICLE_REQUEST, LOAD_ARTICLE_SUCCESS, LOAD_ARTICLE_FAILURE } from 'reducers/article';
import authHeader from './auth-header';

const singleArticleAPI = (id) => axios.get(`/articles/${id}`, { headers: authHeader() });

function* singleArticle(action) {
  try {
    const result = yield call(singleArticleAPI, action.id);
    yield put({
      type: LOAD_ARTICLE_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ARTICLE_FAILURE,
      error: err,
    });
  }
}

function* watchsingleArticle() {
  yield takeLatest(LOAD_ARTICLE_REQUEST, singleArticle);
}

export default function* article() {
  yield all([fork(watchsingleArticle)]);
}

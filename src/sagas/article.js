import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  LOAD_ARTICLE_REQUEST,
  LOAD_ARTICLE_SUCCESS,
  LOAD_ARTICLE_FAILURE,
  DESTROY_ARTICLE_REQUEST,
  DESTROY_ARTICLE_SUCCESS,
  DESTROY_ARTICLE_FAILURE,
} from 'reducers/article';
import authHeader from './auth-header';

function* feedArticles(action) {
  try {
    const { data } = action;
    let queryString = `/articles/?`;

    if (data && data.page) queryString += `page=${data.page}&`;
    if (data && data.orderby) queryString += `ordering=-${data.orderby}&`;
    if (data && data.tab) queryString += `tab=${data.tab}&`;
    if (data && data.tag) queryString += `tag=${data.tag}&`;
    if (data && data.search) queryString += `search=${data.search}&`;
    if (data && data.user_id) queryString += `user_id=${data.user_id}`;

    const result = yield call(axios.get, queryString, { headers: authHeader() });
    yield put({
      type: LOAD_ARTICLES_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOAD_ARTICLES_FAILURE,
      error: err.response.data,
    });
  }
}

const singleArticleAPI = (id) => axios.get(`/articles/${id}/`, { headers: authHeader() });

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
      error: err.response.data,
    });
  }
}

const articleDestroyAPI = (id) => axios.delete(`/articles/${id}/`, { headers: authHeader() });

function* articleDestory(action) {
  try {
    const result = yield call(articleDestroyAPI, action.id);
    yield put({
      type: DESTROY_ARTICLE_SUCCESS,
      data: result?.data,
    });
  } catch (err) {
    yield put({
      type: DESTROY_ARTICLE_FAILURE,
      error: err.response?.data,
    });
  }
}

function* watchfeedArticles() {
  yield takeLatest(LOAD_ARTICLES_REQUEST, feedArticles);
}

function* watchsingleArticle() {
  yield takeLatest(LOAD_ARTICLE_REQUEST, singleArticle);
}

function* watcharticleDestory() {
  yield takeLatest(DESTROY_ARTICLE_REQUEST, articleDestory);
}

export default function* article() {
  yield all([fork(watchsingleArticle), fork(watchfeedArticles), fork(watcharticleDestory)]);
}

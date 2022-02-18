import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import {
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAILURE,
  DESTROY_BOOKMARK_REQUEST,
  DESTROY_BOOKMARK_SUCCESS,
  DESTROY_BOOKMARK_FAILURE,
} from 'reducers/bookmark';
import authHeader from './auth-header';

const bookmarkNewAPI = (id) => axios.post(`/articles/${id}/bookmark/`, { headers: authHeader() });

function* bookmarkNew(action) {
  try {
    const result = yield call(bookmarkNewAPI, action.id);
    yield put({
      type: ADD_BOOKMARK_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_BOOKMARK_FAILURE,
      error: err.response.data,
    });
  }
}

const bookmarkDestroyAPI = (id) =>
  axios.delete(`/articles/${id}/unbookmark/`, { headers: authHeader() });

function* bookmarkDestroy(action) {
  try {
    const result = yield call(bookmarkDestroyAPI, action.id);
    yield put({
      type: DESTROY_BOOKMARK_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DESTROY_BOOKMARK_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchBookmarkNew() {
  yield takeLatest(ADD_BOOKMARK_REQUEST, bookmarkNew);
}

function* watchBookmarkDestroy() {
  yield takeLatest(DESTROY_BOOKMARK_REQUEST, bookmarkDestroy);
}

export default function* bookmark() {
  yield all([fork(watchBookmarkNew), fork(watchBookmarkDestroy)]);
}

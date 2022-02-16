import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DESTROY_COMMENT_REQUEST,
  DESTROY_COMMENT_SUCCESS,
  DESTROY_COMMENT_FAILURE,
} from 'reducers/comment';
import authHeader from './auth-header';

const commentsLoadAPI = (id) => axios.get(`/comments/?article_id=${id}`, { headers: authHeader() });

function* commentsLoad(action) {
  try {
    const result = yield call(commentsLoadAPI, action.id);
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error: err.response.data,
    });
  }
}

const commentNEWAPI = (id, data) =>
  axios.post(`/comments/?article_id=${id}`, data, { headers: authHeader() });

function* commentNEW(action) {
  try {
    const result = yield call(commentNEWAPI, action.id, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

const commentDestroyAPI = (id) => axios.delete(`/comments/${id}/`, { headers: authHeader() });

function* commentDestroy(action) {
  try {
    const result = yield call(commentDestroyAPI, action.id);
    yield put({
      type: DESTROY_COMMENT_SUCCESS,
      data: result?.data,
    });
  } catch (err) {
    yield put({
      type: DESTROY_COMMENT_FAILURE,
      data: err.response?.data,
    });
  }
}

const commentUpdateAPI = (id, data) =>
  axios.patch(`/comments/${id}/`, data, { headers: authHeader() });

function* commentUpdate(action) {
  try {
    const result = yield call(commentUpdateAPI, action.id, action.data);
    yield put({
      type: UPDATE_COMMENT_SUCCESS,
      data: result?.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_COMMENT_FAILURE,
      data: err.response?.data,
    });
  }
}

function* watchCommentsLoad() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, commentsLoad);
}

function* watchCommentNew() {
  yield takeLatest(ADD_COMMENT_REQUEST, commentNEW);
}

function* watchCommentDestroy() {
  yield takeLatest(DESTROY_COMMENT_REQUEST, commentDestroy);
}

function* watchCommentUpdate() {
  yield takeLatest(UPDATE_COMMENT_REQUEST, commentUpdate);
}

export default function* comment() {
  yield all([
    fork(watchCommentsLoad),
    fork(watchCommentNew),
    fork(watchCommentDestroy),
    fork(watchCommentUpdate),
  ]);
}

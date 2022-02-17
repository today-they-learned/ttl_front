import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';

import {
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
  PUT_FAILURE,
  PUT_REQUEST,
  PUT_SUCCESS,
} from 'reducers/post';
import authHeader from './auth-header';

const postAPI = (data) => {
  return axios.post('/articles/', data, { headers: authHeader() });
};

function* post(action) {
  try {
    const result = yield call(postAPI, action.data);

    yield put({
      type: POST_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: POST_FAILURE,
      error: camelize(err.response.data),
    });
  }
}

const putAPI = (data, id) => {
  return axios.put(`/articles/${id}/`, data, { headers: authHeader() });
};

function* articlePut(action) {
  console.log(action);
  try {
    const result = yield call(putAPI, action.data, action.id);
    console.log(result);
    yield put({
      type: PUT_SUCCESS,
      data: result?.data,
    });
  } catch (err) {
    yield put({
      type: PUT_FAILURE,
      data: err.response?.data,
    });
  }
}

function* watchPost() {
  yield takeLatest(POST_REQUEST, post);
}

function* watchPut() {
  yield takeLatest(PUT_REQUEST, articlePut);
}

export default function* postSaga() {
  yield all([fork(watchPost), fork(watchPut)]);
}

import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';

import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from 'reducers/post';
import authHeader from './auth-header';

const postAPI = (data) => {
  axios.post('/articles/', data, { headers: authHeader() });
};

function* post(action) {
  try {
    const result = yield call(postAPI, action.data);
    console.log(result);
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

function* watchPost() {
  yield takeLatest(POST_REQUEST, post);
}

export default function* postSaga() {
  yield all([fork(watchPost)]);
}

import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import { LOAD_TAG_REQUEST, LOAD_TAG_SUCCESS, LOAD_TAG_FAILURE } from 'reducers/tag';
import authHeader from './auth-header';

const reviewListAPI = (data) => axios.get('/users/user/tags', { headers: authHeader() }, data);
function* tagList(action) {
  try {
    const result = yield call(reviewListAPI, action.id);
    yield put({
      type: LOAD_TAG_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_TAG_FAILURE,
      error: err,
    });
  }
}

function* watchTagList() {
  yield takeLatest(LOAD_TAG_REQUEST, tagList);
}

export default function* article() {
  yield all([fork(watchTagList)]);
}

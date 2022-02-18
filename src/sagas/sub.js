import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import { LOAD_SUB_REQUEST, LOAD_SUB_SUCCESS, LOAD_SUB_FAILURE } from 'reducers/sub';
import authHeader from './auth-header';

const subLoadAPI = (id) => axios.get(`/articles/${id}/sub/`, { headers: authHeader() });

function* subLoad(action) {
  try {
    const result = yield call(subLoadAPI, action.id);
    yield put({
      type: LOAD_SUB_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SUB_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSubLoad() {
  yield takeLatest(LOAD_SUB_REQUEST, subLoad);
}

export default function* articleSub() {
  yield all([fork(watchSubLoad)]);
}

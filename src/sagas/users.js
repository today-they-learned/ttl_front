import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from 'reducers/users';
import authHeader from './auth-header';

const getUserAPI = (id) => axios.get(`/users/${id}/`, { headers: authHeader() });
function* getUser(action) {
  try {
    const result = yield call(getUserAPI, action.id);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_USER_FAILURE,
      error: camelize(err.response.data),
    });
  }
}

function* watchGetUser() {
  yield takeLatest(LOAD_USER_REQUEST, getUser);
}

export default function* users() {
  yield all([fork(watchGetUser)]);
}

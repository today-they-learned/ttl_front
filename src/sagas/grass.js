import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';

import { GRASS_REQUEST, GRASS_SUCCESS, GRASS_FAILURE } from 'reducers/grass';

import authHeader from './auth-header';

const grassAPI = (id) => axios.get(`/users/${id}/grasses/`, { headers: authHeader() });

function* grass(action) {
  try {
    const result = yield call(grassAPI, action.id);
    yield put({
      type: GRASS_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GRASS_FAILURE,
      error: camelize(err.response.data),
    });
  }
}

function* watchGrass() {
  yield takeLatest(GRASS_REQUEST, grass);
}

export default function* authenticationSaga() {
  yield all([fork(watchGrass)]);
}

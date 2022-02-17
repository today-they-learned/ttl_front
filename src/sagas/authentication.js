import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';

import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DESTROY_USER_REQUEST,
  DESTROY_USER_SUCCESS,
  DESTROY_USER_FAILURE,
} from 'reducers/authentication';

import authHeader from './auth-header';

const getUserAPI = (id) => axios.post(`/users/${id}/`);
const signinAPI = (data) => axios.post('/users/login/', data);
const signupAPI = (data) => axios.post('/users/', data);
const userEditAPI = (data) => axios.patch('/users/user/', data, { headers: authHeader() });
const userDestroyAPI = () => axios.delete('/users/user/destroy/', { headers: authHeader() });

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

function* signin(action) {
  try {
    const result = yield call(signinAPI, action.data);
    yield put({
      type: SIGN_IN_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_IN_FAILURE,
      error: camelize(err.response.data),
    });
  }
}

function* watchSignin() {
  yield takeLatest(SIGN_IN_REQUEST, signin);
}

function* signup(action) {
  try {
    const result = yield call(signupAPI, action.data);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: camelize(err.response.data),
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signup);
}

function* userEdit(action) {
  try {
    const result = yield call(userEditAPI, action.data);
    yield put({
      type: UPDATE_USER_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: UPDATE_USER_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUserEdit() {
  yield takeLatest(UPDATE_USER_REQUEST, userEdit);
}

function* userDestroy() {
  try {
    const result = yield call(userDestroyAPI);
    yield put({
      type: DESTROY_USER_SUCCESS,
      data: result?.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DESTROY_USER_FAILURE,
      error: err.response?.data,
    });
  }
}

function* watchUserDestroy() {
  yield takeLatest(DESTROY_USER_REQUEST, userDestroy);
}

export default function* authenticationSaga() {
  yield all([
    fork(watchGetUser),
    fork(watchSignin),
    fork(watchSignup),
    fork(watchUserEdit),
    fork(watchUserDestroy),
  ]);
}

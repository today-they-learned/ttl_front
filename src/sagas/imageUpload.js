import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';

import { IMAGE_REQUEST, IMAGE_SUCCESS, IMAGE_FAILURE } from 'reducers/imageUpload';
import authHeader from './auth-header';

const imageAPI = (data) => {
  axios.post('/articles/upload_image/', data, { headers: authHeader() });
};

function* image(action) {
  try {
    const result = yield call(imageAPI, action.data);
    yield put({
      type: IMAGE_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    yield put({
      type: IMAGE_FAILURE,
      error: camelize(err.response.data),
    });
  }
}

function* watchImage() {
  yield takeLatest(IMAGE_REQUEST, image);
}

export default function* imageSaga() {
  yield all([fork(watchImage)]);
}

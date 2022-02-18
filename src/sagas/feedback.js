import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import camelize from 'camelize';
import {
  ADD_FEEDBACK_REQUEST,
  ADD_FEEDBACK_SUCCESS,
  ADD_FEEDBACK_FAILURE,
} from 'reducers/feedback';
import authHeader from './auth-header';

const feedbackNewAPI = (id, category) =>
  axios.post(`/articles/${id}/feedback/${category}/`, { headers: authHeader() });

function* feedbackNew(action) {
  try {
    const result = yield call(feedbackNewAPI, action.id);
    yield put({
      type: ADD_FEEDBACK_SUCCESS,
      data: camelize(result.data),
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_FEEDBACK_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchFeedbackNew() {
  yield takeLatest(ADD_FEEDBACK_REQUEST, feedbackNew);
}

export default function* feedback() {
  yield all([fork(watchFeedbackNew)]);
}

/* eslint-disable import/no-unresolved */
import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { apiUrl } from 'config/api.config';
import authenticationSaga from './authentication';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(authenticationSaga)]);
}

import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { apiUrl } from 'config/api.config';
import authenticationSaga from './authentication';
import articleSaga from './article';
import postSaga from './post';
import imageSaga from './imageUpload';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(authenticationSaga), fork(articleSaga), fork(postSaga), fork(imageSaga)]);
}

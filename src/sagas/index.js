import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import { apiUrl } from 'config/api.config';
import authenticationSaga from './authentication';
import articleSaga from './article';
import grassSaga from './grass';
import postSaga from './post';
import commentSaga from './comment';
import usersSaga from './users';
import subSaga from './sub';
import bookmarkSaga from './bookmark';

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(authenticationSaga),
    fork(articleSaga),
    fork(grassSaga),
    fork(postSaga),
    fork(commentSaga),
    fork(usersSaga),
    fork(subSaga),
    fork(bookmarkSaga),
  ]);
}

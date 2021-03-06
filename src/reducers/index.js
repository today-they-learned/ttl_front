import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import authentication from './authentication';
import article from './article';
import comment from './comment';
import postListType from './postListType';
import grass from './grass';
import post from './post';
import users from './users';
import sub from './sub';
import bookmark from './bookmark';
import feedback from './feedback';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        authentication,
        article,
        comment,
        postListType,
        grass,
        post,
        users,
        sub,
        bookmark,
        feedback,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

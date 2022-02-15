import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import authentication from './authentication';
import article from './article';
import postListType from './postListType';
import post from './post';
import imageUpload from './imageUpload';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        authentication,
        article,
        postListType,
        post,
        imageUpload,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import authentication from './authentication';
import postListType from './postListType';
import tag from './tag';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        authentication,
        postListType,
        tag,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

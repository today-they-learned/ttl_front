import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import authentication from './authentication';
import article from './article';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        authentication,
        article,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export const SET_TYPE = 'SET_TYPE';

export const initialState = {
  item: 'main',
  title: '피드',
  isTag: false,
  isSearch: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        item: action.item,
        title: action.title,
        isTag: action.isTag,
        isSearch: action.isSearch,
      };
    default:
      return state;
  }
};

export default reducer;

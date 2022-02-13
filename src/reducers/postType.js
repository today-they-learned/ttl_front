export const initialState = {
  type: 'main',
  title: '피드',
};

const postListType = (state = initialState, action) => {
  switch (action.type) {
    case 'main':
      return {
        ...state,
        type: 'main',
        title: '피드',
      };
    case 'group':
      return {
        ...state,
        type: 'group',
        title: '그룹',
      };
    case 'follow':
      return {
        ...state,
        type: 'follow',
        title: '팔로우',
      };
    case 'bookmark':
      return {
        ...state,
        type: 'bookmark',
        title: '북마크',
      };
    case 'read_list':
      return {
        ...state,
        type: 'read_list',
        title: '읽은 목록',
      };
    default:
      return state;
  }
};

export default postListType;

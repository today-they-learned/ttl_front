import React from 'react';
import PostList from 'components/PostList/PostList';

const TIL = (props) => {
  return (
    <div style={{ padding: '1rem 3rem' }}>
      <PostList id={props.id} />
    </div>
  );
};
export default TIL;

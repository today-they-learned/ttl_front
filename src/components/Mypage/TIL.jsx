import styled from 'styled-components';
import React from 'react';
import PostCard from 'components/PostList/PostCard';

const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const PostCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const TIL = () => {
  const posts = [];

  return (
    <Post>
      <PostCards>
        {Object.keys(posts).map((key) => (
          <PostCard key={key} post={posts[key]} />
        ))}
      </PostCards>
    </Post>
  );
};
export default TIL;

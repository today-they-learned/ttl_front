/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import PostCard from '../post_card/post_card';

import postsData from '../post_list/posts.json';

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
  const [posts, setPosts] = useState({});

  useEffect(() => {
    setPosts(postsData.main);
    // 임시 데이터로 설정해놨습니다.
  });

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

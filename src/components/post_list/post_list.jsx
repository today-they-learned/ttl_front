/* eslint-disable no-eval */
/* eslint-disable react/prop-types */
import PostCard from 'components/post_card/post_card';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import postsData from './posts.json';

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

const PostTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  margin-bottom: 2rem;
  width: 100%;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #eeeeee;
    transform: translateY(1rem);
  }
`;

const PostList = ({ feedType }) => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    setPosts(postsData[feedType.item]);
  });

  return (
    <Post>
      <PostTop>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'GS-B', fontSize: '2rem', color: '#707bf3' }}>{feedType.title}</p>
          {feedType.item === 'main' && (
            <select
              name="post_option"
              id=""
              style={{
                width: '5rem',
                padding: '.3em .5em',
              }}
            >
              <option value="인기순">인기순</option>
              <option value="최신순">최신순</option>
            </select>
          )}
        </div>
      </PostTop>
      <PostCards>
        {Object.keys(posts).map((key) => (
          <PostCard key={key} post={posts[key]} />
        ))}
      </PostCards>
    </Post>
  );
};
export default PostList;

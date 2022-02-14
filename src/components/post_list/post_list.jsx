/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ARTICLES_REQUEST } from 'reducers/article';
import PostCard from 'components/post_card/post_card';
import styled from 'styled-components';

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
    height: 1px;
    background-color: #c5cbd3;
    transform: translateY(1rem);
  }
`;

const PostList = () => {
  const dispatch = useDispatch();
  const { feedArticles, currentPage, loadArticlesLoading, hasMoreArticle } = useSelector(
    (state) => state.article,
  );

  const feedType = { item: 'main', title: '피드' };

  useEffect(() => {
    dispatch({
      type: LOAD_ARTICLES_REQUEST,
      data: {
        // orderby: 'score',
        // tab: 'bookmark',
        // tag: 'python',
        // search: 'test',
        // user_id: 4,
      },
    });
  }, [dispatch]);
  // data값을 적당하게 바꿔서 api 요청, sagas/article 참고

  const onScroll = () => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (hasMoreArticle && !loadArticlesLoading) {
        dispatch({
          type: LOAD_ARTICLES_REQUEST,
          data: {
            page: currentPage,
            // orderby: 'score',
            // tab: 'bookmark',
            // tag: 'python',
            // search: 'test',
            // user_id: 4,
          },
        });
      }
    }
  };
  // 인피니티 스크롤

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMoreArticle, loadArticlesLoading]);

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
                width: '4rem',
                height: '2rem',
                fontSize: '0.7rem',
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
        {feedArticles.map((article) => (
          <PostCard post={article[1]} />
        ))}
      </PostCards>
    </Post>
  );
};
export default PostList;

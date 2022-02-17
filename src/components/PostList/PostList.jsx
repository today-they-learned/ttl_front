import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ARTICLES_CLEAR, LOAD_ARTICLES_REQUEST } from 'reducers/article';
import PostCard from 'components/PostList/PostCard';
import styled from 'styled-components';

const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const PostCards = styled.div`
  display: flex;
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
  const { item, title, isTag } = useSelector((state) => state.postListType);
  const { feedArticles, currentPage, loadArticlesLoading, hasMoreArticle } = useSelector(
    (state) => state.article,
  );

  useEffect(() => {
    dispatch({
      type: LOAD_ARTICLES_CLEAR,
    });
    dispatch({
      type: LOAD_ARTICLES_REQUEST,
      data: {
        orderby: 'created_at',
        tab: item === 'read_list' ? 'study' : item,
        tag: isTag && item,
        // search: 'test',
        // user_id: user && user.user.id,
      },
    });
  }, [item]);

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
            orderby: 'created_at',
            tab: item === 'read_list' ? 'study' : item,
            tag: isTag && item,
            // search: 'test',
            // user_id: user && user.user.id,
          },
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMoreArticle, loadArticlesLoading]);

  return (
    <Post>
      <PostTop>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <p style={{ fontFamily: 'GS-B', fontSize: '2rem', color: '#707bf3' }}>
            {title || '피드'}
          </p>
          {item === 'main' && (
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
        {feedArticles.map((article, index) => (
          <PostCard key={('postcard', index)} post={article[1]} />
        ))}
      </PostCards>
    </Post>
  );
};
export default PostList;

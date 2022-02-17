import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ARTICLES_CLEAR, LOAD_ARTICLES_REQUEST } from 'reducers/article';
import PostCard from 'components/PostList/PostCard';
import styled, { css } from 'styled-components';
import COLOR from 'constants/color.constant';

const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  /* margin-left: 10rem; */

  @media only screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-left: 0;
    width: 100%;
  }
`;

const PostCards = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  width: 100%;
  ${(props) =>
    props.listNone
      ? css`
          height: 100vh;
        `
      : css`
          height: 100%;
        `}

  @media only screen and (max-width: 1179px) {
    justify-content: center;
  }
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

  @media only screen and (max-width: 768px) {
    margin-left: 0.5rem;
  }
`;

const PostNone = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  font-size: 2rem;
  font-family: 'GS-M';
  letter-spacing: -0.6px;
  color: ${COLOR.PRIMARY};
  margin-top: 10rem;

  @media only screen and (max-width: 768px) {
    width: 100%;

    font-size: 1.5rem;
  }
`;

const PostList = (props) => {
  const dispatch = useDispatch();
  const { item, title, isTag } = useSelector((state) => state.postListType);
  const { feedArticles, currentPage, loadArticlesLoading, loadArticlesDone, hasMoreArticle } =
    useSelector((state) => state.article);

  const postNoneMsg = () => {
    if (title === '팔로우') {
      return '팔로우한 유저의 글이 없습니다';
    }
    if (title === '북마크') {
      return '아직 북마크한 글이 없습니다';
    }
    if (title === '읽은 목록') {
      return '아직 읽은 글이 없습니다.';
    }
    if (isTag) {
      return `${item} 에 대한 글이 없습니다.`;
    }
    return '피드에 글이 없습니다.';
  };

  useEffect(() => {
    dispatch({
      type: LOAD_ARTICLES_CLEAR,
    });
    dispatch({
      type: LOAD_ARTICLES_REQUEST,
      data: {
        orderby: 'created_at',
        tab: item,
        tag: isTag && item,
        user_id: props.id,
        // search: 'test',
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
            tab: item,
            tag: isTag && item,
            user_id: props.id,
            // search: 'test',
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
      {props.id ? null : (
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
      )}
      <PostCards listNone={feedArticles.length === 0}>
        {feedArticles.length !== 0
          ? feedArticles.map((article, index) => (
              <PostCard key={('postcard', index)} post={article[1]} />
            ))
          : loadArticlesDone && <PostNone>{postNoneMsg()}</PostNone>}
        {/* {feedArticles.map((article, index) => (
          <PostCard key={('postcard', index)} post={article[1]} />
        ))} */}
      </PostCards>
    </Post>
  );
};
export default PostList;

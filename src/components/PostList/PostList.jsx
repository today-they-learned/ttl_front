import React, { useEffect, useState } from 'react';
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

const Select = styled.select`
  font-family: 'NS-R';
  height: auto;
  font-size: 1rem;
  padding: 0rem 0.6rem;
`;

const PostList = (props) => {
  const dispatch = useDispatch();
  const { item, title, isTag, isSearch } = useSelector((state) => state.postListType);
  const { feedArticles, currentPage, loadArticlesLoading, loadArticlesDone, hasMoreArticle } =
    useSelector((state) => state.article);

  const [filter, setFilter] = useState('score');

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
        orderby: props.id || item === 'study' ? 'created_at' : filter,
        tab: item,
        tag: isTag && item,
        user_id: props.id,
        search: isSearch && item,
      },
    });
  }, [item, filter]);

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
            orderby: props.id || item === 'study' ? 'created_at' : filter,
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

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Post>
      {props.id ? null : (
        <PostTop>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <p style={{ fontFamily: 'GS-B', fontSize: '2rem', color: '#707bf3' }}>
              {isSearch ? `${item}에 대한 검색 결과` : title}
            </p>
            {item === 'main' && (
              <Select onChange={handleFilter} value={filter}>
                <option className="option" value="score">
                  인기순
                </option>
                <option className="option" value="created_at">
                  최신순
                </option>
              </Select>
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

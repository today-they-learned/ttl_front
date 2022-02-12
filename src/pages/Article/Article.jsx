import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ARTICLE_REQUEST } from 'reducers/article';

const test = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleArticle, loadArticleLoading } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch({
      type: LOAD_ARTICLE_REQUEST,
      id,
    });
  }, [dispatch]);

  return (
    <>
      {loadArticleLoading}
      <p>아이디: {singleArticle?.id}</p>
      <p>유저: {singleArticle?.user}</p>
      <p>타이틀: {singleArticle?.title}</p>
      <p>콘텐츠: {singleArticle?.content}</p>
      <p>태그: {singleArticle?.tags}</p>
      <p>조회수: {singleArticle?.studyCount}</p>
      <p>기타등등 더 있음..</p>
    </>
  );
};

export default test;

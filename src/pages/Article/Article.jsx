import React, { useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ARTICLE_REQUEST, DESTROY_ARTICLE_REQUEST } from 'reducers/article';
import { LOAD_COMMENTS_REQUEST, ADD_COMMENT_REQUEST } from 'reducers/comment';
import styled from 'styled-components';
import useDate from 'hooks/useDate';
import useInput from 'hooks/useInput';

import { Viewer } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'components/EditorForm/toastui-editor.css';

import { Divider, Icon, Form, Button, Grid } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';
import * as Container from 'components/common/Containers';
import media from 'styles/media';
import COLOR from 'constants/color.constant';
import { darken } from 'polished';
import Comment from 'components/Article/Comment';
import FloatMenu from 'components/Article/FloatMenu';
import { POST_CLEAR } from 'reducers/post';

const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-bottom: 6rem;

  ${media.tablet`
  min-width: 80vw;
  `}
`;

const Title = styled.div`
  font-family: 'NS-EB';
  font-size: 44px;
  line-height: 48px;
`;

const SubTitleContainer = styled(Container.AlignCenterContainer)`
  justify-content: space-between;
`;

const SubContainer = styled(Container.AlignMiddleContainer)`
  justify-content: flex-start;
  align-items: baseline;
  margin-top: 1rem;
`;

const LightText = styled.span`
  font-family: 'NS-R';
  font-size: 12px;
  color: ${COLOR.LIGHTGRAY};
  margin-right: 0.5rem;
`;

const MenuText = styled(LightText)`
  cursor: pointer;
  font-size: 13px;

  ${media.tablet`
    display: none;
  `}
`;

const TagContainer = styled(Container.AlignMiddleContainer)`
  justify-content: flex-start;
  align-items: center;
  margin: 3rem 0;
`;

const Tag = styled.div`
  font-size: 0.8rem;
  margin-right: 0.5rem;
  border-radius: 1rem;
  color: ${COLOR.PRIMARY};
  background-color: #e9ecf3;
  padding: 0.3rem 0.5rem;
  font-family: 'NS-R';
`;

const Field = styled(Form.Field)`
  textarea {
    font-size: 14px !important;
    margin-bottom: -0.5rem !important;
  }
`;

const SubmitBtn = styled(Button)`
  background: ${COLOR.PRIMARY} !important;
  color: white !important;
  font-family: 'NS-R' !important;
  font-weight: 100 !important;
  height: 2rem;
  padding: 0.4rem 1rem !important;
  font-size: 14px !important;

  &:hover {
    background: ${darken(0.05, COLOR.PRIMARY)} !important;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const Thumbnail = styled.img`
  width: 80%;
  height: auto;
`;

const Article = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.authentication);
  const { singleArticle, loadArticleloading, loadArticleDone } = useSelector(
    (state) => state.article,
  );
  const { comments, addCommentDone, updateCommentDone, destroyCommentDone } = useSelector(
    (state) => state.comment,
  );
  const [comment, onChangeComment, setComment] = useInput('');

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      // 추후에 모달로 바꾸기
      alert('삭제되었습니다.');
      dispatch({
        type: DESTROY_ARTICLE_REQUEST,
        id,
      });
      window.location.replace('/');
    }
  };

  const handleCommentSubmit = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      id,
      data: {
        content: comment,
      },
    });
    setComment('');
  }, [id, comment]);

  useEffect(() => {
    dispatch({
      type: LOAD_ARTICLE_REQUEST,
      id,
    });
    dispatch({
      type: LOAD_COMMENTS_REQUEST,
      id,
    });
    dispatch({
      type: POST_CLEAR,
    });
  }, [dispatch]);

  useEffect(() => {
    if (addCommentDone || updateCommentDone || destroyCommentDone) {
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        id,
      });
    }
  }, [dispatch, addCommentDone, updateCommentDone, destroyCommentDone]);

  return (
    <>
      <Container.AlignCenterContainer>
        <ArticleBody className={loadArticleloading ? 'loading' : ''}>
          <Title>{singleArticle?.title}</Title>
          <SubTitleContainer>
            <SubContainer>
              <strong style={{ marginRight: '0.5rem' }}>{singleArticle?.user.username}</strong>
              <LightText>{useDate(singleArticle?.createdAt)}</LightText>
              <LightText>
                <Icon name="eye" />
                {singleArticle?.studyCount}
              </LightText>
              <LightText>
                <Icon name="comment" />
                {comments?.length}
              </LightText>
            </SubContainer>
            {user?.user.id === singleArticle?.user.id ? (
              <SubContainer>
                <Link to="/put" state={singleArticle}>
                  <MenuText>수정</MenuText>
                </Link>
                <MenuText onClick={handleDelete}>삭제</MenuText>
              </SubContainer>
            ) : null}
          </SubTitleContainer>
          <Divider />
          {singleArticle?.thumbnail ? (
            <Thumbnail src={singleArticle?.thumbnail} alt="thumbnail" />
          ) : null}
          {loadArticleDone ? (
            <Viewer
              plugins={[[codeSyntaxHighlight, { hightlighter: Prism }]]}
              initialValue={singleArticle?.content}
            />
          ) : null}
          <TagContainer>
            <Icon name="tag" style={{ marginRight: '0.5rem' }} />
            {singleArticle?.tags.map((tag, index) => (
              <Tag key={('tag', index)}>{tag}</Tag>
            ))}
          </TagContainer>
          <strong style={{ marginBottom: '0.6rem' }}>댓글 {comments?.length}개</strong>
          {user ? (
            <Form onSubmit={handleCommentSubmit} style={{ marginBottom: '4rem' }}>
              <Field
                fluid
                required
                control={TextareaAutosize}
                placeholder="댓글을 작성하세요."
                value={comment}
                onChange={onChangeComment}
                useCacheForDOMMeasurements
                style={{ fontFamily: 'NS-R', resize: 'none' }}
              />
              <Container.AlignCenterContainer style={{ justifyContent: 'flex-end' }}>
                <SubmitBtn type="submit">등록</SubmitBtn>
              </Container.AlignCenterContainer>
            </Form>
          ) : null}
          <Grid.Column style={{ marginTop: '1rem' }}>
            {comments?.map((c, index) => (
              <CommentContainer key={('comment', index)}>
                <Comment comment={c} />
                {index !== comments?.length - 1 ? <Divider style={{ margin: '3rem 0' }} /> : null}
              </CommentContainer>
            ))}
          </Grid.Column>
        </ArticleBody>
        <FloatMenu feedback={singleArticle?.feedback} feedbackCnt={singleArticle?.feedbackCount} />
      </Container.AlignCenterContainer>
    </>
  );
};

export default Article;

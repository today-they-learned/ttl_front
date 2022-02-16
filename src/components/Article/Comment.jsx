import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDate from 'hooks/useDate';
import styled from 'styled-components';
import * as Container from 'components/common/Containers';
import COLOR from 'constants/color.constant';
import { darken } from 'polished';
import { Image, Form, Button } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

import { DESTROY_COMMENT_REQUEST, UPDATE_COMMENT_REQUEST } from 'reducers/comment';
import useInput from 'hooks/useInput';

const CommentAvatar = styled(Image)`
  width: 3rem;
  min-width: 3rem;
  height: auto;
  margin-right: 0.5rem;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const CommentContent = styled.div`
  line-height: 1.2rem;
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

const CancleBtn = styled(SubmitBtn)`
  background: white !important;
  color: ${COLOR.PRIMARY} !important;
  margin-right: 0.5rem !important;
  &:hover {
    background: ${darken(0.1, '#ffffff')} !important;
  }
`;

const Comment = (props) => {
  const dispatch = useDispatch();
  const { comment } = props;

  const { user } = useSelector((state) => state.authentication);
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, onChangeEditComment, setEditComment] = useInput(comment.content);

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
      dispatch({
        type: DESTROY_COMMENT_REQUEST,
        id: comment.id,
      });
    }
  };

  const handleCancle = () => {
    setIsEdit(false);
    setEditComment(comment.content);
  };

  const handleUpdate = useCallback(() => {
    dispatch({
      type: UPDATE_COMMENT_REQUEST,
      id: comment.id,
      data: {
        content: editComment,
      },
    });
    setIsEdit(false);
  });

  return (
    <Container.RowStartContainer>
      <CommentAvatar
        src={
          comment.user.avatar ? comment.user.avatar : `${process.env.PUBLIC_URL}/images/missing.png`
        }
        circular
      />
      <CommentContainer>
        <Container.AlignMiddleContainer
          style={{
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '0.5rem',
          }}
        >
          <div>
            <strong style={{ fontFamily: 'NS-B', marginRight: '0.4rem' }}>
              {comment?.user.username}
            </strong>
            <LightText>{useDate(comment.createdAt)}</LightText>
          </div>
          {user?.user.id === comment.user.id && !isEdit ? (
            <div>
              <MenuText onClick={() => setIsEdit(!isEdit)}>수정</MenuText>
              <MenuText onClick={handleDelete}>삭제</MenuText>
            </div>
          ) : null}
        </Container.AlignMiddleContainer>
        {!isEdit ? (
          <CommentContent>{comment.content}</CommentContent>
        ) : (
          <Form onSubmit={handleUpdate} style={{ marginBottom: '4rem' }}>
            <Field
              fluid
              required
              control={TextareaAutosize}
              placeholder="댓글을 작성하세요."
              value={editComment}
              onChange={onChangeEditComment}
              useCacheForDOMMeasurements
              style={{ fontFamily: 'NS-R', resize: 'none' }}
            />
            <Container.AlignCenterContainer style={{ justifyContent: 'flex-end' }}>
              <CancleBtn onClick={handleCancle}>취소</CancleBtn>
              <SubmitBtn type="submit">등록</SubmitBtn>
            </Container.AlignCenterContainer>
          </Form>
        )}
      </CommentContainer>
    </Container.RowStartContainer>
  );
};

export default Comment;

/* eslint-disable no-nested-ternary */
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import media from 'styles/media';
import COLOR from 'constants/color.constant';
import { Icon, Divider } from 'semantic-ui-react';
import EMOJI from 'constants/emoji.constant';
import * as Container from 'components/common/Containers';
import { ADD_BOOKMARK_REQUEST, DESTROY_BOOKMARK_REQUEST } from 'reducers/bookmark';
import { ADD_FEEDBACK_REQUEST } from 'reducers/feedback';
import FeedbackBox from 'components/Feedback/FeedbackBox';
import { lighten, darken } from 'polished';

const FloatContainer = styled.div`
  width: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 12rem;
  z-index: 9999;
  margin-right: -60rem;
  background-color: white;
  border-radius: 2rem;
  padding: 0.5rem;
  box-shadow: 1px 1px 10px -6px rgba(0, 0, 0, 0.5);

  ${media.wide`
    right: 65rem;
  `}

  ${media.desktop`
    display: none;
  `}
`;

const EmojiContainer = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.3rem;

  &:hover {
    background-color: ${COLOR.BACKGROUND};
  }
`;

const EmojiCount = styled.div`
  width: 100%;
  height: 1rem;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const BookmarkContainer = styled(EmojiContainer)``;

const Bookmark = styled(Icon)`
  margin: 0 !important;
`;

const BookmarkCount = styled(EmojiCount)`
  margin-bottom: 0.5rem;
`;

const FeedbackContainer = styled.div`
  width: 12rem;
  position: fixed;
  background-color: white;
  margin: 0 18rem 5rem 0rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 10px -6px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-wrap: wrap;
`;

const EmojiBox = styled.div`
  cursor: pointer;
  display: flex;
  background-color: #efebe9;
  border-radius: 0.5rem;
  margin: 0.25rem;
  padding: 0.3rem 0.5rem;
  &:hover {
    background-color: ${darken(0.1, '#efebe9')};
  }
`;

export const Label = styled.div`
  cursor: pointer;
  font-family: 'NS-R' !important;
  font-size: 0.9rem;
  margin: 0.8rem 0 0 4rem;
  color: ${COLOR.PRIMARY};

  &:hover {
    color: ${lighten(0.1, COLOR.PRIMARY)};
  }
`;

const FloatMenu = ({ feedback, sub, isBookmarked }) => {
  const dispatch = useDispatch();
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);
  const [isAddFeedbackMode, setIsAddFeedbackMode] = useState(false);
  const categorys = [
    'thumbs_up',
    'heart',
    'clap',
    'lion',
    'thinking',
    'smile',
    'clover',
    'eyes',
    'perfect',
    'bulb',
  ];

  const handleBookmark = useCallback(() => {
    dispatch({
      type: isBookmarked ? DESTROY_BOOKMARK_REQUEST : ADD_BOOKMARK_REQUEST,
      id: sub.id,
    });
  });

  const handleFeedback = useCallback((e) => {
    console.log('asdfa');
    dispatch({
      type: ADD_FEEDBACK_REQUEST,
      id: sub.id,
      category: e.target.id,
    });
  });

  return (
    <>
      <FloatContainer>
        <Container.ColumnMiddleContainer onClick={() => setIsOpenFeedback(!isOpenFeedback)}>
          <EmojiContainer>
            {EMOJI[feedback?.length > 0 ? feedback[0]?.category : 'thumbs_up']}
          </EmojiContainer>
          <EmojiCount>{sub?.feedbackCount}</EmojiCount>
        </Container.ColumnMiddleContainer>
        <Divider style={{ width: '100%', margin: '0.5rem 0' }} />
        <Container.ColumnMiddleContainer onClick={handleBookmark}>
          <BookmarkContainer>
            <Bookmark
              name="bookmark"
              style={{
                opacity: isBookmarked ? 1 : 0.7,
                color: isBookmarked ? COLOR.PRIMARY : 'black',
              }}
            />
          </BookmarkContainer>
          <BookmarkCount>{sub?.bookmarkCount}</BookmarkCount>
        </Container.ColumnMiddleContainer>
        {isOpenFeedback ? (
          <FeedbackContainer>
            {isAddFeedbackMode ? (
              <>
                {categorys.map((cate) => (
                  <FeedbackBox symbol={EMOJI[cate]} id={cate} onClick={handleFeedback} />
                ))}
                <Label onClick={() => setIsAddFeedbackMode(false)}>취소</Label>
              </>
            ) : (
              <>
                {feedback?.map((f, index) => (
                  <FeedbackBox
                    label={f.category}
                    symbol={EMOJI[f.category]}
                    total={f.total}
                    id={f.category}
                    key={(index, 'feedback')}
                    onClick={handleFeedback}
                  />
                ))}
                <EmojiBox onClick={() => setIsAddFeedbackMode(true)}>
                  <Icon.Group style={{ marginRight: '0.5rem' }}>
                    <Icon>🙂</Icon>
                    <Icon corner="top right" name="add" />
                  </Icon.Group>
                  반응 추가
                </EmojiBox>
              </>
            )}
          </FeedbackContainer>
        ) : null}
      </FloatContainer>
    </>
  );
};

export default FloatMenu;

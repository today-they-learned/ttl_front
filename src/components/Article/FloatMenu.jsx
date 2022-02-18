import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import media from 'styles/media';
import COLOR from 'constants/color.constant';
import { Icon, Divider } from 'semantic-ui-react';
import EMOJI from 'constants/emoji.constant';
import { ADD_BOOKMARK_REQUEST, DESTROY_BOOKMARK_REQUEST } from 'reducers/bookmark';

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

const FloatMenu = ({ feedback, sub, isBookmarked }) => {
  const dispatch = useDispatch();

  const handleBookmark = useCallback(() => {
    dispatch({
      type: isBookmarked ? DESTROY_BOOKMARK_REQUEST : ADD_BOOKMARK_REQUEST,
      id: sub.id,
    });
  });
  return (
    <>
      <FloatContainer>
        <EmojiContainer>
          {EMOJI[feedback?.length > 0 ? feedback[0]?.category : 'thumbs_up']}
        </EmojiContainer>
        <EmojiCount>{sub?.feedbackCount}</EmojiCount>
        <Divider style={{ width: '100%', margin: '0.5rem 0' }} />
        <BookmarkContainer onClick={handleBookmark}>
          <Bookmark
            name="bookmark"
            style={{
              opacity: isBookmarked ? 1 : 0.7,
              color: isBookmarked ? COLOR.PRIMARY : 'black',
            }}
          />
        </BookmarkContainer>
        <BookmarkCount>{sub?.bookmarkCount}</BookmarkCount>
      </FloatContainer>
    </>
  );
};

export default FloatMenu;

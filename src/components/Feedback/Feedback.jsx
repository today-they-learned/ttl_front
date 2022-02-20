import React from 'react';
import styled from 'styled-components';
import EMOJI from 'constants/emoji.constant';

const EmojiWrapper = styled.span`
  display: flex;
`;

const EmojiBox1 = styled.div`
  display: ${(props) => (props.emoJiLen > 0 ? 'block' : 'none')};
  background-color: #efebe9;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
`;

const EmojiBox2 = styled.div`
  display: ${(props) => (props.emoJiLen > 1 ? 'block' : 'none')};
  background-color: #efebe9;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
`;

const Feedback = ({ firstEmoji, firstEmojiCount, secondEmoji, secondEmojiCount, emoJiLen }) => {
  return (
    <EmojiWrapper>
      <EmojiBox1 emoJiLen={emoJiLen}>
        <span role="img" aria-label={firstEmoji}>
          {EMOJI[firstEmoji]}
        </span>
        <span>{firstEmojiCount}</span>
      </EmojiBox1>
      <EmojiBox2 emoJiLen={emoJiLen}>
        <span role="img" aria-label={secondEmoji}>
          {EMOJI[secondEmoji]}
        </span>
        <span>{secondEmojiCount}</span>
      </EmojiBox2>
    </EmojiWrapper>
  );
};

export default Feedback;

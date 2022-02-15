import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const EMOJI = {
  thumbs_up: '👍',
  heart: '❤',
  clap: '👏',
  lion: '🦁',
  thinking: '🤔',
  smile: '☺️',
  clover: '🍀',
  eyes: '👀',
  perfect: '💯',
  bulb: '💡',
};

const Feedback = ({ feedback }) => {
  const emoJiLen = feedback.length;
  const sortedFeedback = feedback.sort((a, b) => {
    return b.total - a.total;
  });
  const [firstEmoji, setFirstEmoji] = useState('');
  const [firstEmojiCount, setFirstEmojiCount] = useState(0);
  const [secondEmoji, setSecondEmoji] = useState('');
  const [secondEmojiValue, setSecondEmojiValue] = useState(0);

  useEffect(() => {
    switch (emoJiLen) {
      case 0:
        setFirstEmoji('');
        setFirstEmojiCount(0);
        setSecondEmoji('');
        setSecondEmojiValue(0);
        break;
      case 1:
        setFirstEmoji(sortedFeedback[0].category);
        setFirstEmojiCount(sortedFeedback[0].total);
        setSecondEmoji('');
        setSecondEmojiValue(0);
        break;
      default:
        setFirstEmoji(sortedFeedback[0].category);
        setFirstEmojiCount(sortedFeedback[0].total);
        setSecondEmoji(sortedFeedback[1].category);
        setSecondEmojiValue(sortedFeedback[1].total);
    }

    console.log(firstEmoji, firstEmojiCount, secondEmojiValue);
  });
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
        <span>{secondEmojiValue}</span>
      </EmojiBox2>
    </EmojiWrapper>
  );
};

export default Feedback;

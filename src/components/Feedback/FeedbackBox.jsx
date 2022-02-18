import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const EmojiBox = styled.button`
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

const FeedbackBox = ({ label, symbol, total }) => {
  return (
    <EmojiBox>
      <span role="img" aria-label={label}>
        {symbol}
      </span>
      <span>{total}</span>
    </EmojiBox>
  );
};
export default FeedbackBox;

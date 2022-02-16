import React from 'react';
import styled from 'styled-components';

const EmojiBox = styled.div`
  display: flex;
  width: 2.5rem;
  background-color: #efebe9;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.3rem 0.5rem;
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

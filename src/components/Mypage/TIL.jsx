import React from 'react';
import PostList from 'components/PostList/PostList';
import styled from 'styled-components';

const TILContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`;

const TIL = (props) => {
  return (
    <TILContainer>
      <div style={{ width: '2.5vw' }} />
      <PostList id={props.id} />
    </TILContainer>
  );
};
export default TIL;

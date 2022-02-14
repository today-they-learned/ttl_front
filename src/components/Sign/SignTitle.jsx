import React from 'react';
import { ColumnMiddleContainer } from 'components/common/Containers';
import styled from 'styled-components';

const Logo = styled.img`
  width: 15rem;
  height: 4rem;
`;

const SignTitle = () => {
  return (
    <>
      <ColumnMiddleContainer>
        <Logo src="images/Logo.gif" alt="Logo" />
        <br />
        <p style={{ marginBottom: '5rem' }}>모든 TIL을 한 곳에서 모아보세요.</p>
      </ColumnMiddleContainer>
    </>
  );
};

export default SignTitle;

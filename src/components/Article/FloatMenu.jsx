import React from 'react';
import styled from 'styled-components';
import media from 'styles/media';

const FloatContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 12rem;
  width: 4rem;
  z-index: 9999;
  margin-right: -60rem;
  background-color: white;
  border-radius: 2rem;

  ${media.wide`
    right: 65rem;
  `}

  ${media.desktop`
    display: none;
  `}
`;

const FloatMenu = () => {
  return (
    <>
      <FloatContainer>
        플로팅
        <br />
        메뉴
      </FloatContainer>
    </>
  );
};

export default FloatMenu;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import COLOR from 'constants/color.constant';
import * as Container from 'components/common/Containers';
import styled from 'styled-components';
import media from 'styles/media';
import { darken } from 'polished';

const NotFoundImg = styled.img`
  width: 60%;
  height: auto;
  margin: 3rem;

  ${media.tablet`
    width: 80%
  `}
`;

export const PrimaryBtn = styled(Button)`
  background: ${COLOR.PRIMARY} !important;
  color: white !important;
  font-family: 'NS-R' !important;
  font-weight: 100 !important;
  font-size: 14px !important;

  &:hover {
    background: ${darken(0.03, COLOR.PRIMARY)} !important;
  }
`;

const NotFound = () => {
  return (
    <>
      <Container.ColumnMiddleContainer>
        <NotFoundImg src={`${process.env.PUBLIC_URL}/images/NotFound.gif`} alt="NotFound" />
        <p style={{ margin: '2rem 0 1rem 0' }}>페이지를 찾을 수 없습니다. 길을 잃으셨나요?</p>
        <Link to="/">
          <PrimaryBtn>메인으로 이동하기</PrimaryBtn>
        </Link>
      </Container.ColumnMiddleContainer>
    </>
  );
};

export default NotFound;

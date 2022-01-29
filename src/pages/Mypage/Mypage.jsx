/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProfileInfo from 'components/mypage/ProfileInfo';

const MyPage = styled.div`
  background-color: white;
`;

const Mypage = props => {
  return (
    <MyPage>
      <ProfileInfo data={props.data} />
      <div>
        <ul>~</ul>
      </div>
    </MyPage>
  );
};

export default Mypage;

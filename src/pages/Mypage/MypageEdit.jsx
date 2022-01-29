/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div`
  background-color: white;
`;

const MypageEdit = props => {
  return (
    <MyPage>
      <ProfileEdit data={props.data} />

      <div>
        <ul>~</ul>
      </div>
    </MyPage>
  );
};

export default MypageEdit;

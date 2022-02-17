import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from 'components/Mypage/ProfileInfo';
import ProfileEdit from 'components/Mypage/ProfileEdit';

const MyPage = styled.div``;

function Mypage() {
  const [editMode, setEditMode] = useState(false);

  const onChangeMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {editMode ? (
        <MyPage>
          <ProfileEdit onChangeMode={onChangeMode} />
        </MyPage>
      ) : (
        <MyPage>
          <ProfileInfo onChangeMode={onChangeMode} />
        </MyPage>
      )}
    </>
  );
}

export default Mypage;

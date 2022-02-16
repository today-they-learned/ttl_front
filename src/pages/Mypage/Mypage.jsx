import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import ProfileInfo from 'components/mypage/ProfileInfo';
import ProfileEdit from 'components/mypage/ProfileEdit';

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

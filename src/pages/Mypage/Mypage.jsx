import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import ProfileInfo from 'components/mypage/ProfileInfo';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div``;

function Mypage() {
  const { user } = useSelector((state) => state.authentication);
  console.log(user.user);
  const [info] = useState(user.user);
  const [editMode, setEditMode] = useState(false);

  const onChangeMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {editMode ? (
        <MyPage>
          <ProfileEdit data={info} onChangeMode={onChangeMode} />
        </MyPage>
      ) : (
        <MyPage>
          <ProfileInfo data={info} onChangeMode={onChangeMode} />
        </MyPage>
      )}
    </>
  );
}

export default Mypage;

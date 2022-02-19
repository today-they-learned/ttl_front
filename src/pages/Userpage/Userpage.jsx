import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo from 'components/Mypage/ProfileInfo';
import ProfileEdit from 'components/Mypage/ProfileEdit';

const MyPage = styled.div`
  max-width: 100%;
`;

function Mypage() {
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();

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
          <ProfileInfo id={id} onChangeMode={onChangeMode} />
        </MyPage>
      )}
    </>
  );
}

export default Mypage;

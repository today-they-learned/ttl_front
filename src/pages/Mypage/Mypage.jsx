import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from 'components/mypage/ProfileInfo';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div`
  background-color: #f8f8f8;
`;

const initialInfo = {
  tistory_user_id: 'soye0710',
  github_user_id: 'soyekwon',
  velog_user_id: 'SoyE',
  username: 'SoyE',
  email: 'soye0710@naver.com',
  password: 'qwertyuiop',
  introduce: '안녕하세요 :) 국민대학교 재학중인 개발자 준비생 권소예입니다.',
  tags: ['#algorithm', '#python', '#react'],
  repository: 'https://github.com/soyekwon/TIL',
  mailable: true,
};

function Mypage() {
  const [info, setInfo] = useState(initialInfo);
  const [editMode, setEditMode] = useState(false);

  const onChangeMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (_username, _email, _introduce) => {
    setInfo({
      ...info,
      username: _username,
      email: _email,
      introduce: _introduce,
    });
    setEditMode(!editMode);
  };

  return (
    <>
      {editMode ? (
        <MyPage>
          <ProfileEdit data={info} handleSubmit={handleSubmit} />
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

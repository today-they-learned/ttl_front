import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from 'components/mypage/ProfileInfo';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div``;

const initialInfo = {
  username: 'SoyE',
  email: 'soye0710@naver.com',
  password: 'qwertyuiop',
  facebook_account: 'soye0710',
  insta_account: 'soyekwon',
  twitter_account: 'SoyE',
  introduce: '안녕하세요 :) 국민대학교 재학중인 개발자 준비생 권소예입니다.',
  tags: ['algorithm', 'python', 'react'],
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
    setEditMode(false);
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

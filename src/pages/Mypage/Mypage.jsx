import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfileInfo from 'components/mypage/ProfileInfo';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div``;

// const initialInfo = {
//   username: 'SoyE',
//   email: 'soye0710@naver.com',
//   facebook_account: null,
//   insta_account: null,
//   twitter_account: null,
//   introduce: '안녕하세요 :) 국민대학교 재학중인 개발자 준비생 권소예입니다.',
//   tags: ['algorithm', 'python', 'react'],
//   repository: 'https://github.com/soyekwon/TIL',
//   mailable: true,
// };

function Mypage() {
  const { user } = useSelector((state) => state.authentication);
  console.log(user.user);
  const [info, setInfo] = useState(user.user);
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

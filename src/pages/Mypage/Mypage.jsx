/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileInfo from 'components/mypage/ProfileInfo';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div`
  background-color: white;
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
  edit_mode: false,
};

function Mypage() {
  const [info, setInfo] = useState(initialInfo);

  const onChangeMode = () => {
    setInfo({
      ...info,
      edit_mode: !info.edit_mode,
    });
  };

  const handleSubmit = (_username, _email, _introduce) => {
    setInfo({
      ...info,
      username: _username,
      email: _email,
      introduce: _introduce,
      edit_mode: !info.edit_mode,
    });
  };
  if (!info.edit_mode) {
    return (
      <MyPage>
        <ProfileInfo data={info} onChangeMode={onChangeMode} />
      </MyPage>
    );
  }

  return (
    <MyPage>
      <ProfileEdit data={info} handleSubmit={handleSubmit} />
    </MyPage>
  );
}

export default Mypage;

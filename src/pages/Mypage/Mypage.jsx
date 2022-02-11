import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
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
  console.log(user);
  console.log('응애');
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setInfo(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get('http://15.164.165.131/api/users/user/');
      setInfo(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!info) return null;

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

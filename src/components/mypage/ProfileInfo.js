import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import profileImg from '../../imgs/profile.jpg';
import facebookIcon from '../../imgs/facebook.png';
import githubIcon from '../../imgs/github.png';
import instaIcon from '../../imgs/instagram.png';

const Profile = styled.div`
  .containerLeft {
    width: 8rem;
    height: 10rem;
    float: left;
    color: black;
    background-color: white;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    padding-top: 0.8rem;
    padding-left: 0.8rem;
  }
  .containerCenter {
    width: 32rem;
    height: 10rem;
    float: left;
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    padding-top: 1rem;
    font-size: 12px;
  }

  .containerRight {
    width: 9rem;
    height: 10rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0.9rem;
    float: left;
  }
  .profileImg {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 3.5rem;
    margin-right: 0;
  }
  .userName {
    float: left;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .email {
    float: left;
    margin-bottom: 0.4rem;
    font-size: 0.6rem;
    margin-left: 0.3rem;
    margin-top: 0.4rem;
  }
  .introduce {
    clear: left;
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    height: 3.8rem;
    margin-top: 1rem;
    padding-top: 0.5rem;
  }
  .tag {
    margin-top: 0.3rem;
  }
  .editButton {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 3.2rem;
    padding: 0;
    background-color: #707bf3;
    color: white;
  }
  .iconContainer {
    width: 9rem;
    height: 2rem;
    padding-left: 4.1rem;
    padding-top: 4rem;
  }

  .icon {
    float: left;
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.3rem;
  }
`;

const initialInfo = {
  tistory_user_id: 'soye0710',
  github_user_id: 'soyekwon',
  velog_user_id: 'SoyE',
  username: 'SoyE',
  email: 'soye0710@naver.com',
  password: 'qwertyuiop',
  introduce: '안녕하세요 :) 국민대학교 재학중인 개발자 준비생 권소예입니다.',
  avatar: profileImg,
  tags: ['#algorithm', '#python', '#react'],
  repository: 'https://github.com/soyekwon/TIL',
  mailable: true,
};

// eslint-disable-next-line no-unused-vars
const handleClick = e => {
  window.location.href = '/mypage_edit';
};

const tagList = () => {
  let a = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < initialInfo.tags.length; i++) {
    a += initialInfo.tags[i];
    a += ' ';
  }

  return a;
};

const ProfileInfo = () => {
  return (
    <Profile>
      <div className="containerLeft">
        <img className="profileImg" src={initialInfo.avatar} alt="profile" />
      </div>

      <div className="containerCenter">
        <ul className="userName">{initialInfo.username}</ul>
        <ul className="email">{initialInfo.email}</ul>
        <div className="introduce">{initialInfo.introduce}</div>
        <ul className="tag">{tagList()}</ul>
      </div>

      <div className="containerRight">
        <Button className="editButton" onClick={handleClick}>
          Profile Edit
        </Button>
        <div className="iconContainer">
          <img className="icon" src={instaIcon} alt="insta_icon" />
          <img className="icon" src={githubIcon} alt="github_icon" />
          <img className="icon" src={facebookIcon} alt="fb_icon" />
        </div>
      </div>
    </Profile>
  );
};

export default ProfileInfo;

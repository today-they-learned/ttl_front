/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
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

const ProfileInfo = props => {
  const tagList = () => {
    let a = '';

    for (let i = 0; i < props.data.tags.length; i += 1) {
      a += props.data.tags[i];
      a += ' ';
    }

    return a;
  };
  return (
    <Profile>
      <div className="containerLeft">
        <img className="profileImg" src={props.data.avatar} alt="profile" />
      </div>

      <div className="containerCenter">
        <ul className="userName">{props.data.username}</ul>
        <ul className="email">{props.data.email}</ul>
        <div className="introduce">{props.data.introduce}</div>
        <ul className="tag">{tagList()}</ul>
      </div>

      <div className="containerRight">
        <Button className="editButton" onClick={props.onChangeMode}>
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

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

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
    width: 12rem;
    height: 2rem;
    padding-left: 3.2rem;
    padding-top: 3.8rem;
  }
  .icon {
    float: left;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
  }
`;

const ProfileInfo = props => {
  return (
    <Profile>
      <div className="containerLeft">
        <img className="profileImg" src="images/profile.jpg" alt="profile" />
      </div>

      <div className="containerCenter">
        <ul className="userName">{props.data.username}</ul>
        <ul className="email">{props.data.email}</ul>
        <div className="introduce">{props.data.introduce}</div>
        <ul className="tag">{props.data.tags.join()}</ul>
      </div>

      <div className="containerRight">
        <Button className="editButton" onClick={props.onChangeMode}>
          Profile Edit
        </Button>
        <div className="iconContainer">
          <img className="icon" src="images/facebook.png" alt="insta_icon" />
          <img className="icon" src="images/instagram.png" alt="fb_icon" />
          <img className="icon" src="images/twitter.png" alt="twitter_icon" />
        </div>
      </div>
    </Profile>
  );
};

export default ProfileInfo;

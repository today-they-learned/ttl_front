/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Profile } from './ProfileInfoStyled';

const ProfileInfo = props => {
  const [tab, setTab] = useState(true);

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

      <div className="containerBottom">
        <div className="line" />

        <ul
          className={`choice1 ${tab === true ? 'active' : ''}`}
          onClick={() => setTab(!tab)}
        >
          Calendar heatmap
        </ul>
        <ul
          className={`choice2 ${tab === false ? 'active' : ''}`}
          onClick={() => setTab(!tab)}
        >
          {props.data.username}&apos;s TIL
        </ul>
      </div>
    </Profile>
  );
};

export default ProfileInfo;

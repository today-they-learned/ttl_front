import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Profile } from './ProfileInfoStyled';

const ProfileInfo = (props) => {
  const [tab, setTab] = useState(true);

  const { username, email, introduce, tags } = props.data;

  return (
    <Profile>
      <div className="containerLeft">
        <img className="profileImg" src="images/profile.jpg" alt="profile" />
      </div>

      <div className="containerCenter">
        <ul className="userName">{username}</ul>
        <ul className="email">{email}</ul>
        <div className="introduce">{introduce}</div>
        <ul className="tag">{tags.join()}</ul>
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

        <button
          type="button"
          className={`choice1 ${tab === true ? 'active' : ''}`}
          onClick={() => {
            setTab(!tab);
          }}
        >
          Calendar heatmap
        </button>
        <button
          type="button"
          className={`choice2 ${tab === false ? 'active' : ''}`}
          onClick={() => {
            setTab(!tab);
          }}
        >
          {props.data.username}&apos;s TIL
        </button>
      </div>
    </Profile>
  );
};

export default ProfileInfo;

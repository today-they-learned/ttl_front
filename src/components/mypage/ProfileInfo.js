/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import * as Styled from './ProfileInfoStyled';

const ProfileInfo = (props) => {
  const [tab, setTab] = useState(true);

  const { username, email, introduce, tags } = props.data;

  return (
    <Styled.Profile>
      <Styled.ContainerLeft>
        <Styled.ProfileImg src="images/profile.jpg" />
      </Styled.ContainerLeft>

      <Styled.ContainerCenter>
        <Styled.UserName>{username}</Styled.UserName>
        <Styled.Email>{email}</Styled.Email>
        <Styled.Introduce>{introduce}</Styled.Introduce>
        <Styled.Tags className="tag">{tags.join()}</Styled.Tags>
      </Styled.ContainerCenter>

      <Styled.ContainerRight>
        <Styled.EditButton onClick={props.onChangeMode}>Profile Edit</Styled.EditButton>
        <Styled.IconContainer>
          <Styled.Icon src="images/facebook.png" alt="insta_icon" />
          <Styled.Icon src="images/instagram.png" alt="fb_icon" />
          <Styled.Icon src="images/twitter.png" alt="twitter_icon" />
        </Styled.IconContainer>
      </Styled.ContainerRight>

      <Styled.ContainerBottom>
        <Styled.Line />

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
      </Styled.ContainerBottom>
    </Styled.Profile>
  );
};

export default ProfileInfo;

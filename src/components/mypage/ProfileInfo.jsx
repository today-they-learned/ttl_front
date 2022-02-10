/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import TIL from './TIL';

const ProfileInfo = (props) => {
  console.log(props.data);
  const [tab, setTab] = useState(true);

  const { username, email } = props.data;

  return (
    <Styled.Profile>
      <Styled.ContainerLeft>
        <Styled.ProfileImg src="images/profile.jpg" />
      </Styled.ContainerLeft>

      <Styled.ContainerCenter>
        <Styled.UserName>{username}</Styled.UserName>
        <Styled.Email>{email}</Styled.Email>
        {/* <Styled.Introduce>{introduce}</Styled.Introduce>
        {tags.map((tag) => (
          <Styled.Tags>{tag}</Styled.Tags>
        ))} */}
      </Styled.ContainerCenter>

      <Styled.ContainerRight>
        <Styled.EditButton onClick={props.onChangeMode}>프로필 편집</Styled.EditButton>
        <Styled.IconContainer>
          <Styled.FBIcon src="images/facebook.png" alt="insta_icon" />
          <Styled.InstaIcon src="images/instagram.png" alt="fb_icon" />
          <Styled.TwittIcon src="images/twitter.png" alt="twitter_icon" />
        </Styled.IconContainer>
      </Styled.ContainerRight>

      <Styled.ContainerTab>
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
      </Styled.ContainerTab>
      <Styled.ContainerBottom>{tab ? <CalendarHeatMap /> : <TIL />}</Styled.ContainerBottom>
    </Styled.Profile>
  );
};

export default ProfileInfo;

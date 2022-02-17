import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import TIL from './TIL';

const ProfileInfo = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const [info] = useState(user.user);

  const [tags] = useState(user.user.tags);
  const [tab, setTab] = useState(true);

  return (
    <Styled.Profile>
      <Styled.ContainerLeft>
        <Styled.ProfileImg
          src={info?.avatar ? info?.avatar : `${process.env.PUBLIC_URL}/images/missing.png`}
        />
      </Styled.ContainerLeft>

      <Styled.ContainerCenter>
        <Styled.UserName>{info.username}</Styled.UserName>
        <Styled.Email>{info.email}</Styled.Email>
        <Styled.Introduce>{info.introduce}</Styled.Introduce>
        <Styled.TagContainer>
          {tags.map((tag) => (
            <Styled.Tagg id={tag}>{tag}</Styled.Tagg>
          ))}
        </Styled.TagContainer>
      </Styled.ContainerCenter>

      <Styled.ContainerRight>
        <Styled.EditButton onClick={props.onChangeMode}>프로필 편집</Styled.EditButton>
        <Styled.IconContainer>
          {info.facebookAccount ? (
            <a href={`https://www.facebook.com/${info.facebookAccount}`}>
              <Styled.FBIcon src="images/facebook.png" alt="insta_icon" />
            </a>
          ) : null}
          {info.instagramAccount ? (
            <a href={`https://www.instagram.com/${info.instagramAccount}`}>
              <Styled.InstaIcon src="images/instagram.png" alt="fb_icon" />
            </a>
          ) : null}
          {info.twitterAccount ? (
            <a href={`https://twitter.com/${info.twitterAccount}`}>
              <Styled.TwittIcon src="images/twitter.png" alt="twitter_icon" />
            </a>
          ) : null}
        </Styled.IconContainer>
      </Styled.ContainerRight>

      <Styled.Line />
      <Styled.ContainerTab>
        <Styled.TabButton
          type="button"
          className={`choice1 ${tab === true ? 'active' : ''}`}
          onClick={() => {
            setTab(!tab);
          }}
        >
          잔디
        </Styled.TabButton>
        <Styled.TabButton
          type="button"
          className={`choice2 ${tab === false ? 'active' : ''}`}
          onClick={() => {
            setTab(!tab);
          }}
        >
          내 TIL
        </Styled.TabButton>
      </Styled.ContainerTab>
      <Styled.ContainerBottom>
        {tab ? <CalendarHeatMap /> : <TIL id={info.id} />}
      </Styled.ContainerBottom>
    </Styled.Profile>
  );
};

export default ProfileInfo;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import CalendarHeatMapMobile from './CalendarHeatMapMobile';
import TIL from './TIL';

const ProfileInfo = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const [info] = useState(user.user);

  const [tags] = useState(user.user.tags);
  const [tab, setTab] = useState(true);

  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 763 });

    return (
      isDesktop && (
        <Styled.Profile>
          <Styled.ContainerLeft>
            <Styled.ProfileImg src={info.avatar} />
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
              <a href={info.facebookAccount}>
                <Styled.FBIcon src="images/facebook.png" alt="insta_icon" />
              </a>
              <a href={info.instagramAccount}>
                <Styled.InstaIcon src="images/instagram.png" alt="fb_icon" />
              </a>
              <a href={info.twitterAccount}>
                <Styled.TwittIcon src="images/twitter.png" alt="twitter_icon" />
              </a>
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
              Calendar heatmap
            </Styled.TabButton>
            <Styled.TabButton
              type="button"
              className={`choice2 ${tab === false ? 'active' : ''}`}
              onClick={() => {
                setTab(!tab);
              }}
            >
              {info.username}&apos;s TIL
            </Styled.TabButton>
          </Styled.ContainerTab>
          <Styled.ContainerBottom>{tab ? <CalendarHeatMap /> : <TIL />}</Styled.ContainerBottom>
        </Styled.Profile>
      )
    );
  };

  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 762 });
    return (
      isMobile && (
        <Styled.ProfileMobile>
          <Styled.ContainerTop>
            <Styled.ProfileImg2 src="images/profile.jpg" />
            <Styled.UserName2>{info.username}</Styled.UserName2>
            <Styled.Email2>{info.email}</Styled.Email2>
            <Styled.EditButton2 onClick={props.onChangeMode}>프로필 편집</Styled.EditButton2>

            <Styled.ContainerTag>
              <Styled.TagContainer>
                {tags.map((tag) => (
                  <Styled.Tagg id={tag}>{tag}</Styled.Tagg>
                ))}
              </Styled.TagContainer>
            </Styled.ContainerTag>
            <Styled.Introduce2>{info.introduce}</Styled.Introduce2>
          </Styled.ContainerTop>
          <Styled.Line2 />

          <Styled.TabButton2
            type="button"
            className={`choice1 ${tab === true ? 'active' : ''}`}
            onClick={() => {
              setTab(!tab);
            }}
          >
            Calendar heatmap
          </Styled.TabButton2>
          <Styled.TabButton2
            type="button"
            className={`choice2 ${tab === false ? 'active' : ''}`}
            onClick={() => {
              setTab(!tab);
            }}
          >
            {info.username}&apos;s TIL
          </Styled.TabButton2>

          <Styled.ContainerBottom2>
            {tab ? <CalendarHeatMapMobile /> : <TIL />}
          </Styled.ContainerBottom2>
        </Styled.ProfileMobile>
      )
    );
  };

  return (
    <div>
      <Desktop />
      <Mobile />
    </div>
  );
};

export default ProfileInfo;

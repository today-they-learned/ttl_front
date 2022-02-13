/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import CalendarHeatMapMobile from './CalendarHeatMapMobile';
import TIL from './TIL';

const tag = ['algorithm', 'python', 'react', 'django'];
const introducee =
  '안녕하세요 국민대학교 재학중인 권소예입니다 만나서 반가워요 블라블라 응애응애 응애..... 응애.';

const ProfileInfo = (props) => {
  const [tab, setTab] = useState(true);
  const { username, email } = props.data;

  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 763 });
    return (
      isDesktop && (
        <Styled.Profile>
          <Styled.ContainerLeft>
            <Styled.ProfileImg src="images/profile.jpg" />
          </Styled.ContainerLeft>

          <Styled.ContainerCenter>
            <Styled.UserName>{username}</Styled.UserName>
            <Styled.Email>{email}</Styled.Email>
            <Styled.Introduce>{introducee}</Styled.Introduce>
            {tag.map((t) => (
              <Styled.Tags>{t}</Styled.Tags>
            ))}
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
              {props.data.username}&apos;s TIL
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
            <Styled.UserName2>{username}</Styled.UserName2>
            <Styled.Email2>{email}</Styled.Email2>
            <Styled.EditButton2 onClick={props.onChangeMode}>프로필 편집</Styled.EditButton2>
            <Styled.ContainerTag>
              {tag.map((t) => (
                <Styled.Tags2>{t}</Styled.Tags2>
              ))}
            </Styled.ContainerTag>
            <Styled.Introduce2>{introducee}</Styled.Introduce2>
          </Styled.ContainerTop>
          <Styled.Line2 />
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
            {props.data.username}&apos;s TIL
          </Styled.TabButton>
          <Styled.ContainerBottom>
            {tab ? <CalendarHeatMapMobile /> : <TIL />}
          </Styled.ContainerBottom>
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

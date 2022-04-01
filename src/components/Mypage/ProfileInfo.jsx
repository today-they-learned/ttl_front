/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_REQUEST } from 'reducers/users';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import TIL from './TIL';

const ProfileInfo = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const me = JSON.parse(localStorage.getItem('user'));
  const { user, loadUserDone } = useSelector((state) => state.users);
  const [info, setInfo] = useState([]);
  const [tags, setTags] = useState([]);
  const [tab, setTab] = useState(true);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      id,
    });
  }, [dispatch]);

  useEffect(() => {
    if (loadUserDone) {
      setInfo(user);
      setTags(user.tags);
    }
  }, [loadUserDone]);

  return (
    <Styled.ProfileInfo>
      <Styled.ContainerProfile>
        <Styled.ContainerLeft>
          <Styled.ProfileImg
            src={info?.avatar ? info?.avatar : `${process.env.PUBLIC_URL}/images/missing.png`}
          />
        </Styled.ContainerLeft>

        <Styled.ContainerCenter>
          <Styled.ContainerUE>
            <Styled.UserName>{info.username}</Styled.UserName>
            <Styled.Email>{info.email}</Styled.Email>
          </Styled.ContainerUE>
          <Styled.Introduce>{info.introduce}</Styled.Introduce>
          <Styled.TagContainer>
            {tags.map((tag) => (
              <Styled.Tagg id={tag}>{tag}</Styled.Tagg>
            ))}
          </Styled.TagContainer>
        </Styled.ContainerCenter>

        <Styled.ContainerRight>
          {me.user.id === info.id ? (
            <Styled.EditButton onClick={props.onChangeMode}>프로필 편집</Styled.EditButton>
          ) : (
            <Styled.EditButton>팔로우</Styled.EditButton>
          )}

          <Styled.SnsAccountContainer>
            {info.facebookAccount ? (
              <a href={`https://www.facebook.com/${info.facebookAccount}`}>
                <Styled.FBIcon
                  src={`${process.env.PUBLIC_URL}/images/facebook.png`}
                  alt="fb_icon"
                />
              </a>
            ) : null}
            {info.instagramAccount ? (
              <a href={`https://www.instagram.com/${info.instagramAccount}`}>
                <Styled.InstaIcon
                  src={`${process.env.PUBLIC_URL}/images/instagram.png`}
                  alt="insta_icon"
                />
              </a>
            ) : null}
            {info.twitterAccount ? (
              <a href={`https://twitter.com/${info.twitterAccount}`}>
                <Styled.TwittIcon
                  src={`${process.env.PUBLIC_URL}/images/twitter.png`}
                  alt="twitter_icon"
                />
              </a>
            ) : null}
          </Styled.SnsAccountContainer>
        </Styled.ContainerRight>
      </Styled.ContainerProfile>

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
      {tab ? <CalendarHeatMap id={id} /> : <TIL id={id} />}
    </Styled.ProfileInfo>
  );
};

export default ProfileInfo;

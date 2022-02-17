import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, Icon } from 'semantic-ui-react';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import CalendarHeatMapMobile from './CalendarHeatMapMobile';
import TIL from './TIL';

const ProfileInfo = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const [info] = useState(user.user);

  const [tags, setTags] = useState(user.user.tags);
  const [tab, setTab] = useState(true);
  const [tagEdit, setTagEdit] = useState(true);

  const deleteTag = (e) => {
    const value = e.target.parentElement.id;
    setTags(tags.filter((tag) => tag !== value));
  };

  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 763 });
    const TagSubmit = () => {
      // api put code
      setTagEdit(!tagEdit);
    };

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
            {tagEdit ? (
              <div>
                <Styled.TagContainer>
                  {tags.map((tag) => (
                    <Styled.Tagg id={tag}>{tag}</Styled.Tagg>
                  ))}
                </Styled.TagContainer>
              </div>
            ) : (
              <div>
                <Styled.TagContainer>
                  {tags.map((tag) => (
                    <Styled.Tagg id={tag}>{tag}</Styled.Tagg>
                  ))}
                </Styled.TagContainer>

                <Form onSubmit={TagSubmit}>
                  <Styled.TagField>
                    <Form.Field control={Input} />
                  </Styled.TagField>
                  <Styled.TagButton>추가</Styled.TagButton>
                </Form>
              </div>
            )}
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
              {tagEdit ? (
                <div>
                  <Styled.TagContainer>
                    {tags.map((tag) => (
                      <Styled.Tagg id={tag}>
                        {tag}
                        <Icon name="delete" onClick={deleteTag} />
                      </Styled.Tagg>
                    ))}
                  </Styled.TagContainer>
                  <Styled.TagButton onClick={() => setTagEdit(!tagEdit)}>추가</Styled.TagButton>
                </div>
              ) : (
                <div>
                  <Styled.TagContainer>
                    {tags.map((tag) => (
                      <Styled.Tagg id={tag}>{tag}</Styled.Tagg>
                    ))}
                  </Styled.TagContainer>

                  <Form>
                    <Styled.TagField>
                      <Form.Field control={Input} />
                    </Styled.TagField>
                    <Styled.TagButton onClick={() => setTagEdit(!tagEdit)}>추가</Styled.TagButton>
                  </Form>
                </div>
              )}
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

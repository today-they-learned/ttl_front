/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, Icon } from 'semantic-ui-react';
import * as Styled from './ProfileInfoStyled';
import CalendarHeatMap from './CalendarHeatMap';
import CalendarHeatMapMobile from './CalendarHeatMapMobile';
import TIL from './TIL';

const ProfileInfo = (props) => {
  const [tags, setTags] = useState(['algorithm', 'python', 'react']);
  const [tab, setTab] = useState(true);
  const [tagEdit, setTagEdit] = useState(true);
  const { username, email, introduce } = props.data;
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
            <Styled.ProfileImg src="images/profile.jpg" />
          </Styled.ContainerLeft>

          <Styled.ContainerCenter>
            <Styled.UserName>{username}</Styled.UserName>
            <Styled.Email>{email}</Styled.Email>
            <Styled.Introduce>{introduce}</Styled.Introduce>
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
              <Styled.FBIcon src="images/facebook.png" alt="insta_icon" />
              <Styled.InstaIcon src="images/instagram.png" alt="fb_icon" />
              <Styled.TwittIcon src="images/twitter.png" alt="twitter_icon" />
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
            <Styled.Introduce2>{introduce}</Styled.Introduce2>
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
            {props.data.username}&apos;s TIL
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

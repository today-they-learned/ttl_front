/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_USER_REQUEST } from 'reducers/authentication';
import { LOAD_USER_REQUEST } from 'reducers/users';
import { Form, Input, TextArea, Icon } from 'semantic-ui-react';
import * as Styled from './ProfileEditStyled';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const formData = new FormData();
  const { user, updateUserDone } = useSelector((state) => state.authentication);
  const [info, setInfo] = useState(user.user);
  const [tags, setTags] = useState();
  const [taglist, setTagList] = useState(user.user.tags);
  const [tagEdit, setTagEdit] = useState(true);
  const [fileUrl, setFileUrl] = useState(info.avatar);
  const [profile, setProfile] = useState(info.avatar);
  const [photo, setPhoto] = useState(true);

  const tagsRef = useRef();

  const deleteTag = (e) => {
    const value = e.target.parentElement.id;
    setTagList(taglist.filter((tag) => tag !== value));
  };

  const inputHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const inputHandlerTag = (e) => {
    setTags(e.target.value);
  };

  const onChange = (e) => {
    const imageFile = e.target.files[0];
    console.log(e.target.files[0]);
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    setProfile(imageFile);
    setPhoto(!photo);
  };

  const handleSubmit = useCallback(() => {
    formData.append('username', info.username);
    formData.append('tags', JSON.stringify(taglist));
    formData.append('email', info.email);
    formData.append('introduce', info.introduce);
    formData.append('facebook_account', info.facebookAccount);
    formData.append('instagram_account', info.instagramAccount);
    formData.append('twitter_account', info.twitterAccount);
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: formData,
    });
  }, [dispatch, formData]);

  const photoSubmit = () => {
    formData.append('avatar', profile);
  };

  const tagSubmit = () => {
    if (tags !== undefined) {
      setTagList(taglist.concat(tags));
      setTags();
    }
    setTagEdit(!tagEdit);
  };

  useEffect(() => {
    if (updateUserDone) {
      dispatch({
        type: LOAD_USER_REQUEST,
        id: info.id,
      });
      window.location.replace(window.location.pathname);
    }
  }, [updateUserDone]);

  return (
    <Styled.InfoEdit>
      <Form onSubmit={handleSubmit}>
        <Styled.AvatarFormContainer>
          <Styled.ProfileImg
            src={info?.avatar ? fileUrl : `${process.env.PUBLIC_URL}/images/missing.png`}
            alt="profile"
          />
          {photo ? (
            <Styled.PhotoButton for="input_file">사진 업로드</Styled.PhotoButton>
          ) : (
            <Styled.PhotoButton2 for="input_file" onClick={photoSubmit}>
              사진 저장
            </Styled.PhotoButton2>
          )}

          <Styled.PhotoInput
            id="input_file"
            type="file"
            accept="image/jpg,image/png,image/jpeg"
            name="profile_img"
            onChange={onChange}
          />
        </Styled.AvatarFormContainer>
        <Styled.ActionContainer>
          <Styled.BackButton>취소</Styled.BackButton>
          <Styled.EditButton>저장</Styled.EditButton>
        </Styled.ActionContainer>

        <Styled.ProfileFormContainer>
          <Styled.Labell>username</Styled.Labell>
          <Styled.UNField>
            <Form.Field
              control={Input}
              name="username"
              placeholder={info.username}
              value={info.username}
              onChange={inputHandler}
            />
          </Styled.UNField>
          <Styled.Labell>introduce</Styled.Labell>
          <Styled.AboutField>
            <Form.Field
              control={TextArea}
              name="introduce"
              placeholder={info.introduce}
              value={info.introduce}
              onChange={inputHandler}
            />
          </Styled.AboutField>
        </Styled.ProfileFormContainer>
      </Form>

      {tagEdit ? (
        <div>
          <Styled.TagContainer>
            {taglist.map((tag) => (
              <Styled.Tagg id={tag}>
                {tag}
                <Icon name="delete" onClick={deleteTag} />
              </Styled.Tagg>
            ))}
          </Styled.TagContainer>
          <Styled.TagButton onClick={() => setTagEdit(!tagEdit)}>태그 추가</Styled.TagButton>
        </div>
      ) : (
        <div>
          <Styled.TagContainer>
            <Form onSubmit={tagSubmit}>
              <Styled.TagField>
                <Form.Field control={Input} ref={tagsRef} onChange={inputHandlerTag} />
              </Styled.TagField>
              <Styled.TagSubmitButton>태그 추가</Styled.TagSubmitButton>
            </Form>
          </Styled.TagContainer>
        </div>
      )}
      <Styled.Container />
      <Form onSubmit={handleSubmit}>
        <Styled.ProfileFormContainer>
          <Styled.SnsField>
            <Styled.TagLabel>facebook_username</Styled.TagLabel>
            <Form.Field
              control={Input}
              name="facebookAccount"
              placeholder="페이스북 계정을 입력하세요"
              value={info.facebookAccount}
              onChange={inputHandler}
            />
          </Styled.SnsField>
          <Styled.SnsField>
            <Styled.TagLabel>instagram_username</Styled.TagLabel>
            <Form.Field
              control={Input}
              name="instagramAccount"
              placeholder="인스타그램 계정을 입력하세요"
              value={info.instagramAccount}
              onChange={inputHandler}
            />
          </Styled.SnsField>
          <Styled.SnsField>
            <Styled.TagLabel>twitter_username</Styled.TagLabel>
            <Form.Field
              control={Input}
              name="twitterAccount"
              placeholder="트위터 계정을 입력하세요"
              value={info.twitterAccount}
              onChange={inputHandler}
            />
          </Styled.SnsField>
        </Styled.ProfileFormContainer>
      </Form>
    </Styled.InfoEdit>
  );
};

export default ProfileEdit;

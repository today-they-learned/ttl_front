import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_USER_REQUEST } from 'reducers/authentication';
import { Form, Input, TextArea } from 'semantic-ui-react';
import * as Styled from './ProfileEditStyled';

const ProfileEdit = (props) => {
  const { user } = useSelector((state) => state.authentication);
  const [info, setInfo] = useState(user.user);

  const inputHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const formData = new FormData();

  const onChange = (e) => {
    const img = e.target.files[0];
    formData.append('avatar', img);
  };

  const handleSubmit = useCallback(() => {
    formData.append('username', info.username);
    formData.append('email', info.email);
    formData.append('introduce', info.introduce);
    formData.append('facebook_account', info.facebookAccount);
    formData.append('instagram_account', info.instagramAccount);
    formData.append('twitter_account', info.twitterAccount);
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: formData,
    });
    props.onChangeMode();
  }, [dispatch, formData]);

  return (
    <Styled.InfoEdit>
      <Styled.ContainerLeft>
        <Styled.ProfileImg src={info.avatar} alt="profile" />
        <div>
          <Styled.PhotoInput
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profile_img"
            onChange={onChange}
          />
        </div>
      </Styled.ContainerLeft>
      <Form onSubmit={handleSubmit}>
        <Styled.ContainerCenter>
          <Styled.UNField>
            <Form.Field
              control={Input}
              name="username"
              placeholder={info.username}
              value={info.username}
              onChange={inputHandler}
            />
          </Styled.UNField>
          <Styled.BackButton>취소</Styled.BackButton>
          <Styled.EditButton>저장</Styled.EditButton>

          <Styled.AboutField>
            <Form.Field
              control={TextArea}
              name="introduce"
              placeholder={info.introduce}
              value={info.introduce}
              onChange={inputHandler}
            />
          </Styled.AboutField>

          <Styled.TagLabel>facebook_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field
              control={Input}
              name="facebookAccount"
              placeholder="페이스북 계정을 입력하세요"
              value={info.facebookAccount}
              onChange={inputHandler}
            />
          </Styled.SnsField>
          <Styled.TagLabel>instagram_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field
              control={Input}
              name="instagramAccount"
              placeholder="인스타그램 계정을 입력하세요"
              value={info.instagramAccount}
              onChange={inputHandler}
            />
          </Styled.SnsField>
          <Styled.TagLabel>twitter_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field
              control={Input}
              name="twitterAccount"
              placeholder="트위터 계정을 입력하세요"
              value={info.twitterAccount}
              onChange={inputHandler}
            />
          </Styled.SnsField>
        </Styled.ContainerCenter>
      </Form>
    </Styled.InfoEdit>
  );
};

export default ProfileEdit;

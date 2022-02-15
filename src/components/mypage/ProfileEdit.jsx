import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_USER_REQUEST } from 'reducers/authentication';
import { Form, Input, TextArea } from 'semantic-ui-react';
import * as Styled from './ProfileEditStyled';

const ProfileEdit = (props) => {
  const [info, setInfo] = useState(props.data);

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
      <Styled.ContainerCenter>
        <Form onSubmit={handleSubmit}>
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
        </Form>
      </Styled.ContainerCenter>
      <Styled.ContainerBottom>
        <Form>
          <Styled.TagLabel>facebook_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field control={Input} placeholder="페이스북 계정을 입력하세요" />
          </Styled.SnsField>
          <Styled.TagLabel>instagram_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field control={Input} placeholder="인스타그램 계정을 입력하세요" />
          </Styled.SnsField>
          <Styled.TagLabel>twitter_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field control={Input} placeholder="트위터 계정을 입력하세요" />
          </Styled.SnsField>
        </Form>
      </Styled.ContainerBottom>
    </Styled.InfoEdit>
  );
};

export default ProfileEdit;

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

  // const editInfo = () => {
  //   props.handleSubmit(info.username, info.email, info.introduce);
  // };

  const dispatch = useDispatch();

  const handleSubmitt = useCallback(() => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        username: info.username,
        email: info.email,
        introduce: info.introduce,
      },
    });
    props.onChangeMode();
  }, [dispatch, info.username, info.email, info.introduce]);

  return (
    <Styled.InfoEdit>
      <Styled.ContainerLeft>
        <Styled.ProfileImg src="images/profile.jpg" alt="profile" />
        <Styled.UploadButton>Photo upload</Styled.UploadButton>
      </Styled.ContainerLeft>
      <Styled.ContainerCenter>
        <Form onSubmit={handleSubmitt}>
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

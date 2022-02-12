import React, { useState } from 'react';
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

  const editInfo = () => {
    props.handleSubmit(info.username, info.email, info.introduce);
    console.log('hi');
  };

  return (
    <Styled.InfoEdit>
      <Styled.PhotoContainer>
        <Styled.ProfileImg src="images/profile.jpg" alt="profile" />
        <Styled.UploadButton>Photo upload</Styled.UploadButton>
      </Styled.PhotoContainer>

      <Styled.ButtonContainer>
        <Styled.BackButton>취소</Styled.BackButton>
        <Styled.EditButton onClick={editInfo}>저장</Styled.EditButton>
      </Styled.ButtonContainer>

      <Styled.FieldContainer>
        <Form onSubmit={editInfo}>
          <Styled.Label>이름</Styled.Label>
          <Styled.Container>
            <Styled.UNField>
              <Form.Field
                control={Input}
                name="username"
                placeholder={info.username}
                value={info.username}
                onChange={inputHandler}
              />
            </Styled.UNField>
          </Styled.Container>
          <Styled.Label2>한 줄 소개</Styled.Label2>
          <Styled.Container2>
            <Styled.AboutField>
              <Form.Field
                control={TextArea}
                name="introduce"
                placeholder="한 줄 소개를 입력하세요"
                value={info.introduce}
                onChange={inputHandler}
              />
            </Styled.AboutField>
          </Styled.Container2>
          <Styled.Label2>관심 태그</Styled.Label2>
          <Styled.Container2>
            <Styled.TagField>
              <Form.Field
                control={Input}
                name="tags"
                placeholder="관심분야를 입력하세요"
                value={info.tags.join()}
              />
            </Styled.TagField>
          </Styled.Container2>
          <Styled.Label2>페이스북 계정</Styled.Label2>
          <Styled.Container2>
            <Styled.SnsField>
              <Form.Field
                control={Input}
                placeholder="페이스북 계정을 입력하세요"
                value={info.facebook_account}
              />
            </Styled.SnsField>
          </Styled.Container2>
          <Styled.Label2>인스타 계정</Styled.Label2>
          <Styled.Container2>
            <Styled.SnsField>
              <Form.Field
                control={Input}
                placeholder="인스타그램 계정을 입력하세요"
                value={info.insta_account}
              />
            </Styled.SnsField>
          </Styled.Container2>
          <Styled.Label2>트위터 계정</Styled.Label2>
          <Styled.Container2>
            <Styled.SnsField>
              <Form.Field
                control={Input}
                placeholder="트위터 계정을 입력하세요"
                value={info.twitter_account}
              />
            </Styled.SnsField>
          </Styled.Container2>
        </Form>
      </Styled.FieldContainer>
    </Styled.InfoEdit>
  );
};

export default ProfileEdit;

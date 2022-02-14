import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Form, Input, TextArea } from 'semantic-ui-react';
import * as Styled from './ProfileEditStyled';

const tag = ['algorithm', 'python', 'react', 'django'];
const introducee =
  '안녕하세요 국민대학교 재학중인 권소예입니다 만나서 반가워요 블라블라 응애응애 응애..... 응애.';
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

  const Desktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 763 });
    return (
      isDesktop && (
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
              <Styled.Container>
                <Styled.Label>이름</Styled.Label>
                <Styled.Container2>
                  <Styled.UNField>
                    <Form.Field
                      control={Input}
                      name="username"
                      placeholder="이름을 입력하세요"
                      value={info.username}
                      onChange={inputHandler}
                    />
                  </Styled.UNField>
                </Styled.Container2>
              </Styled.Container>

              <Styled.Container3>
                <Styled.Label>한 줄 소개</Styled.Label>
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
              </Styled.Container3>

              <Styled.Container>
                <Styled.Label>페이스북 계정</Styled.Label>
                <Styled.Container2>
                  <Styled.SnsField>
                    <Form.Field
                      control={Input}
                      placeholder="페이스북 계정을 입력하세요"
                      value={info.facebook_account}
                    />
                  </Styled.SnsField>
                </Styled.Container2>
              </Styled.Container>

              <Styled.Container>
                <Styled.Label>인스타 계정</Styled.Label>
                <Styled.Container2>
                  <Styled.SnsField>
                    <Form.Field
                      control={Input}
                      placeholder="인스타그램 계정을 입력하세요"
                      value={info.insta_account}
                    />
                  </Styled.SnsField>
                </Styled.Container2>
              </Styled.Container>

              <Styled.Container>
                <Styled.Label>트위터 계정</Styled.Label>
                <Styled.Container2>
                  <Styled.SnsField>
                    <Form.Field
                      control={Input}
                      placeholder="트위터 계정을 입력하세요"
                      value={info.twitter_account}
                    />
                  </Styled.SnsField>
                </Styled.Container2>
              </Styled.Container>
            </Form>
          </Styled.FieldContainer>
        </Styled.InfoEdit>
      )
    );
  };

  const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 762 });
    return (
      isMobile && (
        <Styled.InfoEditMobile>
          <Styled.PhotoContainer>
            <Styled.ProfileImg2 src="images/profile.jpg" alt="profile" />
            <Styled.UploadButton2>Photo upload</Styled.UploadButton2>
          </Styled.PhotoContainer>
          <Styled.ButtonContainer2>
            <Styled.BackButton2>취소</Styled.BackButton2>
            <Styled.EditButton2 onClick={editInfo}>저장</Styled.EditButton2>
          </Styled.ButtonContainer2>

          <Form onSubmit={editInfo}>
            <Styled.FieldContainerMobile>
              <Styled.FieldLabel>이름</Styled.FieldLabel>
              <Styled.Containerr>
                <Styled.UNField2>
                  <Form.Field
                    control={Input}
                    name="username"
                    placeholder="이름을 입력하세요"
                    value={info.username}
                    onChange={inputHandler}
                  />
                </Styled.UNField2>
              </Styled.Containerr>
            </Styled.FieldContainerMobile>

            <Styled.FieldContainerMobile>
              <Styled.FieldLabel>한 줄 소개</Styled.FieldLabel>
              <Styled.Containerr>
                <Styled.AboutField2>
                  <Form.Field
                    control={TextArea}
                    name="introduce"
                    placeholder="한 줄 소개를 입력하세요"
                    value={introducee}
                    onChange={inputHandler}
                  />
                </Styled.AboutField2>
              </Styled.Containerr>
            </Styled.FieldContainerMobile>

            <Styled.FieldContainerMobile>
              <Styled.FieldLabel>태그</Styled.FieldLabel>
              <Styled.Containerr>
                <Styled.TagField2>
                  <Form.Field
                    control={Input}
                    name="tags"
                    placeholder="관심분야를 입력하세요"
                    value={tag}
                    onChange={inputHandler}
                  />
                </Styled.TagField2>
              </Styled.Containerr>
            </Styled.FieldContainerMobile>

            <Styled.FieldContainerMobile>
              <Styled.FieldLabel>페이스북</Styled.FieldLabel>
              <Styled.Containerr>
                <Styled.SnsField2>
                  <Form.Field
                    control={Input}
                    placeholder="페이스북 계정을 입력하세요"
                    value={info.facebook_account}
                  />
                </Styled.SnsField2>
              </Styled.Containerr>
            </Styled.FieldContainerMobile>

            <Styled.FieldContainerMobile>
              <Styled.FieldLabel>인스타그램</Styled.FieldLabel>
              <Styled.Containerr>
                <Styled.SnsField2>
                  <Form.Field
                    control={Input}
                    placeholder="인스타그램 계정을 입력하세요"
                    value={info.insta_account}
                  />
                </Styled.SnsField2>
              </Styled.Containerr>
            </Styled.FieldContainerMobile>

            <Styled.FieldContainerMobile>
              <Styled.FieldLabel>트위터</Styled.FieldLabel>
              <Styled.Containerr>
                <Styled.SnsField2>
                  <Form.Field
                    control={Input}
                    placeholder="트위터 계정을 입력하세요"
                    value={info.twitter_account}
                  />
                </Styled.SnsField2>
              </Styled.Containerr>
            </Styled.FieldContainerMobile>
          </Form>
        </Styled.InfoEditMobile>
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

export default ProfileEdit;

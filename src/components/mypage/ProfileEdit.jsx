import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, TextArea } from 'semantic-ui-react';
import * as Styled from './ProfileEditStyled';

const ProfileEdit = (props) => {
  const [info, setInfo] = useState(props.data);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // console.log(info.username);

  const inputHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  // const editInfo = () => {
  //   props.handleSubmit(info.username, info.email, info.introduce);
  // };

  // const fetchUsers = async () => {
  //   try {
  //     // 요청이 시작 할 때에는 error 와 users 를 초기화하고
  //     setError(null);
  //     setInfo(null);
  //     // loading 상태를 true 로 바꿉니다.
  //     setLoading(true);
  //     const response = axios.put('http://15.164.165.131/api/users/user/', {
  //       tags: [],
  //       facebook_account: ' ',
  //       instagram_account: ' ',
  //       twitter_account: ' ',
  //     });
  //     setInfo(response.data); // 데이터는 response.data 안에 들어있습니다.
  //   } catch (e) {
  //     setError(e);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // if (!info) return null;
  const put = axios.put('http://15.164.165.131/api/users/user/', {
    tags: [],
    facebook_account: 'soye',
    instagram_account: ' ',
    twitter_account: ' ',
  });

  return (
    <Styled.InfoEdit>
      <Styled.ContainerLeft>
        <Styled.ProfileImg src="images/profile.jpg" alt="profile" />
        <Styled.UploadButton>Photo upload</Styled.UploadButton>
      </Styled.ContainerLeft>
      <Styled.ContainerCenter>
        <Form onSubmit={put}>
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
              placeholder="한 줄 소개를 입력하세요"
              value={info.introduce}
              onChange={inputHandler}
            />
          </Styled.AboutField>

          <Styled.TagField>
            <Form.Field
              control={Input}
              name="tags"
              placeholder="관심분야를 입력하세요"
              value={info.tags.join()}
            />
          </Styled.TagField>
        </Form>
      </Styled.ContainerCenter>
      <Styled.ContainerBottom>
        <Form>
          <Styled.TagLabel>facebook_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field
              control={Input}
              placeholder="페이스북 계정을 입력하세요"
              value={info.facebook_account}
            />
          </Styled.SnsField>
          <Styled.TagLabel>instagram_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field
              control={Input}
              placeholder="인스타그램 계정을 입력하세요"
              value={info.instagram_account}
            />
          </Styled.SnsField>
          <Styled.TagLabel>twitter_username</Styled.TagLabel>
          <Styled.SnsField>
            <Form.Field
              control={Input}
              placeholder="트위터 계정을 입력하세요"
              value={info.twitter_account}
            />
          </Styled.SnsField>
        </Form>
      </Styled.ContainerBottom>
    </Styled.InfoEdit>
  );
};

export default ProfileEdit;

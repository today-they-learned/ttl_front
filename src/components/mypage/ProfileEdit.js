import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import useInput from '../../hooks/useInput';
import * as Styled from './ProfileEditStyled';

const ProfileEdit = (props) => {
  const [info, setInfo] = useInput(props.data);

  const editInfo = () => {
    props.handleSubmit(info.username, info.email, info.introduce);
    console.log(info.username);
  };

  return (
    <Styled.InfoEdit>
      <Styled.ContainerLeft>
        <Styled.ProfileImg src="images/profile.jpg" alt="profile" />
        <Styled.UploadButton>Photo upload</Styled.UploadButton>
      </Styled.ContainerLeft>
      <Styled.ContainerCenter>
        <Form onSubmit={editInfo}>
          <Styled.UNField>
            <Form.Field
              control={Input}
              name="username"
              placeholder={info.username}
              value={info.username}
              onChange={setInfo}
            />
          </Styled.UNField>
          <Styled.EditButton>Profile Edit</Styled.EditButton>
          <Styled.EmailField>
            <Form.Field
              control={Input}
              name="email"
              placeholder={info.email}
              value={info.email}
              onChange={setInfo}
            />
          </Styled.EmailField>
          <Styled.AboutField>
            <Form.Field
              control={TextArea}
              name="introduce"
              placeholder={info.introduce}
              value={info.introduce}
              onChange={setInfo}
            />
          </Styled.AboutField>
        </Form>
      </Styled.ContainerCenter>
      <Styled.ContainerBottom>
        <Form>
          <Styled.TagLabel>관심 태그</Styled.TagLabel>
          <Styled.TagField>
            <Form.Field control={Input} name="tags" placeholder={props.data.tags.join()} />
          </Styled.TagField>
          <Styled.TagLabel>facebook_username</Styled.TagLabel>
          <Styled.TagField>
            <Form.Field control={Input} placeholder={props.data.tistory_user_id} />
          </Styled.TagField>
          <Styled.TagLabel>instagram_username</Styled.TagLabel>
          <Styled.TagField>
            <Form.Field control={Input} placeholder={props.data.github_user_id} />
          </Styled.TagField>
          <Styled.TagLabel>twitter_username</Styled.TagLabel>
          <Styled.TagField>
            <Form.Field control={Input} placeholder={props.data.velog_user_id} />
          </Styled.TagField>
        </Form>
      </Styled.ContainerBottom>
    </Styled.InfoEdit>
  );
};

export default ProfileEdit;

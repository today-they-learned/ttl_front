/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import {
  InfoEdit,
  UNField,
  EmailField,
  AboutField,
  TagField,
} from './ProfileEditStyled';

const ProfileEdit = props => {
  const [info, setInfo] = useState(props.data);
  const inputHandler = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const editInfo = e => {
    e.preventDefault();
    props.handleSubmit(info.username, info.email, info.introduce);
    console.log(info.username);
  };
  return (
    <InfoEdit>
      <div className="containerLeft">
        <img className="profileImg" src="images/profile.jpg" alt="profile" />
        <Button className="uploadButton">Photo upload</Button>
      </div>
      <div className="containerCenter">
        <Form onSubmit={e => editInfo(e)}>
          <UNField>
            <Form.Field
              control={Input}
              name="username"
              placeholder={info.username}
              value={info.username}
              onChange={inputHandler}
            />
          </UNField>
          <Button type="submit" className="editButton">
            Profile Edit
          </Button>
          <EmailField>
            <Form.Field
              control={Input}
              name="email"
              placeholder={info.email}
              value={info.email}
              onChange={inputHandler}
            />
          </EmailField>
          <AboutField>
            <Form.Field
              control={TextArea}
              name="introduce"
              placeholder={info.introduce}
              value={info.introduce}
              onChange={inputHandler}
            />
          </AboutField>
        </Form>
      </div>
      <div className="containerBottom">
        <Form>
          <ul className="tagLabel">관심 태그</ul>
          <TagField>
            <Form.Field
              control={Input}
              name="tags"
              placeholder={props.data.tags.join()}
            />
          </TagField>
          <ul className="tagLabel">tistory_user_id</ul>
          <TagField>
            <Form.Field
              control={Input}
              placeholder={props.data.tistory_user_id}
            />
          </TagField>
          <ul className="tagLabel">github_user_id</ul>
          <TagField>
            <Form.Field
              control={Input}
              placeholder={props.data.github_user_id}
            />
          </TagField>
          <ul className="tagLabel">velog_user_id</ul>
          <TagField>
            <Form.Field
              control={Input}
              placeholder={props.data.velog_user_id}
            />
          </TagField>
        </Form>
      </div>
    </InfoEdit>
  );
};

export default ProfileEdit;

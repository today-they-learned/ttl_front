/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';

const InfoEdit = styled.div`
  .containerLeft {
    width: 8rem;
    height: 10rem;
    float: left;
    color: black;
    margin-left: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1.2rem;
    padding-top: 0.8rem;
    padding-left: 0.8rem;
  }
  .containerCenter {
    width: 40rem;
    height: 10rem;
    float: left;
    margin-top: 0.5rem;
    margin-left: 1.2rem;
    margin-bottom: 1.2rem;
    padding-left: 0.5rem;
    padding-top: 1.2rem;
    font-size: 12px;
    border-radius: 0.2rem;
    /* background-color: #eaeaea; */
  }
  .containerBottom {
    width: 47.2rem;
    clear: left;
    margin-left: 1.5rem;
    padding-left: 3.5rem;
    padding-top: 3rem;
    font-size: 12px;
    border-radius: 0.2rem;
    /* background-color: #eaeaea; */
  }
  .profileImg {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 3.5rem;
    margin-right: 0;
  }
  .uploadButton {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 0.8rem;
    padding: 0;
    background-color: #707bf3;
    color: white;
  }
  .editButton {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-top: 0.1rem;
    margin-left: 27rem;
    padding: 0;
    background-color: #707bf3;
    color: white;
  }
  .tagLabel {
    float: left;
    margin-top: 0.8rem;
    margin-left: 0.2rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
`;

const UNField = styled(Form.Field)`
  width: 7rem;
  float: left;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 0.6rem;
  font-weight: 600;
`;

const EmailField = styled(Form.Field)`
  width: 14rem;
  float: left;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  font-weight: 200;
`;

const AboutField = styled(Form.Field)`
  width: 34rem;
  clear: left;
  font-size: 0.6rem;
`;

const TagField = styled(Form.Field)`
  width: 40.1rem;
  font-size: 0.7rem;
`;

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

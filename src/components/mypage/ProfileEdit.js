/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import syncIcon from '../../imgs/synchronization.png';

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
    width: 32rem;
    height: 10rem;
    float: left;
    margin-top: 0.5rem;
    margin-left: 1.2rem;
    margin-bottom: 1.2rem;
    padding-left: 0.5rem;
    padding-top: 1.2rem;
    font-size: 12px;
    border-radius: 0.2rem;
  }
  .containerBottom {
    width: 41.2rem;
    clear: left;
    margin-left: 1.5rem;
    padding-left: 0.5rem;
    padding-top: 0.3rem;
    font-size: 12px;
    border-radius: 0.2rem;
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
    width: 4rem;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-top: 0.1rem;
    margin-left: 21rem;
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
  .syncIcon {
    margin-top: 0.7rem;
    margin-left: 0.5rem;
    float: left;
    width: 1rem;
  }
`;

const UNField = styled(Form.Field)`
  width: 6rem;
  float: left;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 0.6rem;
  font-weight: 600;
`;

const EmailField = styled(Form.Field)`
  width: 12rem;
  float: left;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  font-weight: 200;
`;

const AboutField = styled(Form.Field)`
  width: 31rem;
  clear: left;
  font-size: 0.6rem;
`;

const TagField = styled(Form.Field)`
  width: 40.1rem;
  font-size: 0.7rem;
`;

const handleClick = () => {
  window.location.href = '/mypage';
};

const ProfileEdit = props => {
  const tagList = () => {
    let a = '';

    for (let i = 0; i < props.data.tags.length; i += 1) {
      a += props.data.tags[i];
      a += ' ';
    }

    return a;
  };
  return (
    <InfoEdit>
      <div className="containerLeft">
        <img className="profileImg" src={props.data.avatar} alt="profile" />
        <Button className="uploadButton">Photo upload</Button>
      </div>
      <div className="containerCenter">
        <Form>
          <UNField>
            <Form.Field control={Input} placeholder={props.data.username} />
          </UNField>
          <Button className="editButton" onClick={handleClick}>
            edit
          </Button>
          <EmailField>
            <Form.Field control={Input} placeholder={props.data.email} />
          </EmailField>
          <AboutField>
            <Form.Field control={TextArea} placeholder={props.data.introduce} />
          </AboutField>
        </Form>
      </div>
      <div className="containerBottom">
        <Form>
          <ul className="tagLabel">관심 태그</ul>
          <TagField>
            <Form.Field control={Input} placeholder={tagList()} />
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
          <TagField>
            <ul className="tagLabel">github_repository</ul>
            <img className="syncIcon" src={syncIcon} alt="icon" />

            <Form.Field control={Input} placeholder={props.data.repository} />
          </TagField>
        </Form>
      </div>
    </InfoEdit>
  );
};

export default ProfileEdit;

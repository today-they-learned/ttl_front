import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const InfoEdit = styled.div`
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
  }
  .containerBottom {
    width: 47.2rem;
    clear: left;
    margin-left: 1.5rem;
    padding-left: 3.5rem;
    padding-top: 3rem;
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

export const UNField = styled(Form.Field)`
  width: 7rem;
  float: left;
  margin-bottom: 0;
  padding-bottom: 0;
  font-size: 0.6rem;
  font-weight: 600;
`;

export const EmailField = styled(Form.Field)`
  width: 14rem;
  float: left;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  font-weight: 200;
`;

export const AboutField = styled(Form.Field)`
  width: 34rem;
  clear: left;
  font-size: 0.6rem;
`;

export const TagField = styled(Form.Field)`
  width: 40.1rem;
  font-size: 0.7rem;
`;

import styled from 'styled-components';
import { Form, Label, Input } from 'semantic-ui-react';

export const InfoEdit = styled.div`
  width: 100%;
  padding-left: 2rem;
  @media screen and (max-width: 767px) {
    width: 28rem;
    background-color: aqua;
  }
`;

export const ContainerLeft = styled.div`
  width: 8rem;
  height: 10rem;
  float: left;
  color: black;
  margin: 0.5rem auto auto 1.6rem;
  padding-top: 1.95rem;
  padding-left: 0.7rem;
  @media screen and (max-width: 767px) {
    width: 8rem;
    height: 8rem;
    color: black;
    margin-left: 8rem;
  }
`;

export const ContainerCenter = styled.div`
  width: 50rem;
  height: 13rem;
  float: left;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 1.2rem;
  padding-left: 2.5rem;
  padding-top: 1rem;
  font-size: 12px;
  border-radius: 0.2rem;
  @media screen and (max-width: 767px) {
    width: 28rem;
    height: 12rem;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    margin-left: 0.01rem;
    padding-top: 1rem;
    padding-left: 1.2rem;
    font-size: 12px;
    border-radius: 0.2rem;
  }
`;

export const ContainerBottom = styled.div`
  width: 50rem;
  height: 20rem;
  float: left;
  margin-top: 0.5rem;
  margin-left: 10.6rem;
  margin-bottom: 1.2rem;
  padding-left: 2.5rem;
  font-size: 12px;
  border-radius: 0.2rem;
  @media screen and (max-width: 767px) {
    width: 28rem;
    height: 12rem;
    margin-top: 2rem;
    margin-left: 0.01rem;
    margin-bottom: 1.2rem;
    padding-left: 1.2rem;
    font-size: 12px;
    border-radius: 0.2rem;
  }
`;

export const ProfileImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 3.75rem;
  margin-right: 0;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 767px) {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 3.75rem;
  }
`;

export const BackButton = styled.button`
  width: 2.5rem;
  height: 1.6rem;
  float: left;
  margin-left: 32.5rem;
  margin-top: 0.45rem;
  font-size: 0.5rem;
  background-color: white;
  color: #707bf3;
  @media screen and (max-width: 767px) {
    width: 2.5rem;
    height: 1.6rem;
    float: left;
    margin-left: 6.5rem;
    margin-top: 0.3rem;
    font-size: 0.5rem;
    background-color: #707bf3;
    color: white;
  }
`;

export const EditButton = styled.button`
  width: 2.5rem;
  height: 1.6rem;
  font-size: 0.5rem;
  margin-top: 0.45rem;
  margin-left: 0.6rem;
  padding: 0;
  background-color: #707bf3;
  color: white;
  @media screen and (max-width: 767px) {
    width: 2.5rem;
    height: 1.6rem;
    font-size: 0.5rem;
    margin-top: 0.3rem;
    margin-left: 0.6rem;
    padding: 0;
    background-color: #707bf3;
    color: white;
  }
`;

export const TagLabel = styled.span`
  clear: left !important;
  margin-top: 1.2rem;
  margin-left: 0.2rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

export const TagContainer = styled.div`
  width: 0.1rem;
  height: 2rem;
  font-size: 0.8rem;
  float: left;
`;
export const TagField = styled(Form.Field)`
  width: 10.5rem;
  /* float: left !important; */
  font-size: 0.8rem;
`;
export const Tagg = styled(Label)`
  float: left;
  background-color: #707bf3 !important;
  color: white !important;
  border-radius: 1rem !important;
  font-size: 0.75rem !important;
  margin-right: 0.4rem !important;
  margin-bottom: 0.3rem !important;
`;

export const TagButton = styled.button`
  width: 3.5rem;
  height: 1.5rem;
  float: left !important;
  border-radius: 0.1rem;
  font-size: 0.6rem;
  margin-left: 0.2rem;
  margin-bottom: 0.5rem;
  background-color: white;
  color: #707bf3;
`;

export const TagButton2 = styled.button`
  width: 3rem;
  height: 1.4rem;
  border-radius: 0.1rem;
  font-size: 0.6rem;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: white;
  color: #707bf3;
`;

export const PhotoInput = styled(Input)`
  width: 5rem !important;
  height: 2.5rem !important;
  display: none !important;
`;

export const PhotoButton = styled.label`
  width: 5rem !important;
  height: 1.5rem !important;
  font-size: 0.6rem !important;
  margin-top: 1rem !important;
  margin-left: 1.9rem !important;
  padding: 0.4rem;
  background-color: #707bf3 !important;
  color: white !important;
  font-family: 'NS-R' !important;
  cursor: pointer;
`;

export const UNField = styled(Form.Field)`
  width: 9.4rem;
  height: 2rem;
  float: left !important;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    width: 9.4rem;
    height: 2rem;
    float: left !important;
    margin-left: 0.01rem !important;
    margin-bottom: 0;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const AboutField = styled(Form.Field)`
  width: 42rem;
  height: 4.8rem;
  clear: left;
  font-size: 0.9rem;
  resize: none;
  @media screen and (max-width: 767px) {
    width: 22rem;
    height: 4.8rem;
    font-size: 0.9rem;
    resize: none;
  }
`;

export const SnsField = styled(Form.Field)`
  width: 42rem;
  font-size: 0.9rem;
  @media screen and (max-width: 767px) {
    width: 22rem;
    height: 2.8rem;
    font-size: 0.9rem;
    resize: none;
  }
`;

export const Labell = styled.div`
  width: 5rem;
  clear: left;
  font-size: 0.8rem;
`;

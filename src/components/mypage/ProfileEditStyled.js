import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const InfoEdit = styled.div`
  width: 65rem;
  padding-left: 2rem;
`;

export const ContainerLeft = styled.div`
  width: 8rem;
  height: 10rem;
  float: left;
  color: black;
  margin: 0.5rem auto auto 1.6rem;
  padding-top: 1.95rem;
  padding-left: 0.7rem;
`;

export const ContainerCenter = styled.div`
  width: 50rem;
  height: 40rem;
  float: left;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 1.2rem;
  padding-left: 2.5rem;
  padding-top: 1rem;
  font-size: 12px;
  border-radius: 0.2rem;
`;

export const ProfileImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 3.75rem;
  margin-right: 0;
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
`;

export const TagLabel = styled.span`
  float: left;
  margin-top: 0.8rem;
  margin-left: 0.2rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

export const PhotoInput = styled.input`
  width: 5rem;
  height: 1.5rem;
  font-size: 0.5rem;
  margin-top: 0.6rem;
  margin-left: 1.2rem;
  background-color: #707bf3;
  color: white;
`;

export const UNField = styled(Form.Field)`
  width: 9.4rem;
  height: 2rem;
  float: left;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const AboutField = styled(Form.Field)`
  width: 42rem;
  height: 5rem;
  clear: left;
  font-size: 0.9rem;
  resize: none;
`;

export const SnsField = styled(Form.Field)`
  width: 42rem;
  font-size: 0.9rem;
`;

import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const InfoEdit = styled.div`
  width: 65rem;
`;

export const ContainerLeft = styled.div`
  width: 8rem;
  height: 10rem;
  float: left;
  color: black;
  margin: 0.5rem auto auto 1.6rem;
  padding-top: 1.5rem;
  padding-left: 2.8rem;
`;

export const ContainerCenter = styled.div`
  width: 48rem;
  height: 10rem;
  float: left;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 1.2rem;
  padding-left: 2.5rem;
  padding-top: 1rem;
  font-size: 12px;
  border-radius: 0.2rem;
`;

export const ContainerBottom = styled.div`
  width: 47.2rem;
  clear: left;
  margin-left: 1.5rem;
  padding-left: 11.5rem;
  padding-top: 2rem;
  font-size: 12px;
  border-radius: 0.2rem;
`;

export const ProfileImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 3.5rem;
  margin-right: 0;
`;

export const BackButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 0.1rem;
  float: left;
  margin-left: 30.5rem;
  margin-top: 0.45rem;
  font-size: 0.5rem;
  background-color: white;
  color: #707bf3;
`;

export const EditButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 0.1rem;
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

export const UploadButton = styled.button`
  width: 5rem;
  height: 1.5rem;
  border-radius: 0.1rem;
  font-size: 0.5rem;
  margin-top: 0.6rem;
  margin-left: 1.1rem;
  background-color: #707bf3;
  color: white;
`;

export const UNField = styled(Form.Field)`
  width: 8rem;
  height: 1.8rem;
  float: left;
  margin-bottom: 0;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const AboutField = styled(Form.Field)`
  width: 38rem;
  height: 4.1rem;
  clear: left;
  font-size: 0.8rem;
`;

export const TagField = styled(Form.Field)`
  clear: left;
  width: 38rem;
  font-size: 0.8rem;
`;

export const SnsField = styled(Form.Field)`
  width: 38rem;
  font-size: 0.6rem;
`;

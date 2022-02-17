import styled from 'styled-components';
import { Form, Label } from 'semantic-ui-react';

export const Profile = styled.div`
  width: 100%;
  position: relative;
  .choice1 {
    margin-top: 0.6rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice1.active {
    margin-top: 0.6rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    text-decoration: underline;
    color: #707bf3;
  }
  .choice2 {
    margin-top: 0.6rem;
    margin-left: 1.1rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice2.active {
    margin-top: 0.6rem;
    margin-left: 1.1rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    text-decoration: underline;
    color: #707bf3;
  }
`;
export const ContainerLeft = styled.div`
  width: 10rem;
  height: 11.5rem;
  float: left;
  color: black;
  padding-top: 2.5rem;
  padding-left: 2.3rem;
`;
export const ContainerCenter = styled.div`
  max-width: 100%;
  height: 11.5rem;
  float: left;
  margin-top: 0.5rem;
  padding-left: 1.8rem;
  padding-top: 2rem;
  padding-right: 1.8rem;
  font-size: 12px;
  position: relative;
`;
export const SnsAccountContainer = styled.div`
  width: 9rem;
`;
export const ContainerTab = styled.div`
  width: 100%;
  height: 3rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const ContainerBottom = styled.div`
  width: 100%;
`;
export const ProfileImg = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 3.75rem;
  margin-right: 0;
`;
export const UserName = styled.span`
  float: left;
  margin-bottom: 0.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'NS-R';
`;
export const Email = styled.span`
  float: left;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
`;
export const Introduce = styled.div`
  clear: left;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  padding-top: 0.5rem;
`;
export const Tags = styled.span`
  margin-top: 0.3rem;
  font-size: 0.8rem;
  margin-left: 0.15rem;
  margin-right: 0.35rem;
  border-radius: 0.8rem;
  color: white;
  background-color: #707bf3;
  padding: 0.25rem 0.45rem;
  font-family: 'NS-R';
  float: left;
`;
export const EditButton = styled.button`
  width: 4.5rem;
  height: 1.6rem;
  border-radius: 0.1rem;
  font-size: 0.7rem;
  margin-top: 0.6rem;
  padding: 0;
  background-color: #707bf3;
  color: white;
  position: absolute;
  top: 0;
  right: 1.8rem;
`;
export const IconContainer = styled.div`
  width: 12rem;
  height: 4rem;
`;

export const FBIcon = styled.img`
  float: left;
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
  opacity: 0.6;
`;
export const InstaIcon = styled.img`
  float: left;
  width: 1.45rem;
  height: 1.45rem;
  margin-right: 0.5rem;
  opacity: 0.6;
`;
export const TwittIcon = styled.img`
  float: left;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  opacity: 0.6;
`;

export const Line = styled.div`
  clear: left;
  width: 100%;
  height: 0.1rem;
  margin-left: 0.5rem;
  margin-right: 2rem;
  background-color: #eaeaea;
`;

export const TabButton = styled.div`
  font-size: 1.15rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;
export const TagButton = styled.button`
  float: left;
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
export const TagField = styled(Form.Field)`
  width: 10.5rem;
  float: left;
  font-size: 0.8rem;
`;
export const TagContainer = styled.div`
  float: left;
  font-size: 0.8rem;
`;
export const Tagg = styled(Label)`
  background-color: #707bf3 !important;
  color: white !important;
  border-radius: 1rem !important;
  font-size: 0.75rem !important;
  margin-right: 0.4rem !important;
  margin-bottom: 0.3rem !important;
`;

export const ContainerTop = styled.div`
  width: 28rem;
  max-width: 100%;
  height: 9.5rem;
  float: left;
  /* background-color: grey; */
`;

export const ContainerTag = styled.div`
  margin-top: 2.5rem;
  padding-left: 7.7rem;
`;

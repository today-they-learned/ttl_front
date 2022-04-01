import styled from 'styled-components';
import { Label } from 'semantic-ui-react';
import media from 'styles/media';

export const ProfileInfo = styled.div`
  width: 95%;
  margin-left: 2.3%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .choice1 {
    margin-top: 0.6rem;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice1.active {
    margin-top: 0.6rem;
    font-weight: 1000;
    font-family: 'NS-R';
    text-decoration: underline;
    color: #707bf3;
  }
  .choice2 {
    margin-top: 0.6rem;
    margin-left: 1.1rem;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice2.active {
    margin-top: 0.6rem;
    margin-left: 1.1rem;
    font-weight: 1000;
    font-family: 'NS-R';
    text-decoration: underline;
    color: #707bf3;
  }
`;
export const ContainerProfile = styled.div`
  width: 96%;
  height: 9.5rem;
  display: flex;
  flex-direction: row;
  color: black;
`;
export const ContainerLeft = styled.div`
  width: 8rem;
  height: 9rem;
  margin-left: 3rem;
  color: black;
  ${media.tablet`
  margin-left: 0.5rem;
  `}
`;
export const ContainerCenter = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 0.1rem;
  padding-left: 1.5rem;
  font-size: 12px;
  ${media.tablet`
    padding-left: 0.5rem;
  `}
`;
export const ContainerRight = styled.div`
  height: 9rem;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;
export const SnsAccountContainer = styled.div`
  display: flex;
  margin-top: 4.5rem;
  height: 2rem;
`;
export const ContainerTab = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
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
  margin-top: 0.2rem;
  ${media.tablet`
    width: 7rem;
    height: 7rem;
  `}
`;
export const UserName = styled.span`
  margin-bottom: 0.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'NS-R';
`;
export const Email = styled.span`
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
`;
export const Introduce = styled.div`
  height: 3.5rem;
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
`;
export const EditButton = styled.button`
  width: 4.5rem;
  height: 1.6rem;
  border-radius: 0.1rem;
  font-size: 0.7rem;
  margin-top: 0.6rem;
  margin-left: 0.2rem;
  background-color: #707bf3;
  color: white;
  top: 0;
  right: 1.8rem;
`;
export const FBIcon = styled.img`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
  opacity: 0.6;
`;
export const InstaIcon = styled.img`
  width: 1.45rem;
  height: 1.45rem;
  margin-right: 0.5rem;
  opacity: 0.6;
`;
export const TwittIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
  opacity: 0.6;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #eaeaea;
`;

export const TabButton = styled.div`
  font-size: 1.15rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;
export const TagContainer = styled.div`
  display: flex;
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
export const ContainerUE = styled.div`
  display: flex;
  height: 0.8rem;
`;

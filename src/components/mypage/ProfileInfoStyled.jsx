import styled from 'styled-components';

export const Profile = styled.div`
  width: 65rem;
  /* background: #eaeaea; */
  .choice1 {
    margin-top: 0.6rem;
    margin-left: 3rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice1.active {
    margin-top: 0.6rem;
    margin-left: 3rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    text-decoration: underline;
    color: #707bf3;
  }
  .choice2 {
    margin-top: 0.6rem;
    margin-left: 1.5rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice2.active {
    margin-top: 0.6rem;
    margin-left: 1.5rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    text-decoration: underline;
    color: #707bf3;
  }
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
  width: 32rem;
  height: 10rem;
  float: left;
  margin-top: 0.5rem;
  padding-left: 3.2rem;
  padding-top: 1rem;
  font-size: 12px;
`;
export const ContainerRight = styled.div`
  width: 9rem;
  height: 10rem;
  margin-top: 0.5rem;
  margin-left: 10rem;
  padding-left: 0.5rem;
  padding-top: 0.9rem;
  float: left;
`;
export const ContainerTab = styled.div`
  clear: left;
  width: 63rem;
  height: 3rem;
  margin-left: 2.8rem;
`;

export const ContainerBottom = styled.div`
  width: 63rem;
  margin-left: 2.8rem;
`;
export const ProfileImg = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 3.5rem;
  margin-right: 0;
`;
export const UserName = styled.span`
  float: left;
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'NS-R';
`;
export const Email = styled.span`
  float: left;
  margin-bottom: 0.4rem;
  font-size: 0.7rem;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
`;
export const Introduce = styled.div`
  clear: left;
  margin-bottom: 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  height: 3.8rem;
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
  height: 1.5rem;
  font-size: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 3.2rem;
  padding: 0;
  background-color: #707bf3;
  color: white;
`;
export const IconContainer = styled.div`
  width: 12rem;
  height: 2rem;
  padding-left: 3.2rem;
  padding-top: 4.7rem;
`;

export const FBIcon = styled.img`
  float: left;
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
`;
export const InstaIcon = styled.img`
  float: left;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 0.5rem;
`;
export const TwittIcon = styled.img`
  float: left;
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

export const Line = styled.div`
  clear: left;
  width: 62.5rem;
  height: 0.1rem;
  background-color: #eaeaea;
`;

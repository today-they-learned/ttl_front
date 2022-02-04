import styled from 'styled-components';

export const Card = styled.div`
  width: 18.75rem;
  height: 24rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-0.8rem);
    box-shadow: 1px 1px 10px -5px black;
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem;
  font-family: 'NS-B';
  letter-spacing: -0.5px;
`;

export const Content = styled.div`
  font-size: 0.7rem;
  margin: 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1rem;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
  letter-spacing: -0.3px;
`;

export const Tag = styled.div`
  font-size: 0.7rem;
  margin-left: 0.5rem;
  border-radius: 1rem;
  color: white;
  background-color: #707bf3;
  padding: 0.3rem 0.5rem;
  font-family: 'NS-L';
`;

export const Avatar = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
`;

export const UserName = styled.p`
  font-size: 0.8rem;
  font-family: 'NS-R';
`;

export const CreatedAt = styled.div`
  font-size: 0.7rem;
  margin: 0.5rem 1rem;
  color: #adadad;
`;

export const CardBody = styled.div`
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #eeeeee;
    transform: translateY(0.1rem);
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  height: 2rem;
  padding-bottom: 1.5rem;
`;

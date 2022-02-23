import styled, { css } from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  width: 18.75rem;
  height: 24rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 1px 1px 10px -5px black;
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin: 1rem;
  font-family: 'NS-B';
  letter-spacing: -0.5px;
`;

export const Content = styled.div`
  font-family: 'NS-R';
  font-size: 0.85rem;
  margin: 0 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
  letter-spacing: -0.3px;
  text-overflow: ellipsis;

  ${(props) =>
    props.thumbnail
      ? css`
          -webkit-line-clamp: 3;
          height: 3rem;
        `
      : css`
          -webkit-line-clamp: 6;
          max-height: 10rem;
        `}
`;

export const TagContent = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  /* overflow: hidden; */
`;

export const Tag = styled.div`
  font-size: 0.8rem;
  margin-left: 0.5rem;
  border-radius: 1rem;
  color: white;
  background-color: #707bf3;
  padding: 0.3rem 0.5rem;
  font-family: 'NS-R';
`;

export const Avatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const UserName = styled.p`
  font-size: 1rem;
  font-family: 'NS-R';
`;

export const CreatedAt = styled.div`
  font-size: 0.85rem;
  margin: 0.5rem 1rem;
  color: #adadad;
`;

export const CardBody = styled.div`
  height: 12rem;

  ${(props) =>
    props.thumbnail ||
    css`
      margin-bottom: 8.9rem;
    `}
`;

export const Line = styled.div`
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin-bottom: 1rem;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  height: 2rem;
  padding-bottom: 1rem;
`;

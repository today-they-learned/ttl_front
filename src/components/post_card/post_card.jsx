/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from 'semantic-ui-react';

const PostCard = ({ postCard }) => {
  const {
    thumbnail,
    title,
    content,
    tags,
    created_at,
    like,
    avatar,
    username,
  } = postCard;

  // 225ox

  const Card = styled.div`
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
      opacity: 0.3;
      box-shadow: 1px 1px 10px -5px black;
    }
  `;

  const BookMark = styled.div`
    opacity: 0.3;
    color: white;

    ${Card}:hover & {
      opacity: 1;
      color: black;
    }
  `;

  const Thumbnail = styled.img`
    width: 100%;
    height: 200px;
  `;

  const Title = styled.div`
    font-size: 1rem;
    font-weight: 500;
    margin: 1rem;
    font-family: 'NS-B';
    letter-spacing: -0.5px;
  `;

  const Content = styled.div`
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

  const Tag = styled.div`
    font-size: 0.7rem;
    margin-left: 0.5rem;
    border-radius: 1rem;
    color: #707bf3;
    border: 1px solid #b3b4bd;
    padding: 0.3rem 0.5rem;
    font-family: 'NS-B';
  `;

  const Avatar = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: black;
    margin-right: 0.5rem;
  `;

  const UserName = styled.p`
    font-size: 0.8rem;
    font-family: 'NS-R';
  `;

  const CreatedAt = styled.div`
    font-size: 0.7rem;
    margin: 0.5rem 1rem;
    color: #adadad;
  `;

  const CardBody = styled.div`
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #eeeeee;
      transform: translateY(0.1rem);
    }
  `;

  const CardBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    height: 2rem;
    padding-bottom: 1.5rem;
  `;

  const Heart = styled.div`
    /* opacity: 0.1;

    ${Card}:hover & {
      opacity: 1;
    } */
  `;

  return (
    <Card>
      <BookMark>
        <Icon
          name="bookmark"
          style={{
            position: 'absolute',
            right: '0.3rem',
            top: '0.5rem',
            fontSize: '1.5rem',
          }}
        />
      </BookMark>
      <Thumbnail src={thumbnail} />
      <CardBody>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{ display: 'flex', marginLeft: '0.5rem', marginTop: '1rem' }}
          >
            {Object.keys(tags).map(key => (
              <Tag>{tags[key]}</Tag>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CreatedAt>{created_at}</CreatedAt>
          </div>
        </div>
      </CardBody>
      <hr />
      <CardBottom>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={avatar} />
          <UserName>{username}</UserName>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Heart>
            <Icon name="heart" />
          </Heart>
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {like}
          </p>
        </div>
      </CardBottom>
    </Card>
  );
};

PostCard.propTypes = {
  postCard: PropTypes.node.isRequired,
};

export default PostCard;

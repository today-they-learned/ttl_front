/* eslint-disable camelcase */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
  Card,
  Thumbnail,
  Title,
  Content,
  Tag,
  Avatar,
  UserName,
  CreatedAt,
  CardBody,
  CardBottom,
} from './post_card_styled';

const PostCard = ({ post }) => {
  const { thumbnail, title, content, tags, created_at, like, avatar, username } = post;

  return (
    <Card>
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
          <div style={{ display: 'flex', marginLeft: '0.5rem', marginTop: '1rem' }}>
            {Object.keys(tags).map((key) => (
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
          <Icon name="heart" />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>{like}</p>
        </div>
      </CardBottom>
    </Card>
  );
};

export default PostCard;

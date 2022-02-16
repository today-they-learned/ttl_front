/* eslint-disable camelcase */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import {
  Card,
  ThumbnailContainer,
  Thumbnail,
  Title,
  Content,
  Tag,
  Avatar,
  UserName,
  CreatedAt,
  CardBody,
  CardBottom,
  Line,
} from './post_card_styled';

const PostCard = ({ post }) => {
  const { thumbnail, title, content, tags, createdAt, feedbackCount, user } = post;

  return (
    <Card>
      {thumbnail && (
        <ThumbnailContainer>
          <Thumbnail src={thumbnail} />
        </ThumbnailContainer>
      )}
      <CardBody thumbnail={thumbnail}>
        <Title>{title}</Title>
        <Content thumbnail={thumbnail}>{content}</Content>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', marginLeft: '0.5rem', marginTop: '1rem' }}>
            {Object.keys(tags).map((key) => (
              <Tag key={key}>{tags[key]}</Tag>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CreatedAt>{createdAt}</CreatedAt>
          </div>
        </div>
      </CardBody>
      <Line />
      <CardBottom>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={user.avatar} />
          <UserName>{user.username}</UserName>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="heart" />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>{feedbackCount}</p>
        </div>
      </CardBottom>
    </Card>
  );
};

export default PostCard;

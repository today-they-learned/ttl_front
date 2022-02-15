/* eslint-disable camelcase */

import Feedback from 'components/feedback/feedback';
import React, { useState } from 'react';
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
  Line,
} from './post_card_styled';

const PostCard = ({ post }) => {
  const { thumbnail, title, content, tags, createdAt, feedbackCount, user } = post;
  const [feedback] = useState([
    {
      category: 'thumbs_up',
      total: 3,
    },
    {
      category: 'heart',
      total: 2,
    },
    {
      category: 'clap',
      total: 1,
    },
    {
      category: 'lion',
      total: 4,
    },
    {
      category: 'thinking',
      total: 6,
    },
    {
      category: 'smile',
      total: 3,
    },
    {
      category: 'clover',
      total: 3,
    },
    {
      category: 'eyes',
      total: 3,
    },
    {
      category: 'perfect',
      total: 3,
    },
    {
      category: 'bulb',
      total: 3,
    },
  ]);

  return (
    <Card>
      {thumbnail && <Thumbnail src={thumbnail} />}
      <CardBody>
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
          <Feedback feedback={feedback} />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {`+${feedbackCount}`}
          </p>
        </div>
      </CardBottom>
    </Card>
  );
};

export default PostCard;

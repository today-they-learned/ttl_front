/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import useDate from 'hooks/useDate';
import removeMarkdown from 'markdown-to-text';
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
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        navigate(`/article/${post.id}`);
      }}
    >
      {post.thumbnail && <Thumbnail src={post.thumbnail} />}
      <CardBody>
        <Title>{post.title}</Title>
        <Content thumbnail={post.thumbnail}>
          <p>{removeMarkdown(post.content)}</p>
        </Content>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', marginLeft: '0.5rem', marginTop: '1rem' }}>
            {Object.keys(post.tags).map((key) => (
              <Tag key={key}>{post.tags[key]}</Tag>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CreatedAt>{useDate(post.createdAt)}</CreatedAt>
          </div>
        </div>
      </CardBody>
      <Line />
      <CardBottom>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar src={post.user.avatar} />
          <UserName>{post.user.username}</UserName>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Icon name="heart" />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {post.feedbackCount}
          </p>
          <Icon name="heart" />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {post.feedbackCount}
          </p>
        </div>
      </CardBottom>
    </Card>
  );
};

export default PostCard;

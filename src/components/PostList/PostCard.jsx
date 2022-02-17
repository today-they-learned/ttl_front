/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */

import Feedback from 'components/Feedback/Feedback';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useDate from 'hooks/useDate';
import removeMarkdown from 'markdown-to-text';
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
} from './PostCardStyled';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/article/${post.id}`);
      }}
    >
      {post.thumbnail && (
        <ThumbnailContainer>
          <Thumbnail src={post.thumbnail} />
        </ThumbnailContainer>
      )}
      <CardBody thumbnail={post.thumbnail}>
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
          <Feedback feedback={post.feedback} />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {`+${post.feedbackCount}`}
          </p>
        </div>
      </CardBottom>
    </Card>
  );
};

export default PostCard;

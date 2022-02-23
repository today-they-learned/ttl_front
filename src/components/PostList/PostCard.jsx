/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */

import Feedback from 'components/Feedback/Feedback';
import React, { useEffect, useState } from 'react';
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
  TagContent,
} from './PostCardStyled';
import handleTagsStyle from './tag';

const PostCard = ({ post, index }) => {
  const navigate = useNavigate();

  const emoJiLen = post.feedback.length;
  const feedbackArr = [...post.feedback];

  const [firstEmoji, setFirstEmoji] = useState('');
  const [firstEmojiCount, setFirstEmojiCount] = useState(0);
  const [secondEmoji, setSecondEmoji] = useState('');
  const [secondEmojiCount, setSecondEmojiCount] = useState(0);
  const [sortedFeedback] = useState(
    post.feedback &&
      feedbackArr.sort((a, b) => {
        return b.total - a.total;
      }),
  );
  const tagArrLen = handleTagsStyle();
  const [tagArrSlice, setTagArrSlice] = useState(post.tags.slice(0, tagArrLen[index]));
  console.log(tagArrSlice, index);

  useEffect(() => {
    switch (emoJiLen) {
      case 0:
        setFirstEmoji('');
        setFirstEmojiCount(0);
        setSecondEmoji('');
        setSecondEmojiCount(0);
        break;
      case 1:
        setFirstEmoji(sortedFeedback[0].category);
        setFirstEmojiCount(sortedFeedback[0].total);
        setSecondEmoji('');
        setSecondEmojiCount(0);

        break;
      default:
        setFirstEmoji(sortedFeedback[0].category);
        setFirstEmojiCount(sortedFeedback[0].total);
        setSecondEmoji(sortedFeedback[1].category);
        setSecondEmojiCount(sortedFeedback[1].total);
    }
  });

  useEffect(() => {
    setTagArrSlice(post.tags.slice(0, tagArrLen[index]));
  }, []);

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
          <TagContent className="tag_list">
            {post.tags.slice(0, tagArrLen[index]).map((tag) => (
              <Tag>{tag}</Tag>
            ))}
            {/* {Object.keys(post.tags).map((key) => {
              // eslint-disable-next-line no-plusplus
              return <Tag key={key}>{post.tags[key]}</Tag>;
            })} */}
          </TagContent>

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
          <Avatar
            src={
              post.user.avatar ? post.user.avatar : `${process.env.PUBLIC_URL}/images/missing.png`
            }
          />
          <UserName>{post.user.username}</UserName>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Feedback
            firstEmoji={firstEmoji}
            secondEmoji={secondEmoji}
            firstEmojiCount={firstEmojiCount}
            secondEmojiCount={secondEmojiCount}
            emoJiLen={emoJiLen}
          />
          <p style={{ fontSize: '0.7rem', fontFamily: 'NS-R', color: 'grey' }}>
            {post.feedbackCount - firstEmojiCount - secondEmojiCount !== 0 &&
              `+${post.feedbackCount - firstEmojiCount - secondEmojiCount}`}
          </p>
        </div>
      </CardBottom>
    </Card>
  );
};

export default PostCard;

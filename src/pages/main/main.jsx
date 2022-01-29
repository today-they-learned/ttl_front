/* eslint-disable react/prop-types */
import PostCard from 'components/post_card/post_card';
import styled from 'styled-components';

import React, { useState } from 'react';

const Post = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const PostCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

const PostTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  margin-bottom: 2rem;
  width: 100%;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #eeeeee;
    transform: translateY(1rem);
  }
`;

const Main = () => {
  const [posts] = useState({
    1: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    2: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    3: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    4: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    5: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    6: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    7: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    8: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
    9: {
      id: '1',
      thumbnail: 'images/thumbnail.png',
      title: '[혼공JS📒] 이건 메인 피드다',
      content:
        '치즈덕 명언 키야이제부터라도 열심히 자바스크립트 공부를 해야겠다는 생각이 드는 사진이다. 빠빠샤!자료(data) : 프로그래밍에서 프로그램이 처리할 수 있는 모든 것자료형(data type) : 자료 형태에 따라 나눠 놓은 것 1. 문자열 자료형 2. 숫자 자료형 ',
      tags: {
        1: 'Javascript',
        2: 'FrontEnd',
      },
      created_at: '2022년 1월 26일',
      like: 0,
      avatar: 'images/avatar.png',
      username: 'cychann',
    },
  });

  return (
    <Post>
      <PostTop>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'GS-B', fontSize: '2rem', color: '#707bf3' }}>
            피드
          </p>
          <select
            name="post_option"
            id=""
            style={{
              width: '5rem',
              padding: '.3em .5em',
            }}
          >
            <option value="인기순">인기순</option>
            <option value="최신순">최신순</option>
          </select>
        </div>
      </PostTop>
      <PostCards>
        {Object.keys(posts).map(key => (
          <PostCard key={key} postCard={posts[key]} />
        ))}
      </PostCards>
    </Post>
  );
};
export default Main;

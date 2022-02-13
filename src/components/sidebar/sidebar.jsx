/* eslint-disable no-new-object */
import React from 'react';
import styled from 'styled-components';
import 'styles/sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'react-minimal-side-navigation';

import { Icon } from 'semantic-ui-react';

const Bar = styled.div`
  position: sticky;
  top: 200px;
  width: 10.5rem;
  height: 100%;
`;

const SideBar = () => {
  const dispatch = useDispatch();
  const { tags, loadTagLoading } = useSelector((state) => state.tag);
  console.log(tags, loadTagLoading);

  // 배열로 받은 태그목록을 배열 내 각각의 object로 변환한 뒤 아래 subNav에 전달
  const tagEx = ['aws', 'javascript', 'react'];
  const setArr = [];
  tagEx.forEach((tag) => {
    const curObj = new Object();
    curObj.title = tag;
    curObj.itemId = `/tags/${tag}`;
    setArr.push(curObj);
  });

  const setType = (itemId) => {
    dispatch({ type: `${itemId.item}`, title: `${itemId.title}` });
  };
  return (
    <>
      <Bar>
        <Navigation
          onSelect={({ itemId }) => {
            setType(itemId);
          }}
          items={[
            {
              title: '피드',
              itemId: { item: 'main', title: '피드' },
              elemBefore: () => <Icon name="th large" style={{ fontSize: '1.2rem' }} />,
            },
            {
              title: '그룹',
              itemId: { item: 'group', title: '그룹' },
              elemBefore: () => <Icon name="users" style={{ fontSize: '1.2rem' }} />,
            },
            {
              title: '팔로우',
              itemId: { item: 'follow', title: '팔로우' },
              elemBefore: () => <Icon name="user plus" style={{ fontSize: '1.2rem' }} />,
            },
            {
              title: '관심태그',
              itemId: '/tags',
              elemBefore: () => <Icon name="tags" style={{ fontSize: '1.2rem' }} />,

              subNav: setArr,
              // [
              //   {
              //     title: 'aws',
              //     itemId: '/tags/aws',
              //   },
              //   {
              //     title: 'spring',
              //     itemId: '/tags/spring',
              //   },
              //   {
              //     title: 'django',
              //     itemId: '/tags/django',
              //   },
              // ],
            },
            {
              title: '북마크',
              itemId: { item: 'bookmark', title: '북마크' },
              elemBefore: () => <Icon name="bookmark" style={{ fontSize: '1.2rem' }} />,
            },
            {
              title: '읽은 목록',
              itemId: { item: 'read_list', title: '읽은 목록' },
              elemBefore: () => <Icon name="eye" style={{ fontSize: '1.2rem' }} />,
            },
          ]}
        />
      </Bar>
    </>
  );
};

export default SideBar;

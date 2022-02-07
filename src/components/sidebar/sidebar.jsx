import React from 'react';
import styled from 'styled-components';
import 'styles/sidebar.css';

import { Icon } from 'semantic-ui-react';

import { Navigation } from 'react-minimal-side-navigation';

const Bar = styled.div`
  position: sticky;
  top: 200px;
  width: 10.5rem;
  height: 100%;
`;

const SideBar = ({ selectFeedType }) => {
  return (
    <>
      <Bar>
        <Navigation
          onSelect={({ itemId }) => {
            selectFeedType(itemId);
            // 나중에 여기에서 피드 타입 설정을 해줄 예정입니다. route를 수정하면서 해당 메뉴를 눌렀을 떄 보여주는 기능은 잠시 없어졌어요
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

              subNav: [
                {
                  title: 'aws',
                  itemId: '/tags/aws',
                },
                {
                  title: 'spring',
                  itemId: '/tags/spring',
                },
                {
                  title: 'django',
                  itemId: '/tags/django',
                },
              ],
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

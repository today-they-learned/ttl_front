import React from 'react';
import styled from 'styled-components';
import 'styles/sidebar.css';

import { Icon } from 'semantic-ui-react';

import { Navigation } from 'react-minimal-side-navigation';

const Bar = styled.div`
  position: sticky;
  top: 200px;
  width: 12.5rem;
  height: 100%;
`;

const SideBar = ({ selectFeedType }) => {
  return (
    <>
      <Bar>
        <Navigation
          onSelect={({ itemId }) => {
            if (itemId) {
              selectFeedType(itemId);
            } else {
              selectFeedType({ item: 'main', title: '피드' });
            }
            // 지금은 예시라 피드, 팔로우, 그룹 말고 다른 것을 선택했을 때는 피드를 보여주도록 했습니다.
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
              // itemId: '/tag',
              elemBefore: () => <Icon name="tags" style={{ fontSize: '1.2rem' }} />,

              subNav: [
                {
                  title: 'aws',
                  // itemId: '/follow/aws',
                },
                {
                  title: 'spring',
                  // itemId: '/follow/spring',
                },
                {
                  title: 'django',
                  // itemId: '/follow/django',
                },
              ],
            },
            {
              title: '북마크',
              // itemId: '/bookmark',
              elemBefore: () => (
                <Icon name="bookmark" style={{ fontSize: '1.2rem', color: '#858f9a' }} />
              ),
            },
            {
              title: '읽은 목록',
              // itemId: '/read_list',
              elemBefore: () => (
                <Icon name="eye" style={{ fontSize: '1.2rem', color: '#858f9a' }} />
              ),
            },
          ]}
        />
      </Bar>
    </>
  );
};

export default SideBar;

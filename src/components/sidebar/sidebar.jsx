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
            selectFeedType(itemId);
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
              itemId: '/bookmark',
              elemBefore: () => <Icon name="bookmark" style={{ fontSize: '1.2rem' }} />,
            },
            {
              title: '읽은 목록',
              itemId: '/read_list',
              elemBefore: () => <Icon name="eye" style={{ fontSize: '1.2rem' }} />,
            },
          ]}
        />
      </Bar>
    </>
  );
};

export default SideBar;

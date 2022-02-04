import React, { useState } from 'react';
import styled from 'styled-components';
import 'styles/sidebar.css';

import { Icon } from 'semantic-ui-react';

import { Navigation } from 'react-minimal-side-navigation';

const Bar = styled.div`
  position: fixed;
  top: 1.2rem;
  left: -1rem;
  width: 100%;
  height: 100%;
  margin-right: 1rem;
  z-index: 1;
`;

const Toggle = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-left: 2rem;
`;
const SidebarList = styled.div`
  display: ${(props) => (props.sidebarToggled ? 'block' : 'none')};

  background-color: white;
  transition: all 100ms ease-in-out;
  height: 100%;
`;

const MobileSideBar = ({ selectFeedType }) => {
  const [sidebarToggled, setSidebarToggled] = useState(false);

  return (
    <>
      <Bar>
        <Toggle>
          <Icon
            name="align justify"
            style={{ fontSize: '1.5rem' }}
            onClick={() => {
              setSidebarToggled(!sidebarToggled);
            }}
          />
        </Toggle>
        <SidebarList sidebarToggled={sidebarToggled} style={{ margin: '1rem 1rem' }}>
          <Navigation
            onSelect={({ itemId }) => {
              selectFeedType(itemId);
              setSidebarToggled(!sidebarToggled);
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
                itemId: '/tag',
                elemBefore: () => <Icon name="tags" style={{ fontSize: '1.2rem' }} />,

                subNav: [
                  {
                    title: 'aws',
                    itemId: '/follow/aws',
                  },
                  {
                    title: 'spring',
                    itemId: '/follow/spring',
                  },
                  {
                    title: 'django',
                    itemId: '/follow/django',
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
        </SidebarList>
      </Bar>
    </>
  );
};

export default MobileSideBar;

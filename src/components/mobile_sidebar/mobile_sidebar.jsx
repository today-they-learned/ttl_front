/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import 'styles/sidebar.css';

import { Icon } from 'semantic-ui-react';

import { Navigation } from 'react-minimal-side-navigation';
import { useNavigate } from 'react-router-dom';

const Bar = styled.div`
  position: sticky;
  top: 180px;
  width: 3rem;
  height: 100%;
  margin-right: 1rem;
`;

const Toggle = styled.div`
  &:hover {
    cursor: pointer;
  }
  margin-left: 2rem;
`;
const SidebarList = styled.div`
  display: ${(props) => (props.sidebarToggled ? 'block' : 'none')};
`;

const MobileSideBar = () => {
  const navigate = useNavigate();
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
              navigate(`${itemId}`);
            }}
            items={[
              {
                title: '피드',
                itemId: '/feed',
                // elemBefore: () => (
                //   <Icon name="th large" style={{ fontSize: '1.2rem' }} />
                // ),
              },
              {
                title: '그룹',
                itemId: '/group',
                // elemBefore: () => (
                //   <Icon name="users" style={{ fontSize: '1.2rem' }} />
                // ),
              },
              {
                title: '팔로우',
                itemId: '/follow',
                // elemBefore: () => (
                //   <Icon name="user plus" style={{ fontSize: '1.2rem' }} />
                // ),
              },
              {
                title: '관심태그',
                itemId: '/tag',
                // elemBefore: () => (
                //   <Icon name="tags" style={{ fontSize: '1.2rem' }} />
                // ),

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
                // elemBefore: () => (
                //   <Icon name="bookmark" style={{ fontSize: '1.2rem' }} />
                // ),
              },
              {
                title: '읽은 목록',
                itemId: '/read_list',
                // elemBefore: () => (
                //   <Icon name="eye" style={{ fontSize: '1.2rem' }} />
                // ),
              },
            ]}
          />
        </SidebarList>
      </Bar>
    </>
  );
};

export default MobileSideBar;

import React from 'react';
import styled from 'styled-components';

import { Navigation } from 'react-minimal-side-navigation';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

const SideBar = props => {
  console.log(props);

  const Bar = styled.div`
    position: sticky;
    top: 200px;
    width: 20rem;
    height: 100%;
  `;
  return (
    <>
      <Bar>
        <Navigation
          onSelect={({ itemId }) => {
            console.log(itemId);
            // 이 itemId 이용해서 url을 설정해줄 계획입니다.
          }}
          items={[
            {
              title: 'Feed',
              itemId: '/feed',
            },
            {
              title: '그룹',
              itemId: '/group',
            },
            {
              title: '팔로우',
              itemId: '/follow',
            },
            {
              title: '관심태그',
              itemId: '/tag',

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
          ]}
        />
        <div style={{ marginTop: '10rem' }}>
          <Navigation
            onSelect={({ itemId }) => {
              console.log(itemId);
              // 이 itemId 이용해서 url을 설정해줄 계획입니다.
            }}
            items={[
              {
                title: '북마크',
                itemId: '/bookmark',
              },
              {
                title: '읽은 목록',
                itemId: '/read_list',
              },
            ]}
          />
        </div>
      </Bar>
    </>
  );
};

export default SideBar;

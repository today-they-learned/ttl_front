import React, { useState } from 'react';
import TopNavbar from 'components/top_navbar/top_navbar';
import SideBar from 'components/sidebar/sidebar';
import PostList from 'components/post_list/post_list';

const DesktopLayout = () => {
  const [feedType, setFeedType] = useState({ item: 'main', title: '메인' });
  const selectFeedType = (type) => {
    setFeedType(type);
  };
  return (
    <div
      style={{
        backgroundColor: '#f8f8f8',
        width: '100%',
      }}
    >
      <TopNavbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1170px',
          margin: 'auto',
          height: '100%',
        }}
      >
        <SideBar selectFeedType={selectFeedType} />
        <PostList feedType={feedType} />
      </div>
    </div>
  );
};

export default DesktopLayout;
